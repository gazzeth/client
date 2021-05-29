import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";

export default interface ITopicRepository {
    list(pagination: Pagination): Promise<Topic[]>

    subscribe(topic: { topic: Topic, quantity: number }): Promise<void>
}
