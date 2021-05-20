import { walletInfo } from '@constants/supported_wallets';
import { TYPES } from '@entrypoint/presenters/web/actions/walletActions';

export type WalletState = {
    wallet?: walletInfo
}

type Action = {
    type: string,
    wallet: walletInfo
}

const notificationReducer = (state: WalletState  = { wallet: undefined }, action: Action) => {
    switch (action.type) {
        case TYPES.SET_WALLET:
            return { ...state, wallet: action.wallet }
        default:
            return state
    }
}

export default notificationReducer
