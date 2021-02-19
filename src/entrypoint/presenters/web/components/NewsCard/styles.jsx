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
        margin: 7
    },
    statusBar: {
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center'
    },
    falseStatusBar: {
        backgroundColor: theme.palette.status.false
    },
    pendingStatusBar: {
        backgroundColor: theme.palette.status.pending
    },
    trueStatusBar: {
        backgroundColor: theme.palette.status.true
    }
}));
