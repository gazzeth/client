import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    button: {
        textTransform: "none",
        color: "#FFFFFF",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 15,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        }
    },
    buttonSelected: {
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 15,
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: "#FFFFFF",
        "&:hover": {
            backgroundColor: "#edeef2",
        }
    },
    container: {
        display: "flex",
        flexDirection: "row",
        minWidth: 400,
        justifyContent: "space-between",
        padding: "0rem",
        margin: "0.2rem"
    },
    buttonOption: {
        textTransform: "none",
        color: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: "#edeef2"
        }
    }
}));
