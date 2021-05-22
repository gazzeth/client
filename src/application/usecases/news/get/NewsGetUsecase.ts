import INewsRepository from "@application/repositories/INewsRepository";
import News from "@domain/models/News/News";
import INewsGetUsecase from "./INewsGetUsecase";

export default class NewsGetUsecase implements INewsGetUsecase{

    private newsRepository: INewsRepository;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public async get(id: number): Promise<News> {
        return this.newsRepository.get(id);
    }
}
