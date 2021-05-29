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
    buttonPublish: {
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
    }
}));
