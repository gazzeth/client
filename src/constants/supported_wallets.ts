import metamaskIcon from "@assets/images/metamask.png";

export type walletType = ("metamask")

export type walletInfo = {
    type: walletType,
    installLink: string,
    icon: string
}

export const SUPPORTED_WALLETS: { [key: string]: walletInfo } = {
    METAMASK: { type: "metamask", installLink: "https://metamask.io/", icon: metamaskIcon },
}
