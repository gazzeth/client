import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import Pagination from "@domain/models/Pagination/Pagination";

export default interface INewsListUsecase {
    list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]>
}
