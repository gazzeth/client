import { combineReducers } from 'redux';
import walletReducer, { WalletState } from "@entrypoint/presenters/web/reducers/walletReducer";

export type RootState = {
    wallet: WalletState
}

const rootReducers = combineReducers({
    wallet: walletReducer
});

export default rootReducers;
