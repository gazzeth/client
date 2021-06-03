import { Web3Provider } from '@ethersproject/providers'

export default interface ICurrencyRepository {
    getBalanceOf(library: Web3Provider): Promise<number>
}
