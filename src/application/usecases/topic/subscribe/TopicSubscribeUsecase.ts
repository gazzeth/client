import ITopicRepository from "@application/repositories/ITopicRepository";
import Topic from "@domain/models/Topic/Topic";
import ITopicSubscribeUsecase from "./ITopicSubscribeUsecase";
import { Web3Provider } from '@ethersproject/providers'

export default class TopicSubscribeUsecase implements ITopicSubscribeUsecase {

    private topicRepository: ITopicRepository;

    constructor(topicRepository: ITopicRepository) {
        this.topicRepository = topicRepository;
    }
    
    public async subscribe(topics: { topic: Topic, quantity: number }[], library: Web3Provider): Promise<void[]> { 
        let arrayOfPromise: Promise<void>[] = [];
        topics.forEach(topic => {
            arrayOfPromise.push(this.topicRepository.subscribe(topic, library))
        });
        return Promise.all(arrayOfPromise);
    }
}
