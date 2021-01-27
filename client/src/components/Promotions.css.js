import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        marginTop: 30, 
        margin: 'auto',
        minHeight: '90vh',
        width: '90%',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    flexContainer: {
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
    },
    table: {

    },
    tableRow: {
        cursor: "pointer",
    },
    tableRowHover: {
        "&:hover": {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: "initial",
    },
}));
