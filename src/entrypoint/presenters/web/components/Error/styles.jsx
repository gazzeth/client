import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    height: "100vh",
    width: "100vw",
    display: "flex",
    top: 0,
    left: 0,
  },  
  logo: {
    marginBottom: theme.spacing(12),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },  
  typografyContainer: {
    marginLeft: 20,
    display: 'flex',
  },
  brandName: {
    letterSpacing: '-0.19rem',
    color: "#ffffff",
    fontSize: 84,
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  paper: {
    boxShadow: theme.customShadows.widgetDark,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    maxWidth: 404,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    marginBottom: theme.spacing(10),
  },
  error: {
    fontWeight: 600,
    fontSize: 148,
  },
  redirect: {
    color: theme.palette.text.hint,
    fontWeight: 300,
  },
  backButton: {
    fontSize: 22,
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
  },
}));
