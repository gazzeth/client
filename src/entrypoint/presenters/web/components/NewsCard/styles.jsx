import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    image: {
        position: "relative",
        height: 140,
    },
    overlay: {
        position: 'absolute',
        top: '110px',
        left: '310px',
    },
    trueIcon: {
        color: 'green',
    },
    pendingIcon: {
        color: 'orange',
    },
    falseIcon: {
        color: 'red',
    },
}));
