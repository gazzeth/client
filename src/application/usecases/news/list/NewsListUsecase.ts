import INewsRepository from "@application/repositories/INewsRepository";
import News from "@domain/News/News";
import INewsListUsecase from "./INewsListUsecase";

export default class NewsListUsecase implements INewsListUsecase{

    private newsRepository: INewsRepository;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public async list(): Promise<News[]> {
        return this.newsRepository.list();
    }
}
