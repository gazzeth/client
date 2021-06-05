import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import INewsRepository from "@application/repositories/INewsRepository";
import NewsListUsecase from "@application/usecases/news/list/NewsListUsecase";
import NewsGetUsecase from "@application/usecases/news/get/NewsGetUsecase";
import NewsPostUsecase from "@application/usecases/news/post/NewsPostUsecase";
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";
import NewsListByAddressUsecase from "@application/usecases/news/listByAddress/NewsListByAddressUsecase";

@injectable()
export default class NewsService {
    @inject(TYPES.INewsRepository) private newsRepository: INewsRepository;
    @inject(TYPES.IDaiRepository) private daiRepository: ICurrencyRepository;

    public getNewsListUseCase() {
        return new NewsListUsecase(this.newsRepository);
    }

    public getNewsGetUseCase() {
        return new NewsGetUsecase(this.newsRepository);
    }

    public getNewsPostUseCase() {
        return new NewsPostUsecase(this.newsRepository, this.daiRepository);
    }

    public getNewsListByAddressUsecase() {
        return new NewsListByAddressUsecase(this.newsRepository);
    }
}
