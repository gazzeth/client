import NewsPreview from "@domain/models/News/NewsPreview";
import Pagination from "@domain/models/Pagination/Pagination";

export default interface INewsListByAddressUsecase {
    listByAddress(pagination: Pagination, address: string): Promise<NewsPreview[]>
}
