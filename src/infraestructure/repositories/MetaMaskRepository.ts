import Web3 from "web3";

declare global {
    interface Window { ethereum: any; }
}

export default class MetaMaskRepository {

    public static web3: Web3 = undefined;

    public static async validateMetaMask(): Promise<void> {
        console.log(window.ethereum)
        if (window.ethereum) {
            this.web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                return ;
            } catch (e) {
                throw Error("No auth");
            }
        }
        else {
            throw Error("No metamask");
        }
    }
}
