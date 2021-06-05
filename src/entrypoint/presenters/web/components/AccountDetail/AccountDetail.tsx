import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import { Button, Typography } from "@material-ui/core";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import { walletInfo } from "@constants/supported_wallets";
import Icon from "../Icon/Icon";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import NewsService from "@configuration/usecases/NewsService";
import Pagination from "@domain/models/Pagination/Pagination";
import NewsPreview from "@domain/models/News/NewsPreview";

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);
const newsService = container.get<NewsService>(TYPES.NewsService);

type Props = {
    onChange: () => void,
    wallet: walletInfo
}

export default function AccountDetail({ onChange, wallet }: Props) {
    const { t } = useTranslation();

    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [chain, account,] = useActiveBlockchain();
    const [news, setNews] = useState<NewsPreview[]>([]);

    const classes = useStyles();

    const goToLink = () => {
        const link = blockchainService.getBlockchainGetLinkUsecase().getLink(chain.id, account, "address")
        window.open(link, '_blank');
    }

    const copyAddress = () => {
        navigator.clipboard.writeText(account)
    }

    useEffect(() => {
        newsService.getNewsListByAddressUsecase().listByAddress(new Pagination(0, 5), account)
        .then((newsListResponce) => {
            setNews(newsListResponce);
            console.log(newsListResponce)
        })
        .catch((error) => console.log(error)) //TODO
    }, [account])

    return (
        <div className={classnames(classes.columnContainer, classes.borderContainer)}>
            <div className={classnames(classes.rowContainer, classes.spaceBetween)}>
                <div className={classnames(classes.leftContainer, classes.text)}>
                    <Typography variant="body2">{t("connected-with", { wallet: wallet.type })}</Typography>
                </div>
                <div className={classes.rightContainer}>
                    <Button className={classes.buttonChange} onClick={onChange}>
                        <Typography variant="body2">{t("change")}</Typography>
                    </Button>
                </div>
            </div>
            <div className={classnames(classes.rowContainer, classes.start)}>
                <div className={classes.leftContainer}>
                    <Icon account={account} />
                </div>
                <div className={classes.rightContainer}>
                    <Typography className={classes.textAccount} variant="h4">{blockchainService.getBlockchainGetAddressUsecase().shortenAddress(account)}</Typography>
                </div>
            </div>
            <div className={classnames(classes.rowContainer, classes.spaceBetween)}>
                <div className={classnames(classes.leftContainer, classes.text)}>
                    <Button className={classes.button} onClick={copyAddress}>
                        <FileCopyOutlinedIcon className={classes.text} />
                        <Typography className={classes.text} variant="body2">{t("copy-address")}</Typography>
                    </Button>
                </div>
                <div className={classes.rightContainer}>
                    <Button className={classes.button} onClick={goToLink}>
                        <ExitToAppOutlinedIcon className={classes.text} />
                        <Typography className={classes.text} variant="body2">{t("view-etherscan")}</Typography>
                    </Button>
                </div>
            </div>
        </div>
    )
}
