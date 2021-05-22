import Filter from "@domain/Filter/NewsFilter";
import NewsPreview from "@domain/News/NewsPreview";
import Pagination from "@domain/Pagination/Pagination";

export default interface INewsListUsecase {
    list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]>
}
