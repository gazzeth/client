import { SUPPORTED_CURRENCY } from '@constants/supported_currency';
import { Web3Provider } from '@ethersproject/providers'

export default interface IBlockchainGetBalanceOfUsecase {
    getBalanceOf(currency: SUPPORTED_CURRENCY, library: Web3Provider): Promise<number>;
}
