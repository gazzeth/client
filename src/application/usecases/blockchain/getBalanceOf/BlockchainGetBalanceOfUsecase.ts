import IBlockchainGetBalanceOfUsecase from "./IBlockchainGetBalanceOfUsecase";
import { SUPPORTED_CURRENCY } from '@constants/supported_currency';
import { Web3Provider } from '@ethersproject/providers'
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";

export default class BlockchainGetBalanceOfUsecase implements IBlockchainGetBalanceOfUsecase {

    private currencyRepositories: ICurrencyRepository[];

    constructor(ethRepository: ICurrencyRepository, daiRepository: ICurrencyRepository, gazzethRepository: ICurrencyRepository) {
        this.currencyRepositories = [];
        this.currencyRepositories.push(ethRepository);
        this.currencyRepositories.push(daiRepository)
        this.currencyRepositories.push(gazzethRepository)
    }
    
    public getBalanceOf(currency: SUPPORTED_CURRENCY, library: Web3Provider): Promise<number> {
        return this.currencyRepositories[currency].getBalanceOf(library);
    }
}
