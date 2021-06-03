import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import { URLS } from "@constants/urls";
import Wallet from "../Wallet/Wallet";

const logo = "https://raw.githubusercontent.com/gazzeth/docs/master/logos/gzt_white.png";

export default function Header() {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Button className={classes.button} component={Link} to={URLS.home}>
                        <div className={classes.logo}>
                            <img src={logo} alt={'Icon'} className={classes.image} />
                        </div>
                    </Button>
                    <Wallet />
                </Toolbar>
            </AppBar>
        </>
    );
}
