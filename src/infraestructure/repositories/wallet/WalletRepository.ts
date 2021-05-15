import IWalletRepository from "@application/repositories/IWalletRepository";
import { walletType } from "@constants/supported_wallets";
import MetaMaskRepository from "./MetaMaskRepository";
import IWalletRepository2 from "./IWalletRepository"
import { AbstractConnector } from '@web3-react/abstract-connector'
import { injectable } from 'inversify';

@injectable()
export default class WalletRepository implements IWalletRepository {

    private walletsRepository: Map<walletType, IWalletRepository2>

    constructor() {
        this.walletsRepository = new Map([
            ["metamask", new MetaMaskRepository()]
        ])
    }

    public getConnector(wallet: walletType): AbstractConnector {
        return this.walletsRepository.get(wallet).getConnector()
    }

    public isInstall(wallet: walletType): boolean {
        return this.walletsRepository.get(wallet).isInstall()
    }
}