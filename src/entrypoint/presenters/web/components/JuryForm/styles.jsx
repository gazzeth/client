import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        justifyContent: "space-around",
        "& .MuiOutlinedInput-root": {
            borderRadius: 15,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 15,
        },
    },
    left: {
        borderBottomLeftRadius: 20,
    },
    right: {
        borderBottomRightRadius: 20,
    },
    container: {
        padding: "0rem",
        border: `1px solid #edeef2`,
        borderRadius: 20,
        backgroundColor: "#f7f8fa",
        marginBottom: "0.5rem",
        width: "100%",
        borderCollapse: "collapse",
        borderStyle: "hidden",
        boxShadow: "0 0 0 1px #edeef2"
    },
    columnContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1.1rem",
    },
    buttonRegistry: {
        textTransform: "none",
        color: "#FFFFFF",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 15,
        border: `1px solid ${theme.palette.primary.main}`,
        width: "100%",
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        },
        "&.MuiButton-root.Mui-disabled": {
            backgroundColor: "#FFFFFF",
            border: "none"
        }
    },
    buttonProgress: {
        color: theme.palette.primary.light,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    button: {
        textTransform: "none",
        backgroundColor: "none",
        color: "#000000",
        borderRadius: 15,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
            backgroundColor: "#edeef2",
            border: `1px solid ${theme.palette.primary.main}`,
        }
    },
    error: {
        color: "#ff0033"
    },
    iconButton: {
        float: "right",
        padding: "0",
    },
}), { index: 1 });
