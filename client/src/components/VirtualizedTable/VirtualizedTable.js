import React, { useState } from "react";
import { AutoSizer, Column, Table } from "react-virtualized";
import { TableCell, Checkbox } from "@material-ui/core";
import TableActionsMenu from './TableActionsMenu';
import useStyles from "./VirtualizedTable.css";
import PropTypes from 'prop-types';
import clsx from 'clsx';

const VirtualizedTable = ({ 
        columns, 
        rows, 
        rowHeight = 48, 
        headerHeight = 48, 
        hasCheckbox,
        rowGetter,
        onRowClick, 
        onRowDelete, 
        onRowDuplicate, 
        onRowUpdate, 
        ...tableProps }) => {
    const [checked, setChecked] = useState([]);
    const [editedRow, setEditedRow] = useState({ _id: -1 });
    const classes = useStyles();

    const getRowClassName = ({ index }) => {
        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    const toggleSelectAll = (isChecked) => {
        isChecked ? setChecked(rows.map(row => row._id)) : setChecked([]);
    };

    const toggleSelectRow = (isChecked, rowData) => {
        isChecked ?
            setChecked(old => [...old, rowData._id]) :
            setChecked(old => old.filter(row => row !== rowData._id));
    };

    const toggleRowEdit = (rowIndex, rowData) => {
        setEditedRow(rowData);
        return Promise.resolve();
    }

    const handleEditSave = () => {
        return onRowUpdate(editedRow).then(() => {
            setEditedRow({ _id: -1 });
            return Promise.resolve();
        });
    }

    const handleEditCancel = () => {
        setEditedRow({ _id: -1 });
    }

    const EditableCell = ({ dataKey }) => {
        const onFieldChange = (newValue, dataKey) => {
            setEditedRow(state => {
                return { ...state, [dataKey]: newValue };
            })
        }

        return (
             <input type="text"
                style={{height: 30, width: '80%', paddingRight: 5, paddingLeft: 5, marginRight: 15, marginLeft: 15}}
                value={editedRow[dataKey]} 
                onChange={(e)=>(onFieldChange(e.target.value, dataKey))} />
        )
    }

    const cellRenderer = (props) => {
        const { cellData, columnType, columnIndex, rowData, dataKey } = props;
        const offset = hasCheckbox ? 1 : 0;

        if (rowData._id === editedRow._id) {
            return <EditableCell dataKey={dataKey} />;
        }

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex - offset].numeric) ||
                    false ? "right" : "left"}
            >
                {columnType === 'date' ? cellData.toLocaleString() : cellData}
            </TableCell>
        );
    };

    const headerRenderer = ({ label, columnIndex }) => {
        return (
            <TableCell
                component="div"
                className={clsx(
                    classes.tableCell,
                    classes.flexContainer,
                    classes.noClick
                )}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? "right" : "left"}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    const checkboxColumnRenderer = () => {
        return (
            <Column
                disableSort
                dataKey="checkbox"
                width={50}
                flexShrink={0}
                flexGrow={1}
                headerRenderer={() => (
                    <Checkbox
                        indeterminate={(checked.length > 0) && (checked.length < rows.length)}
                        checked={checked.length === rows.length}
                        onChange={(e, isChecked) => toggleSelectAll(isChecked)}
                    />
                )}
                cellRenderer={({ rowIndex, rowData }) => (
                    <Checkbox
                        checked={checked.includes(rowData._id) === true}
                        onChange={(e, isChecked) => toggleSelectRow(isChecked, rowData)}
                        index={rowIndex}
                    />
                )}
            />
        )
    }
 
    const actionsColumnRenderer = () => {
        return (
            <Column
                disableSort
                dataKey="action"
                width={70}
                flexShrink={1}
                flexGrow={1}
                headerRenderer={() => ("")}
                cellRenderer={({ rowIndex, rowData }) => (
                    <TableActionsMenu
                        isEdited={editedRow._id === rowData._id}
                        onEditSave={handleEditSave}
                        onEditCancel={handleEditCancel}
                        onDelete={() => onRowDelete(rowData._id)}
                        onDuplicate={() => onRowDuplicate(rowData._id, rowIndex)}
                        onEdit={() => toggleRowEdit(rowIndex, rowData)}
                    />
                )}
            />
        )
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <Table
                    height={height}
                    width={width}
                    rowHeight={rowHeight}
                    gridStyle={{ direction: "inherit" }}
                    headerHeight={headerHeight}
                    className={classes.table}
                    rowClassName={getRowClassName}
                    rowCount={rows.length}
                    rowGetter={rowGetter}
                    {...tableProps}
                >
                    {hasCheckbox && checkboxColumnRenderer()}
                    {columns.map(({ dataKey, type, ...other }, index) => {
                        return (
                            <Column
                                key={dataKey}
                                className={classes.flexContainer}
                                cellRenderer={(cellProps) => 
                                    cellRenderer({
                                        columnType: type, 
                                        ...cellProps
                                    })}
                                dataKey={dataKey}
                                headerRenderer={(headerProps) =>
                                    headerRenderer({
                                        ...headerProps,
                                        columnIndex: index
                                    })}
                                {...other}
                            />
                        );
                    })}
                    {actionsColumnRenderer()}
                </Table>
            )}
        </AutoSizer>
    );
};

export default VirtualizedTable;

VirtualizedTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            numeric: PropTypes.bool,
            width: PropTypes.number.isRequired,
        })
    ).isRequired,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            userGroupName: PropTypes.string.isRequired
        })
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};