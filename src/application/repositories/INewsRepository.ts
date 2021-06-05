import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import News from "@domain/models/News/News";
import Pagination from "@domain/models/Pagination/Pagination";
import { Web3Provider } from '@ethersproject/providers'

export default interface INewsRepository {
    list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]>

    listByAddress(pagination: Pagination, address: string): Promise<NewsPreview[]>

    get(id: number): Promise<News>;

    post(news: News, library: Web3Provider): Promise<void>;
}
