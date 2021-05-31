import Topic from "@domain/models/Topic/Topic";
import { Web3Provider } from '@ethersproject/providers'

export default interface ITopicSubscribeUsecase {
    subscribe(topics: { topic: Topic, quantity: number }[], library: Web3Provider): Promise<void[]>
}
