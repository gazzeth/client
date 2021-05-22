import Filter from "@domain/Filter/NewsFilter";
import NewsPreview from "@domain/News/NewsPreview";
import News from "@domain/News/News";
import Pagination from "@domain/Pagination/Pagination";

export default interface INewsRepository {
    list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]>

    get(id: number): Promise<News>;
}
