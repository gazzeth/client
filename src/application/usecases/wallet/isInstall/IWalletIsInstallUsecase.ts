import { walletType } from "@constants/supported_wallets";

export default interface IWalletIsInstallUsecase {
    isInstall(wallet: walletType): boolean
}
