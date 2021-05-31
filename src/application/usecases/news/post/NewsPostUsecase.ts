import INewsRepository from "@application/repositories/INewsRepository";
import News from "@domain/models/News/News";
import INewsPostUsecase from "./INewsPostUsecase";
import { Web3Provider } from '@ethersproject/providers'

export default class NewsPostUsecase implements INewsPostUsecase {

    private newsRepository: INewsRepository;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public async post(news: News, library: Web3Provider): Promise<void> {
        return this.newsRepository.post(news, library);
    }
}
