import INewsRepository from "@application/repositories/INewsRepository";
import News from "@domain/models/News/News";
import INewsPostUsecase from "./INewsPostUsecase";

export default class NewsPostUsecase implements INewsPostUsecase {

    private newsRepository: INewsRepository;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public async post(news: News): Promise<void> {
        return this.newsRepository.post(news);
    }
}
