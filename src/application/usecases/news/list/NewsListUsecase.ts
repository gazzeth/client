import INewsRepository from "@application/repositories/INewsRepository";
import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import Pagination from "@domain/models/Pagination/Pagination";
import INewsListUsecase from "./INewsListUsecase";

export default class NewsListUsecase implements INewsListUsecase{

    private newsRepository: INewsRepository;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public async list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]> {
        return this.newsRepository.list(pagination, filter);
    }
}
