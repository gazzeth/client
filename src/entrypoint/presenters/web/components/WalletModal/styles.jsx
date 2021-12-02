import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        minWidth: 400,
        justifyContent: "left",
        padding: "1.1rem",
        margin: "1rem"
    },
    borderContainer: {
        backgroundColor: "#FFFFFF",
        border: `1px solid #ced0d9`,
        borderRadius: 20,
    },
    rightContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "1rem"
    },
    leftContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    errorContainer: {
        border: `1px solid #fd4040`,
    },
    errorText: {
        color: "#fd4040"
    },
    button: {
        textTransform: "none",
        backgroundColor: "#888d9b",
        color: "#000000",
        borderRadius: 10,
        "&:hover": {
            backgroundColor: "#a8abb3"
        }
    },
}), {index: 1});
