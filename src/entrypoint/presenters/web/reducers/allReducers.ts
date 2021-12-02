import { combineReducers } from 'redux';
import walletReducer, { WalletState } from "@entrypoint/presenters/web/reducers/walletReducer";
import ErrorReducer, { ErrorState } from "@entrypoint/presenters/web/reducers/errorReducer";

export type RootState = {
    wallet: WalletState
    error: ErrorState
}

const rootReducers = combineReducers({
    wallet: walletReducer,
    error: ErrorReducer
});

export default rootReducers;
