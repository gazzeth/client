import INewsRepository from "@application/repositories/INewsRepository";
import NewsPreview from "@domain/models/News/NewsPreview";
import Pagination from "@domain/models/Pagination/Pagination";
import INewsListByAddressUsecase from "./INewsListByAddressUsecase";

export default class NewsListByAddressUsecase implements INewsListByAddressUsecase {

    private newsRepository: INewsRepository;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public async listByAddress(pagination: Pagination, address: string): Promise<NewsPreview[]> {
        return this.newsRepository.listByAddress(pagination, address);
    }
}
