import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { Typography } from "@material-ui/core";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { SUPPORTED_CURRENCY } from "@constants/supported_currency";
import { Web3Provider } from '@ethersproject/providers'

type Props = {
    lockCost: number,
    library: Web3Provider,
    account: string,
    onChange?: (b: boolean) => void,
}

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function LockInfo({ lockCost, library, account, onChange }: Props) {
    const classes = useStyles();
    const { t } = useTranslation();    
    const [balance, setBalance] = useState("-")
    const daiIcon = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"

    useEffect(() => {
        blockchainService
            .getBlockchainGetBalanceOfUsecase()
            .getBalanceOf(SUPPORTED_CURRENCY.Dai, library)
            .then((balance) => {
                if (onChange !== undefined) {
                    onChange(balance < lockCost)
                }
                setBalance("" + balance)
            })
    }, [library, account, lockCost, onChange])
    
    return (
        <div className={classes.container}>
            <div className={classes.columnStart}>
                <div className={classes.containerBorder}>
                    <img src={daiIcon} alt={'Icon'} className={classes.image} />
                    <Typography variant="h6">DAI</Typography>
                </div>
                <Typography variant="body2">{t("balance", { value: `${balance} DAI` })}</Typography>
            </div>
            <div className={classes.columnEnd}>
                <Typography variant="h4">{lockCost}</Typography>
            </div>
        </div>
    )
}
