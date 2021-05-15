import { InjectedConnector } from '@web3-react/injected-connector'
import { AbstractConnector } from '@web3-react/abstract-connector'
import IWalletRepository from './IWalletRepository';

export default class MetaMaskRepository implements IWalletRepository {

    public isInstall(): boolean {
        return !!(window.web3 || window.ethereum);
    }

    public getConnector(): AbstractConnector {
        return new InjectedConnector({
            supportedChainIds: [1, 3, 4, 5, 42],
        });
    }
}
