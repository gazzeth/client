import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";

export default interface ITopicListUsecase {
    list(pagination: Pagination): Promise<Topic[]>
}
