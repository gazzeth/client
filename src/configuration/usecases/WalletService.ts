import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import IWalletRepository from "@application/repositories/IWalletRepository";
import WalletGetConnectorUsecase from "@application/usecases/wallet/getConnector/WalletGetConnectorUsecase";
import WalletIsInstallUsecase from "@application/usecases/wallet/isInstall/WalletIsInstallUsecase";

@injectable()
export default class WalletService {
    @inject(TYPES.IWalletRepository) private walletRepository: IWalletRepository;

    public getWalletGetConnectorUseCase() {
        return new WalletGetConnectorUsecase(this.walletRepository);
    }

    public getWalletIsInstallUseCase() {
        return new WalletIsInstallUsecase(this.walletRepository);
    }
}
