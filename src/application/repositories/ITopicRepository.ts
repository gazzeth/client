import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";
import { Web3Provider } from '@ethersproject/providers'

export default interface ITopicRepository {
    list(pagination: Pagination): Promise<Topic[]>

    subscribe(topic: { topic: Topic, quantity: number }, library: Web3Provider): Promise<void>
}
