import { makeStyles } from "@material-ui/styles";
import tinycolor from "tinycolor2";

const white = "#FFFFFF";

export default makeStyles(theme => ({
    image: {
        height: "24px",
        width: "24px",
        marginRight: "0.5rem"
    },
    connectButton: {
        backgroundColor: theme.palette.primary.main,
        fontWeight: 500,
        borderRadius: 20,
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
        textTransform: "none",
        border: `1px solid ${tinycolor(white)
            .darken(50)
            .toHexString()}`,
        color: tinycolor(white)
            .darken(50)
            .toHexString(),
        "&:hover": {

        },
        "&:focus": {

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
}), {index: 1});
