import Filter from "@domain/Filter/NewsFilter";
import News from "@domain/News/News";
import Pagination from "@domain/Pagination/Pagination";

export default interface INewsListUsecase {
    list(pagination: Pagination, filter: Filter): Promise<News[]>
}
