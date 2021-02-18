import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    image: {
        position: "relative",
        height: 140,
    },
    statusBarIcon: {
        color: 'white',
    },
    statusBar: {
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center'
    },
    falseStatusBar: {
        backgroundColor: 'red'
    },
    pendingStatusBar: {
        backgroundColor: 'grey'
    },
    trueStatusBar: {
        backgroundColor: 'green'
    }
}));
