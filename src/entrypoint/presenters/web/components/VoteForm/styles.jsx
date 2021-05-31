import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: "1.1rem",
        paddingBottom: "1.1rem",
        "& .MuiOutlinedInput-root": {
            borderRadius: 15,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 15,
        },
    },
    button: {
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 820,
    },
    error: {
        color: "#ff0033"
    },
}));
