import ITopicRepository from "@application/repositories/ITopicRepository";
import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";
import ITopicListUsecase from "./ITopicListUsecase";

export default class TopicListUsecase implements ITopicListUsecase {

    private topicRepository: ITopicRepository;

    constructor(topicRepository: ITopicRepository) {
        this.topicRepository = topicRepository;
    }
    
    public async list(pagination: Pagination): Promise<Topic[]> {
        return this.topicRepository.list(pagination);
    }
}
