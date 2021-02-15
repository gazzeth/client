import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import INewsRepository from "@application/repositories/INewsRepository";
import NewsListUsecase from "@application/usecases/news/list/NewsListUsecase";
import NewsGetUsecase from "@application/usecases/news/get/NewsGetUsecase";

@injectable()
export default class NewsService {
    @inject(TYPES.INewsRepository) private newsRepository: INewsRepository;

    public getNewsListUseCase() {
        return new NewsListUsecase(this.newsRepository);
    }

    public getNewsGetListUseCase() {
        return new NewsGetUsecase(this.newsRepository);
    }
}
