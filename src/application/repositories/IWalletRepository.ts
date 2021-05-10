import { AbstractConnector } from '@web3-react/abstract-connector'

export default interface IWalletRepository {

    isInstall(): boolean;

    getConnector(): AbstractConnector;
}