import { TableCell } from "@material-ui/core";

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

export default cellRenderer;