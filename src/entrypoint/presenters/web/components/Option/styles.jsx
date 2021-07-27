import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    button: {
        backgroundColor: "#edeef2",
        textTransform: "none",
        border: `1px solid #ced0d9`,
        borderRadius: 20,

        "&$disabled": {
            color: "#000000"
        }
    },
    buttonActive: {
        backgroundColor: "#ced0d9",
        "&:hover": {
            backgroundColor: "#ced0d9"
        }
    },
    disabled: {},
    iconContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    textContainer: {
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
        padding: "0.75rem"
    },
    image: {
        height: "24px",
        width: "24px",
    }
}), {index: 1});
