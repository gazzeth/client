import React, { useEffect, useState } from "react";
import WalletModal from "../WalletModal/WalletModal";
import AccountStatus from "../AccountStatus/AccountStatus";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import BlockchainService from "@configuration/usecases/BlockchainService";
import WalletService from "@configuration/usecases/WalletService";
import { useDispatch } from "react-redux";
import { SUPPORTED_WALLETS } from "@constants/supported_wallets";
import allActions from "../../actions/allActions";

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);
const walletService = container.get<WalletService>(TYPES.WalletService);

export default function Wallet() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const changeIsModalOpen = () => setIsModalOpen((isModalOpen: boolean) => !isModalOpen);
    const onOpen = () => setIsModalOpen(true);
    const OnClose = () => setIsModalOpen(false);

    const useBlockchain = blockchainService.getBlockchainGetUseUseCase().getUse()
    const [, , , activate,] = useBlockchain();
    const dispatch = useDispatch();
  
    useEffect(() => {
      const connector: any = walletService.getWalletGetConnectorUseCase().getConnector("metamask")
      connector.isAuthorized().then((isAuthorized: boolean) => {
        if (isAuthorized) {
          dispatch(allActions.walletActions.setWallet(SUPPORTED_WALLETS["METAMASK"]))
          activate(connector, undefined, true)
            .then(() => {
            }).catch(() => {
              dispatch(allActions.walletActions.setWallet(undefined))
            })
        }
      })
    }, [activate, dispatch])

    return (
        <div>
            <AccountStatus onClick={changeIsModalOpen} />
            <WalletModal isOpen={isModalOpen} onOpen={onOpen} onClose={OnClose} />
        </div>
    )
}
