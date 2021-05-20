import { makeStyles } from "@material-ui/styles";
import tinycolor from "tinycolor2";

const white = "#FFFFFF";

export default makeStyles(theme => ({
    connectButton: {
        backgroundColor: theme.palette.primary.main,
        border: "none",
        fontWeight: 500,
        borderRadius: 20,
        textTransform: "none",
        "&:hover": {
            border: `1px solid ${tinycolor(white)
                .darken(50)
                .toHexString()}`,
            color: tinycolor(white)
                .darken(50)
                .toHexString()
        },
        "&:focus": {
            border: `1px solid ${tinycolor(white)
                .darken(50)
                .toHexString()}`,
        }
    },
    text: {
        flex: "1 1 auto",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        margin: "0 0.5rem 0 0.25rem",
        fontSize: "1rem",
        width: "fit-content",
        fontWeight: 500,
        color: white,
    }
}));