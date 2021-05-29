import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    columnEnd: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    columnStart: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        minWidth: 400,
        justifyContent: "space-between",
        padding: "0.75rem",
        border: `1px solid #edeef2`,
        borderRadius: 20,
        backgroundColor: "#f7f8fa",
    },
    image: {
        height: "24px",
        width: "24px",
        marginRight: "0.5rem"
    },
    containerBorder: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.075) 0px 6px 10px",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        marginBottom: "0.5rem"
    }
}));
