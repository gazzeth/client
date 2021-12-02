import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    containerSpinner: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        height: 'auto',
        alignItems: 'center',
        marginTop: '5%',
        minHeight: '500px',
    },
    spinner: {
        width: '20%'
    },
    statusBar: {
        color: 'white',
        width: "100%", 
        padding: "1rem"
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
        backgroundColor: theme.palette.status.unqualified
    },
    noConsentStatusBar: {
        backgroundColor: theme.palette.status.noConsent
    },
    insufficientStatusBar: {
        backgroundColor: theme.palette.status.insufficient
    },
}), {index: 1});