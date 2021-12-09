import ITopicRepository from "@application/repositories/ITopicRepository";
import Topic from "@domain/models/Topic/Topic";
import ITopicSubscribeUsecase from "./ITopicSubscribeUsecase";
import { Web3Provider } from '@ethersproject/providers'
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";
import { BigNumber } from "ethers";

export default class TopicSubscribeUsecase implements ITopicSubscribeUsecase {

    private topicRepository: ITopicRepository;
    private daiRepository: ICurrencyRepository;

    constructor(topicRepository: ITopicRepository, daiRepository: ICurrencyRepository) {
        this.topicRepository = topicRepository;
        this.daiRepository = daiRepository;
    }
    
    public async subscribe(topics: { topic: Topic, quantity: number }[], library: Web3Provider): Promise<void[]> { 
        let total = BigNumber.from(0);
        topics.forEach(topic => {
            total = total.add(topic.topic.costJury.mul(topic.quantity));
        });        
        const balance = await this.daiRepository.getBalanceOf(library)

        if (BigNumber.from(balance * 10^18) < total) {
            throw new Error("insuficient-funds-error")
        }

        let arrayOfPromise: Promise<void>[] = [];
        topics.forEach(topic => {
            arrayOfPromise.push(this.topicRepository.subscribe(topic, library))
        });
        return Promise.all(arrayOfPromise);
    }
}
