import Topic from "@domain/models/Topic/Topic";

export default interface ITopicSubscribeUsecase {
    subscribe(topics: { topic: Topic, quantity: number }[]): Promise<void[]>
}
