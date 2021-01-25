import { AutoSizer, Column, Table } from "react-virtualized";
import { TableCell, Checkbox } from "@material-ui/core";
import useStyles from "./VirtualizedTable.css";

const VirtualizedTable = () => {
    const defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    const classes = useStyles();
    const { columns, rowHeight, headerHeight, ...tableProps } = this.props;

    const getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        // return clsx(classes.tableRow, classes.flexContainer, {
        //     [classes.tableRowHover]: index !== -1 && onRowClick != null,
        // });
    };

    const cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                // className={clsx(classes.tableCell, classes.flexContainer, {
                //     [classes.noClick]: onRowClick == null,
                // })}
                variant="body"
                style={{ height: rowHeight }}
                align={
                    (columnIndex != null && columns[columnIndex].numeric) ||
                    false
                        ? "right"
                        : "left"
                }
            >
                {cellData}
            </TableCell>
        );
    };

    const headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns } = this.props;

        return (
            <TableCell
                component="div"
                // className={clsx(
                //     classes.tableCell,
                //     classes.flexContainer,
                //     classes.noClick
                // )}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? "right" : "left"}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    const checkboxRenderer = () => {
        return (
            <TableCell padding="checkbox">
                <Checkbox
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    // onChange={onSelectAllClick}
                />
            </TableCell>
        )
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <Table
                    height={height}
                    width={width}
                    rowHeight={rowHeight}
                    gridStyle={{
                        direction: "inherit",
                    }}
                    headerHeight={headerHeight}
                    className={classes.table}
                    {...tableProps}
                    rowClassName={this.getRowClassName}
                >
                    {columns.map(({ dataKey, ...other }, index) => {
                        return (
                            <Column
                                key={dataKey}
                                headerRenderer={(headerProps) =>
                                    this.headerRenderer({
                                        ...headerProps,
                                        columnIndex: index,
                                    })
                                }
                                className={classes.flexContainer}
                                cellRenderer={this.cellRenderer}
                                dataKey={dataKey}
                                {...other}
                            />
                        );
                    })}
                </Table>
            )}
        </AutoSizer>
    );
};

// VirtualizedTable.propTypes = {
//     classes: PropTypes.object.isRequired,
//     columns: PropTypes.arrayOf(
//         PropTypes.shape({
//             dataKey: PropTypes.string.isRequired,
//             label: PropTypes.string.isRequired,
//             numeric: PropTypes.bool,
//             width: PropTypes.number.isRequired,
//         })
//     ).isRequired,
//     headerHeight: PropTypes.number,
//     onRowClick: PropTypes.func,
//     rowHeight: PropTypes.number,
// };