import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import { URLS } from "@constants/urls";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import MetaMaskRepository from "@infraestructure/repositories/wallet/MetaMaskRepository";
import IUseEtherium from "@application/repositories/IEtheriumRepository";

const metamaskRepository = container.get<MetaMaskRepository>(TYPES.MetaMaskRepository);
const useEtherium = container.get<IUseEtherium>(TYPES.IUseEtherium);

export default function Header() {

    const classes = useStyles();

    const [active, account, connector, activate, error] = useEtherium();

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
                    <Button className={classes.button} onClick={() => {activate(metamaskRepository.getConnector(), undefined, true)}}>
                        <Typography>Connect</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
