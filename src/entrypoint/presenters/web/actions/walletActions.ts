import { walletInfo } from "@constants/supported_wallets"

export const TYPES = {
    SET_WALLET: "SET_WALLET"
}

const setWallet = (wallet: walletInfo) => {
    return {
        type: TYPES.SET_WALLET,
        wallet: wallet
    }
}

const walletActions = { setWallet }

export default walletActions
