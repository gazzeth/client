import INewsRepository from "@application/repositories/INewsRepository";
import INewsWithdrawUsecase from "./INewsWithdrawUsecase";
import { Web3Provider } from '@ethersproject/providers'

export default class NewsWithdrawUsecase implements INewsWithdrawUsecase {

    private newsRepository: INewsRepository;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public async withdraw(id: number, library: Web3Provider): Promise<void> {
        return this.newsRepository.withdraw(id, library);
    }
}
