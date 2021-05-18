import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        boxShadow: theme.customShadows.widgetDark,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 20,
        padding: "1rem"
    },
    titleRow: {
        justifyContent: 'space-between',
        display: 'flex',
        width: "-moz-available",
    },
    button: {
        textTransform: "none",
        float: "left",
        padding: "0",
        justifyContent: "flex-start",
        '&:hover': {},
    },
    iconButton: {
        float: "right",
        padding: "0",
    }
}));
