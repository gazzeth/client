import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import Modal from "../Modal/Modal";
import AccountDetail from "../AccountDetail/AccountDetail";
import { SUPPORTED_WALLETS, walletInfo } from "@constants/supported_wallets";
import Options from "../Option/Options";
import WalletService from "@configuration/usecases/WalletService";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { Button, CircularProgress, Typography, Box } from "@material-ui/core";
import classnames from "classnames";
import { UnsupportedChainIdError } from "@web3-react/core";
import usePrevious from "../../hooks/usePrevious";
import { RootState } from "@entrypoint/presenters/web/reducers/allReducers";
import allActions from "@entrypoint/presenters/web/actions/allActions";

type Props = {
    isOpen: boolean,
    onClose: () => void,
    onOpen: () => void
}

const walletService = container.get<WalletService>(TYPES.WalletService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function WalletModal({ isOpen, onClose, onOpen }: Props) {
    const { t } = useTranslation();

    const classes = useStyles();
    const useBlockchain = blockchainService.getBlockchainGetUseUseCase().getUse()
    const [active, account, , activate, error] = useBlockchain();


    const wallet = useSelector((state: RootState) => state.wallet.wallet);
    const dispatch = useDispatch();
    const [state, setState] = useState<"account" | "options" | "pending">("options")

    const previousAccount = usePrevious(account)
    const previousIsOpen = usePrevious(isOpen)
    const previousError = usePrevious(error)

    const onCloseWrapper = () => {
        if (active) {
            setState("account")
        }
        else {
            setState("options")
        }
        onClose()
    }

    useEffect(() => {
        if (account && !previousAccount) {
            setState("account")
            if (isOpen) {
                onClose()
            }
        }
    }, [account, previousAccount, isOpen, onClose])

    useEffect(() => {
        if (!account && isOpen && !previousIsOpen && error === previousError) {
            setState("options")
        }
    }, [account, previousIsOpen, isOpen, error, previousError])

    useEffect(() => {
        if (!!error && error !== previousError) {
            onOpen()
            setState("pending")
        }
    }, [error, previousError, onOpen])

    const tryActivate = (option: walletInfo) => {
        dispatch(allActions.walletActions.setWallet(option))
        setState("pending")
        const connector = walletService.getWalletGetConnectorUseCase().getConnector(option.type)
        activate(connector)
    }

    const getOptions = () => {
        return Object.keys(SUPPORTED_WALLETS).map((key) => {
            const option = SUPPORTED_WALLETS[key];

            if (walletService.getWalletIsInstallUseCase().isInstall(option.type)) {
                return <Options
                    icon={option.icon}
                    header={t(`${option.type}-header`)}
                    onClick={() => tryActivate(option)} 
                    active={(wallet) ? wallet.type === option.type : false} />
            }
            else {
                return <Options
                    icon={option.icon}
                    header={t("install", { wallet: t(`${option.type}-header`) })}
                    link={option.installLink} />
            }
        })
    };

    const getLoading = () => {
        return (
            <div className={classnames(classes.rowContainer, classes.borderContainer)}>
                <div className={classes.leftContainer}>
                    <CircularProgress size={24} />
                </div>
                <div className={classes.rightContainer}>
                    <Typography>{t("loading-wallet")}</Typography>
                </div>
            </div>
        )
    }

    const getPendingView = () => {
        return (
            <>
                {!!error ? ((error instanceof UnsupportedChainIdError) ? getError() : getErrorTryAgain()) : getLoading()}
                <Options
                    icon={wallet.icon}
                    header={t(`${wallet.type}-header`)}
                    subHeader={t(`${wallet.type}-subheader`)} />
            </>
        )
    }

    const getError = () => {
        return (
            <div className={classnames(classes.rowContainer, classes.errorContainer, classes.borderContainer)}>
                <div className={classnames(classes.leftContainer, classes.errorText)}>
                    <Typography>{t("error-chain")}</Typography>
                </div>
            </div>
        )
    }

    const getErrorTryAgain = () => {
        return (
            <div className={classnames(classes.rowContainer, classes.errorContainer, classes.borderContainer)}>
                <div className={classnames(classes.leftContainer, classes.errorText)}>
                    <Typography>{t("error-wallet")}</Typography>
                </div>
                <div className={classes.rightContainer}>
                    <Button className={classes.button} onClick={() => { tryActivate(wallet); }}>
                        <Typography><Box fontWeight={500}>{t("try-again")}</Box></Typography>
                    </Button>
                </div>
            </div>
        )
    }

    if (state === "account") {
        return (
            <Modal isOpen={isOpen} onClose={onCloseWrapper} title={t("account")}>
                <AccountDetail onChange={() => setState("options")} wallet={wallet} />
            </Modal>
        )
    }
    else {
        const title = active || state === "pending" ? "back" : "wallet"
        const onClickTitle = () => {
            if (active) {
                setState("account")
            }
            else {
                dispatch(allActions.walletActions.setWallet(undefined))
                setState("options")
            }
        }
        return (
            <Modal isOpen={isOpen} onClose={onCloseWrapper} title={t(title)}
                onClickTitle={onClickTitle}>
                {state === "options" ? getOptions() : getPendingView()}
            </Modal>
        )
    }
}
