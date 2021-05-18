import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import { Button, Typography } from "@material-ui/core";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import { walletInfo } from "@constants/supported_wallets";

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

type Props = {
    onChange: () => void,
    wallet: walletInfo
}

export default function AccountDetail({ onChange, wallet }: Props) { //Copy addr
    const { t } = useTranslation();
    
    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [chain, account, ] = useActiveBlockchain();

    const classes = useStyles();

    const goToLink = () => {
        const link = blockchainService.getBlockchainGetLinkUsecase().getLink(chain.id, account, "address")
        window.open(link, '_blank');
    }

    const copyAddress = () => {
        navigator.clipboard.writeText(account)
    }

    return (
        <div className={classnames(classes.columnContainer, classes.borderContainer)}>
            <div className={classnames(classes.rowContainer, classes.spaceBetween)}>
                <div className={classnames(classes.leftContainer, classes.errorText)}>
                    <Typography>{t("connected-with", { wallet: wallet.type })}</Typography>
                </div>
                <div className={classes.rightContainer}>
                    <Button className={classes.button} onClick={onChange}>
                        <Typography>{t("change")}</Typography>
                    </Button>
                </div>
            </div>
            <div className={classnames(classes.rowContainer, classes.spaceBetween)}>
                <div className={classnames(classes.leftContainer, classes.errorText)}>
                    <Typography>{blockchainService.getBlockchainGetAddressUsecase().shortenAddress(account)}</Typography>
                </div>
            </div>
            <div className={classnames(classes.rowContainer, classes.spaceBetween)}>
                <div className={classes.leftContainer}>
                    <Button className={classes.button} onClick={copyAddress}>  
                        <Typography>{t("copy-address")}</Typography>
                    </Button>
                </div>
                <div className={classes.rightContainer}>
                    <Button className={classes.button} onClick={goToLink}>
                        <Typography>{t("view-etherscan")}</Typography>
                    </Button>
                </div>
            </div>
        </div>
    )
}
