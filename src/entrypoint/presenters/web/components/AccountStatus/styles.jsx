import { makeStyles } from "@material-ui/styles";
import tinycolor from "tinycolor2";

const white = "#FFFFFF";

export default makeStyles(theme => ({
    connectButton: {
        backgroundColor: theme.palette.primary.main,
        border: "none",
        fontWeight: 500,
        borderRadius: 20,
        marginLeft: "0.25rem",
        marginRight: "0.25rem",
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
    addressButton: {
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
            backgroundColor: tinycolor(theme.palette.primary.main)
                .lighten(30)
                .toHexString(),
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
    },
    icon: {
        height: "1rem",
        width: "1rem",
        borderRadius: "1.125rem",
        backgroundColor: "#888D9B"
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      },
      image: {
        height: "35px",
        width: "35px",
      },
}), {index: 1});