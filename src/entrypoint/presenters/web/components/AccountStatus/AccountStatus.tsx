import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import { Button, Typography } from "@material-ui/core";
import BlockchainService from "@configuration/usecases/BlockchainService";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import { URLS } from "@constants/urls";
import SelectLanguage from "../Translation/SelectLanguage";
import BalanceInfo from "../BalanceInfo/BalanceInfo";

const logoGitHub = "https://github.githubassets.com/favicons/favicon-dark.svg";

type Props = {
    onClick: () => void
}

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function AccountStatus({ onClick }: Props) {
    const { t } = useTranslation();

    const classes = useStyles();
    const useBlockchain = blockchainService.getBlockchainGetUseUseCase().getUse()
    const [, account, , ,] = useBlockchain();

    if (account) {
        return (
            <>
                <Button className={classes.connectButton} component={Link} to={URLS.newsForm} >
                    <Typography variant="h4" className={classes.text}>{t("publish-news")}</Typography>
                </Button>
                <Button className={classes.connectButton} component={Link} to={URLS.juryForm} >
                    <Typography variant="h4" className={classes.text}>{t("jurror-inscription")}</Typography>
                </Button>
                <BalanceInfo />
                <Button className={classes.addressButton} onClick={onClick} >
                    <Typography variant="h4" className={classes.text}>{blockchainService.getBlockchainGetAddressUsecase().shortenAddress(account)}</Typography>
                    <Icon account={account} size={16} className={classes.icon} />
                </Button>
                <SelectLanguage />
                <Button target="_blank" href={"https://github.com/gazzeth"}>
                    <div className={classes.logo}>
                        <img src={logoGitHub} alt={'Icon'} className={classes.image} />
                    </div>
                </Button>
            </>
        )
    }
    else {
        return (
            <>
                <Button className={classes.connectButton} onClick={onClick} >
                    <Typography variant="h4" className={classes.text}>{t("connect-to-wallet")}</Typography>
                </Button>
                <SelectLanguage />
            </>
        )
    }
}
