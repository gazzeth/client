import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        minWidth: 400,
        justifyContent: "left",
        padding: "1.1rem"
    },
    spaceBetween: {
        justifyContent: "space-between",
        padding: "0rem"
    },
    start: {
        justifyContent: "flex-start",
        padding: "0rem"
    },
    columnContainer: {
        display: "flex",
        flexDirection: "column",
        minWidth: 400,
        padding: "1.1rem",
    },
    borderContainer: {
        marginBottom: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        backgroundColor: "#FFFFFF",
        border: `1px solid #ced0d9`,
        borderRadius: 20,
    },
    colorContainer: {
        backgroundColor: "#edeef2",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,      
    },
    rightContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "1rem"
    },
    newLine: {
        marginBottom: "1rem",  
    },
    leftContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    text: {
        color: "#888d9b"
    },
    textAccount: {
        color: "#000000",
    },
    button: {
        textTransform: "none",
        backgroundColor: "none",
        color: "#000000",
        borderRadius: 10,
        "&:hover": {
            backgroundColor: "none",
            textDecoration: "underline"
        }
    },
    buttonChange: {
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 20,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
            backgroundColor: "none",
            textDecoration: "underline"
        }
    }
}), {index: 1});
