import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    button: {
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 15,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
            backgroundColor: "none",
            textDecoration: "underline"
        }
    },
    textContainer: {
        border: `1px solid #000000`,
        borderRadius: 15,
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        paddingTop: "0.375rem",
        paddingBottom: "0.375rem",
        marginRight: "1rem"
    },
    text: {
        color: "#000000",
    },
    columnContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "1.1rem",
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "1.1rem",
    }
}));
