import INewsRepository from "@application/repositories/INewsRepository";
import News from "@domain/models/News/News";
import INewsPostUsecase from "./INewsPostUsecase";
import { Web3Provider } from '@ethersproject/providers'
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";
import { ethers } from "ethers";

export default class NewsPostUsecase implements INewsPostUsecase {

    private newsRepository: INewsRepository;
    private daiRepository: ICurrencyRepository;

    constructor(newsRepository: INewsRepository, daiRepository: ICurrencyRepository) {
        this.newsRepository = newsRepository;
        this.daiRepository = daiRepository;
    }
    
    public async post(news: News, library: Web3Provider): Promise<void> {    
        const balance = await this.daiRepository.getBalanceOf(library)

        let balanceBig = ethers.utils.parseUnits(balance.toString(), 18)
        if (balanceBig.lt(news.topic.costPublish)) {
            throw new Error("insuficient-funds-error")
        }

        return this.newsRepository.post(news, library);
    }
}
