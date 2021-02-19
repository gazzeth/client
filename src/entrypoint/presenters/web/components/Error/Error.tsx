
import React from "react";
import { useTranslation } from 'react-i18next';
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";
import useStyles from "./styles";
import { URLS } from "@constants/urls";

export default function Error() {
    const { t } = useTranslation();

    var classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item>
                <div className={classes.logo}>
                    <div className={classes.typografyContainer}>
                        <Typography variant="h4" className={classes.brandName}>Gazzeth</Typography>
                    </div>
                </div>
            </Grid>
            <Grid item>
                <Paper classes={{ root: classes.paper }}>
                    <Typography variant="h1" color="primary" className={classnames(classes.text, classes.error)}>
                        404
                </Typography>
                    <Typography variant="h5" color="primary" className={classes.text}>
                        {t("page-not-found")}
                    </Typography>
                    <Typography variant="h6" color="primary" className={classnames(classes.text, classes.redirect)}>
                        {t("back-message")}
                    </Typography>
                    <Button variant="contained" color="primary" component={Link} to={URLS.home} size="large" className={classes.backButton}>
                        {t("home")}
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}