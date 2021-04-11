import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import { URLS } from "@constants/urls";
import { container } from "@container-inversify";
import UserService from "@configuration/usecases/UserService";
import { TYPES } from "@constants/types";

const userService = container.get<UserService>(TYPES.UserService);

export default function Header() {

    const classes = useStyles();

    userService.getUserConnectUseCase().connect();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Button className={classes.button} component={Link} to={URLS.home}>
                        <div className={classes.logo}>
                            <div className={classes.typografyContainer}>
                                <Typography variant="h4" className={classes.brandName}>Gazzeth</Typography>
                            </div>
                        </div>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
