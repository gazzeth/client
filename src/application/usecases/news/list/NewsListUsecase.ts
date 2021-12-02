import INewsRepository from "@application/repositories/INewsRepository";
import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import Pagination from "@domain/models/Pagination/Pagination";
import INewsListUsecase from "./INewsListUsecase";

export default class NewsListUsecase implements INewsListUsecase {

    private newsRepository: INewsRepository;
    private news: NewsPreview[];
    private currentPagination: Pagination;
    private currentFilter: Filter;

    constructor(newsRepository: INewsRepository) {
        this.newsRepository = newsRepository;
        this.news = [];
        this.currentFilter = new Filter();
        this.currentPagination = new Pagination(15, 0);
    }

    public async list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]> {
        if (this.currentFilter.topic !== filter.topic || this.currentFilter.verified !== filter.verified) {
            this.currentFilter = new Filter(filter.verified, filter.topic);
            this.news = [];
            this.currentPagination = new Pagination(15, 0);
        }
        if (filter.verified !== undefined && filter.verified >= 4) {
            filter = filter.setVerified(undefined);
        }
        while (this.news.length < pagination.limit + pagination.offset) {
            const newsPage = (await this.newsRepository.list(this.currentPagination, filter))
                .filter((n) => {
                    return this.currentFilter.verified === undefined ||
                        this.currentFilter.verified === n.getState()
                });
            if (newsPage.length === 0) {
                break;
            }
            this.currentPagination = this.currentPagination.advancePage()
            this.news = [...this.news, ...newsPage]
        }
        return this.news.slice(pagination.offset, pagination.limit + pagination.offset);
    }
}
