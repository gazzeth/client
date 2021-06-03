import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    rowContiner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }, 
    columnContiner: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
}));