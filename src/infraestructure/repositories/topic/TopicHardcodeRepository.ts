import ITopicRepository from "@application/repositories/ITopicRepository";
import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";
import { injectable } from 'inversify';
import { ethers } from "ethers";
import Protocol from '@assets/abis/Protocol.json';
import { Web3Provider } from '@ethersproject/providers'
import { signDaiPermit } from 'eth-permit';

@injectable()
export default class TopicHardcodeRepository implements ITopicRepository {

    private static readonly PROTOCOL_CONTRACT_ADDRESS: string = process.env.REACT_APP_PROTOCOL_CONTRACT_ADDRESS || "";
    private static readonly DAI_CONTRACT_ADDRESS: string = process.env.REACT_APP_DAI_CONTRACT_ADDRESS || "";

    private topicList = [
        new Topic("Worldwide/Ethereum/Airdrops", 0.1, 0.1), new Topic("Politica", 14, 15), new Topic("Espectaculo", 11, 12),
        new Topic("Geografia", 20, 21), new Topic("Biologia", 50, 51), new Topic("Fisica", 10, 11),
        new Topic("Economia", 20, 21), new Topic("Argentina", 24, 25), new Topic("Uruguay", 16, 17),
    ]

    public async list(pagination: Pagination): Promise<Topic[]> {
        const responce = this.topicList
        // .slice(pagination.getCurrentPage() * pagination.limit, (pagination.getCurrentPage() + 1) * pagination.limit);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(responce);
            }, 1 * 1000)
        });
    }

    public async subscribe(topic: { topic: Topic, quantity: number }, library: Web3Provider): Promise<void> {
        const contract = new ethers.Contract(TopicHardcodeRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
        const senders = await library.listAccounts()
        const result = await signDaiPermit(library, TopicHardcodeRepository.DAI_CONTRACT_ADDRESS, senders[0], 
            TopicHardcodeRepository.PROTOCOL_CONTRACT_ADDRESS);
        return contract.subscribeAsJuror(topic.topic.name, topic.quantity, result.nonce, result.expiry, result.v, result.r, result.s);
    }
}
