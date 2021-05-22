import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import News from "@domain/models/News/News";
import Pagination from "@domain/models/Pagination/Pagination";

export default interface INewsRepository {
    list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]>

    get(id: number): Promise<News>;
}
