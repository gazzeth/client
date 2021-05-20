import { walletType } from '@constants/supported_wallets';
import { AbstractConnector } from '@web3-react/abstract-connector'

export default interface IWalletRepository {

    isInstall(wallet: walletType): boolean;

    getConnector(wallet: walletType): AbstractConnector;
}
