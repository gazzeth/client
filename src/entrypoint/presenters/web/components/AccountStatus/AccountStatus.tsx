import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import { Button, Typography } from "@material-ui/core";
import BlockchainService from "@configuration/usecases/BlockchainService";
import Icon from "../Icon/Icon";

type Props = {
    onClick: () => void
}

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function AccountStatus({ onClick }: Props) {
    const { t } = useTranslation();

    const classes = useStyles();
    const useBlockchain = blockchainService.getBlockchainGetUseUseCase().getUse()
    const [, account, , , error] = useBlockchain();

    if (account) {
        return (
            <Button className={classes.connectButton} onClick={onClick} >
                <Typography variant="h4" className={classes.text}>{blockchainService.getBlockchainGetAddressUsecase().shortenAddress(account)}</Typography>
                <Icon account={account} />
            </Button>
        )
    }
    else {
        return (
            <Button className={classes.connectButton} onClick={onClick} >
                <Typography variant="h4" className={classes.text}>{t("connect-to-wallet")}</Typography>
            </Button>
        )
    }
}
