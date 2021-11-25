import INewsRepository from "@application/repositories/INewsRepository";
import News from "@domain/models/News/News";
import INewsPostUsecase from "./INewsPostUsecase";
import { Web3Provider } from '@ethersproject/providers'
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";
import { BigNumber } from "ethers";

export default class NewsPostUsecase implements INewsPostUsecase {

    private newsRepository: INewsRepository;
    private daiRepository: ICurrencyRepository;

    constructor(newsRepository: INewsRepository, daiRepository: ICurrencyRepository) {
        this.newsRepository = newsRepository;
        this.daiRepository = daiRepository;
    }
    
    public async post(news: News, library: Web3Provider): Promise<void> {    
        const balance = await this.daiRepository.getBalanceOf(library)

        if (BigNumber.from(balance) <news.topic.costPublish) {
            throw new Error("insuficient-funds-error")
        }

        return this.newsRepository.post(news, library);
    }
}
