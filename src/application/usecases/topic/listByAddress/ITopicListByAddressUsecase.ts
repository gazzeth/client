import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";

export default interface ITopicListByAddressUsecase {
    listByAddress(pagination: Pagination, address: string): Promise<{ topic: Topic, quantity: number }[]>
}
