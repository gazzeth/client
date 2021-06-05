import ITopicRepository from "@application/repositories/ITopicRepository";
import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";
import { injectable } from 'inversify';
import { ethers } from "ethers";
import Protocol from '@assets/abis/Protocol.json';
import { Web3Provider } from '@ethersproject/providers'
import { signDaiPermit } from 'eth-permit';
import ErrorMapper from "../ErrorMapper";
import TopicMapper from './TopicMapper';

@injectable()
export default class TopicGraphRepository implements ITopicRepository {

    private static readonly PROTOCOL_CONTRACT_ADDRESS: string = process.env.REACT_APP_PROTOCOL_CONTRACT_ADDRESS || "";
    private static readonly DAI_CONTRACT_ADDRESS: string = process.env.REACT_APP_DAI_CONTRACT_ADDRESS || "";
    private static readonly API_URL: string = process.env.REACT_APP_API_URL || "";

    public async list(pagination: Pagination): Promise<Topic[]> { //TODO pagination
        const options: RequestInit = {
            method: "POST",
            body: JSON.stringify({
                query: 
                `{ 
                    topics(skip: ${0}, first: ${100}) 
                    { 
                        id
                        priceToPublish
                        priceToBeJuror
                        authorReward
                        jurorReward
                        commitPhaseDuration
                        revealPhaseDuration
                        selectableJurorsQuantity 
                    }
                }`,
                variables: null
            }),
            headers: { "Content-Type": "application/json" }
        }

        const result: any[] = (await (await fetch(TopicGraphRepository.API_URL, options)).json()).data.topics

        return result.map((r) => TopicMapper.toEntity(r));
    }

    public async subscribe(topic: { topic: Topic, quantity: number }, library: Web3Provider): Promise<void> {
        try {
            const contract = new ethers.Contract(TopicGraphRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
            const senders = await library.listAccounts()
            const result = await signDaiPermit(library, TopicGraphRepository.DAI_CONTRACT_ADDRESS, senders[0],
                TopicGraphRepository.PROTOCOL_CONTRACT_ADDRESS);
            const tx = await contract.subscribeAsJuror(topic.topic.name, topic.quantity, result.nonce, result.expiry, result.v, result.r, result.s)
            return await tx.wait();
        } catch (e) {
            throw ErrorMapper.toEntity(e)
        }
    }
}
