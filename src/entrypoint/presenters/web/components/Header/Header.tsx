import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import { URLS } from "@constants/urls";

export default function Header() {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Button className={classes.button} component={Link} to={URLS.home}>
                        <div className={classes.logo}>
                            <div className={classes.typografyContainer}>
                                <Typography variant="h4" className={classes.nameGazz}>Gazz</Typography>
                                <Typography variant="h4" className={classes.nameEth}>Eth</Typography>
                            </div>
                        </div>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
