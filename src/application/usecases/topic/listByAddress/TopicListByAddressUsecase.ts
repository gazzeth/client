import ITopicRepository from "@application/repositories/ITopicRepository";
import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";
import ITopicListByAddressUsecase from "./ITopicListByAddressUsecase";

export default class TopicListByAddressUsecase implements ITopicListByAddressUsecase {

    private topicRepository: ITopicRepository;

    constructor(topicRepository: ITopicRepository) {
        this.topicRepository = topicRepository;
    }
    
    public async listByAddress(pagination: Pagination, address: string): Promise<{ topic: Topic, quantity: number }[]> {
        return this.topicRepository.listByAddress(pagination, address);
    }
}
