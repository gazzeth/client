import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 250,
    },
    title: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1.1rem",
        "& .MuiOutlinedInput-root": {
            borderRadius: 15,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 15,
        },
    },
    paper: {
        boxShadow: theme.customShadows.widgetDark,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 20,
        minWidth: "600px"
    },
    gridContainer: {
        justify:"center",
    }
}), {index: 1});
