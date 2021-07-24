import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { SUPPORTED_CURRENCY } from "@constants/supported_currency";
import { Button, Typography } from "@material-ui/core";
import ethIcon from "@assets/images/ethereum.png";

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function BalanceInfo() {
    const classes = useStyles();

    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [, account, , library] = useActiveBlockchain();
    const [balance, setBalance] = useState({dai: "-", eth: "-", gzt: "-"})
    const daiIcon = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
    const gztIcon = "https://raw.githubusercontent.com/gazzeth/docs/master/logos/gzt_balance.png";

    useEffect(() => {
        blockchainService
            .getBlockchainGetBalanceOfUsecase()
            .getBalanceOf(SUPPORTED_CURRENCY.Dai, library)
            .then((b) => {
                setBalance((balance) => {return {...balance, dai: "" + b.toFixed(2) }})
            })
        blockchainService
            .getBlockchainGetBalanceOfUsecase()
            .getBalanceOf(SUPPORTED_CURRENCY.Gazzeth, library)
            .then((b) => {
                setBalance((balance) => {return {...balance, gzt: "" + b.toFixed(2) }})
            })
        blockchainService
            .getBlockchainGetBalanceOfUsecase()
            .getBalanceOf(SUPPORTED_CURRENCY.Eth, library)
            .then((b) => {
                setBalance((balance) => {return {...balance, eth: "" + b.toFixed(2) }})
            })
    }, [library, account])

    return (
        <>
            <Button className={classes.connectButton} disabled>
                <img src={gztIcon} alt={'Icon'} className={classes.image} />
                <Typography variant="h4" className={classes.text}>{`${balance.gzt} GZT`}</Typography>
            </Button>
            <Button className={classes.connectButton} disabled>
                <img src={daiIcon} alt={'Icon'} className={classes.image} />
                <Typography variant="h4" className={classes.text}>{`${balance.dai} DAI`}</Typography>
            </Button>
            <Button className={classes.connectButton} disabled>
                <img src={ethIcon} alt={'Icon'} className={classes.image} />
                <Typography variant="h4" className={classes.text}>{`${balance.eth} ETH`}</Typography>
            </Button>
        </>
    )
}