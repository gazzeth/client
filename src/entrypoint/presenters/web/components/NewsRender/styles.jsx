import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    rowContainer: {
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
    container: {
        padding: "1.1rem"
    }
}), {index: 1});
