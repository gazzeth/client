import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { Typography } from "@material-ui/core";

type Props = {
    lockCost: number,
}

export default function LockInfo({ lockCost }: Props) {
    const classes = useStyles();
    const { t } = useTranslation();

    const balance = "2 DAI"
    const daiIcon = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"

    return (
        <div className={classes.container}>
            <div className={classes.columnStart}>
                <div className={classes.containerBorder}>
                    <img src={daiIcon} alt={'Icon'} className={classes.image} />
                    <Typography variant="h6">DAI</Typography>
                </div>
                <Typography variant="body2">{t("balance", { value: balance })}</Typography>
            </div>
            <div className={classes.columnEnd}>
                <Typography variant="h4">{lockCost}</Typography>
            </div>
        </div>
    )
}
