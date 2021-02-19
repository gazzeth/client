import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    gridContainer: {
        justify:"center",
        alignItems:"center",
    },
    card: {
        maxWidth: '70%',
    },
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
    text: {
        textAlign: "justify",
        color: 'black'
    },
    title: {
        fontWeight: 600,
        fontSize: 30,
    },
    lede: {
        fontWeight: 300,
        fontSize: 25,
    },
    body: {
        fontWeight: 200,
        fontSize: 20,
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 340,
    }
}));