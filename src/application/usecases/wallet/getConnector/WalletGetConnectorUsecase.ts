import IWalletGetConnectorUsecase from "./IWalletGetConnectorUsecase";
import { AbstractConnector } from '@web3-react/abstract-connector'
import { walletType } from "@constants/supported_wallets";
import IWalletRepository from "@application/repositories/IWalletRepository";

export default class WalletGetConnectorUsecase implements IWalletGetConnectorUsecase{

    private walletRepository: IWalletRepository;

    constructor(walletRepository: IWalletRepository) {
        this.walletRepository = walletRepository;
    }
    
    public getConnector(wallet: walletType): AbstractConnector {
        return this.walletRepository.getConnector(wallet);
    }
}
