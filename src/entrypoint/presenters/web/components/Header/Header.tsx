import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function Header() {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logo}>
                        <div className={classes.typografyContainer}>
                            <Typography variant="h4" className={classes.nameGazz}>Gazz</Typography>
                            <Typography variant="h4" className={classes.nameEth}>Eth</Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}
