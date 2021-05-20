import IWalletRepository from "@application/repositories/IWalletRepository";
import IWalletIsInstallUsecase from "./IWalletIsInstallUsecase";
import { walletType } from "@constants/supported_wallets";

export default class WalletIsInstallUsecase implements IWalletIsInstallUsecase {

    private walletRepository: IWalletRepository;

    constructor(walletRepository: IWalletRepository) {
        this.walletRepository = walletRepository;
    }
    
    public isInstall(wallet: walletType): boolean {
        return this.walletRepository.isInstall(wallet);
    }
}
