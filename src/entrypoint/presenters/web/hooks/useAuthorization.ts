import { useEffect, useState } from 'react'
import WalletService from "@configuration/usecases/WalletService";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { useDispatch } from "react-redux";
import { SUPPORTED_WALLETS } from "@constants/supported_wallets";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import allActions from '../actions/allActions';

const walletService = container.get<WalletService>(TYPES.WalletService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function useAuthorization() {
  const useBlockchain = blockchainService.getBlockchainGetUseUseCase().getUse()
  const [isAuthorized, , , activate,] = useBlockchain();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const connector: any = walletService.getWalletGetConnectorUseCase().getConnector("metamask")
    connector.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        setLoading(true)
        dispatch(allActions.walletActions.setWallet(SUPPORTED_WALLETS["METAMASK"]))
        activate(connector, undefined, true)
          .then(() => {
          })
          .catch(() => {
            dispatch(allActions.walletActions.setWallet(undefined))
          })
          .finally(() => {
            setLoading(false)
          })
      }
    })
  }, [activate, dispatch])

  return [isAuthorized, loading]
}
