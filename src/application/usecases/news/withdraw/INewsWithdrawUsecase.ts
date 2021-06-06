import { Web3Provider } from '@ethersproject/providers'

export default interface INewsWithdrawUsecase {
    withdraw(id: number, library: Web3Provider): Promise<void>;
}
