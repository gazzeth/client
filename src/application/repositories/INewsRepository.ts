import Filter from "@domain/Filter/NewsFilter";
import News from "@domain/News/News";
import Pagination from "@domain/Pagination/Pagination";

export default interface INewsRepository {
    list(pagination: Pagination, filter: Filter): Promise<News[]>

    get(id: number): Promise<News>;
}
