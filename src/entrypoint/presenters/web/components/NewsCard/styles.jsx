import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "& .MuiCardActions-root": {
            marginTop: "auto"
        }
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
    },
    unqualifiedStatusBar: {
        backgroundColor: "#e6ac00"
    }
}), {index: 1});
