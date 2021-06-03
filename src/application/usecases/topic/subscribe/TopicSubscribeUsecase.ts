import ITopicRepository from "@application/repositories/ITopicRepository";
import Topic from "@domain/models/Topic/Topic";
import ITopicSubscribeUsecase from "./ITopicSubscribeUsecase";
import { Web3Provider } from '@ethersproject/providers'
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";

export default class TopicSubscribeUsecase implements ITopicSubscribeUsecase {

    private topicRepository: ITopicRepository;
    private daiRepository: ICurrencyRepository;

    constructor(topicRepository: ITopicRepository, daiRepository: ICurrencyRepository) {
        this.topicRepository = topicRepository;
        this.daiRepository = daiRepository;
    }
    
    public async subscribe(topics: { topic: Topic, quantity: number }[], library: Web3Provider): Promise<void[]> { 
        let total = 0;
        topics.forEach(topic => {
            total = total + topic.quantity * topic.topic.costJury;
        });        
        const balance = await this.daiRepository.getBalanceOf(library)

        if (balance < total) {
            throw new Error("insuficient-funds-error")
        }

        let arrayOfPromise: Promise<void>[] = [];
        topics.forEach(topic => {
            arrayOfPromise.push(this.topicRepository.subscribe(topic, library))
        });
        return Promise.all(arrayOfPromise);
    }
}
