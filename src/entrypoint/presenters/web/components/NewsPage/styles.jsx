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
}), {index: 1});