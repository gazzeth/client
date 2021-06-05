import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: "1.1rem",
        paddingBottom: "1.1rem",
        marginLeft: "15rem",
        marginRight: "15rem",
        "& .MuiOutlinedInput-root": {
            borderRadius: 15,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 15,
        },
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1.1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        backgroundColor: "#edeef2",
        border: `1px solid #ced0d9`,
        borderRadius: 20,
        minWidth:"700px"
    },
    leftContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    rightContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
}));
