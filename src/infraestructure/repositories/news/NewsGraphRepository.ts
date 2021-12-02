import { injectable } from 'inversify';
import INewsRepository from "@application/repositories/INewsRepository";
import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import News from "@domain/models/News/News";
import Pagination from "@domain/models/Pagination/Pagination";
import { ethers } from "ethers";
import Protocol from '@assets/abis/Protocol.json';
import { Web3Provider } from '@ethersproject/providers'
import { signDaiPermit } from 'eth-permit';
import IpfsHttpClient from "ipfs-http-client"
import ErrorMapper from '../ErrorMapper';
import IpfsMapper from './IpfsMapper';
import NewsMapper from './NewsMapper';

@injectable()
export default class NewsGraphRepository implements INewsRepository {

    private static readonly PROTOCOL_CONTRACT_ADDRESS: string = process.env.REACT_APP_PROTOCOL_CONTRACT_ADDRESS || "";
    private static readonly DAI_CONTRACT_ADDRESS: string = process.env.REACT_APP_DAI_CONTRACT_ADDRESS || "";
    private static readonly API_URL: string = process.env.REACT_APP_API_URL || "";

    private static readonly IPFS_URL: string = process.env.REACT_APP_IPFS_URL || "";
    private static readonly IPFS_PORT: string = process.env.REACT_APP_IPFS_PORT || "";
    private static readonly IPFS_PROTOCOL: string = process.env.REACT_APP_IPFS_PROTOCOL || "";

    private ipfsClient = IpfsHttpClient.create({
        host: NewsGraphRepository.IPFS_URL,
        port: parseInt(NewsGraphRepository.IPFS_PORT),
        protocol: NewsGraphRepository.IPFS_PROTOCOL
    })

    public async list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]> {
        const queries = NewsMapper.toQuery(filter)
        const options: RequestInit = {
            method: "POST",
            body: JSON.stringify({
                query: `
                { 
                    topics${queries[1]} {
                        votings(skip: ${pagination.offset}, first: ${pagination.limit}${queries[0]}, orderBy: id, orderDirection: desc) { 
                            publication { 
                                id 
                                hash 
                                author 
                                topic { 
                                    id
                                    priceToPublish
                                    priceToBeJuror
                                    authorReward
                                    jurorReward
                                    commitPhaseDuration
                                    revealPhaseDuration
                                    selectableJurorsQuantity  
                                } 
                                publishDate 
                                voting { 
                                    voteCounters
                                    withdrawn 
                                    winningVote 
                                } 
                            }
                        } 
                    } 
                }`,
                variables: null
            }),
            headers: { "Content-Type": "application/json" }
        }

        let quantity = await this.getTotalJuries();
        const result: any[] = (await (await fetch(NewsGraphRepository.API_URL, options)).json())
            .data.topics.flatMap((t: any) => t.votings.map((v: any) => v.publication))
        const resultWithFile: NewsPreview[] = []
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            element.topic.selectableJurorsQuantity = quantity
            element.file = await IpfsMapper.toEntity(this.ipfsClient.cat(element.hash))
            resultWithFile.push(NewsMapper.toEntityPreview(element))
        }

        return resultWithFile;
    }

    public async listByAddress(pagination: Pagination, address: string): Promise<NewsPreview[]> {
        const options: RequestInit = {
            method: "POST",
            body: JSON.stringify({
                query: `
                { 
                    jurors(where: {id: "${address.toLocaleLowerCase()}"}, orderBy: id, orderDirection: desc) { 
                        id
                        votes(skip: ${0}, first: ${100}, where: {withdrawn: false}) {
                            voting {
                                publication {
                                    id 
                                    hash 
                                    author 
                                    topic { 
                                        id
                                        priceToPublish
                                        priceToBeJuror
                                        authorReward
                                        jurorReward
                                        commitPhaseDuration
                                        revealPhaseDuration
                                        selectableJurorsQuantity  
                                    } 
                                    publishDate 
                                    voting { 
                                        voteCounters
                                        withdrawn 
                                        winningVote 
                                    } 
                                }
                            }
                        }
                    } 
                }`,
                variables: null
            }),
            headers: { "Content-Type": "application/json" }
        }

        let quantity = await this.getTotalJuries();

        const data: any[] = (await (await fetch(NewsGraphRepository.API_URL, options)).json()).data.jurors
        const result: any[] = (data.length === 0) ? [] : data[0].votes.map((m: any) => m.voting.publication)
        const resultWithFile: NewsPreview[] = []
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            element.file = await IpfsMapper.toEntity(this.ipfsClient.cat(element.hash))
            element.topic.selectableJurorsQuantity = quantity
            resultWithFile.push(NewsMapper.toEntityPreview(element))
        }

        return resultWithFile;
    }

    public async get(id: number): Promise<News> {
        const options: RequestInit = {
            method: "POST",
            body: JSON.stringify({
                query:
                    `{ 
                    publications(where: {id: "0x${id.toString(16)}"}) { 
                        id 
                        hash 
                        author
                        publishDate 
                        topic { 
                            id
                            priceToPublish
                            priceToBeJuror
                            authorReward
                            jurorReward
                            commitPhaseDuration
                            revealPhaseDuration
                            selectableJurorsQuantity 
                        }  
                        voting { 
                            withdrawn 
                            winningVote
                            voteCounters
                            votes {
                                id
                                juror {
                                    id
                                }
                                commitment
                                value
                                justification
                                penalized 
                            }
                        } 
                    } 
                }`,
                variables: null
            }),
            headers: { "Content-Type": "application/json" }
        }

        const result: any = (await (await fetch(NewsGraphRepository.API_URL, options)).json()).data.publications[0]

        result.file = await IpfsMapper.toEntity(this.ipfsClient.cat(result.hash))
        result.topic.selectableJurorsQuantity = await this.getTotalJuries()

        return NewsMapper.toEntity(result)
    }

    public async post(news: News, library: Web3Provider): Promise<void> {
        try {
            const { path } = await this.ipfsClient.add(news.content, { pin: true })

            const contract = new ethers.Contract(NewsGraphRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
            const senders = await library.listAccounts()
            const result = await signDaiPermit(window.ethereum, NewsGraphRepository.DAI_CONTRACT_ADDRESS, senders[0],
                NewsGraphRepository.PROTOCOL_CONTRACT_ADDRESS);
            const tx = await contract.publish(path, news.topic.name, result.nonce, result.expiry, result.v, result.r, result.s)
            return await tx.wait();
        } catch (e) {
            throw ErrorMapper.toEntity(e)
        }
    }

    public async withdraw(id: number, library: Web3Provider): Promise<void> {
        try {
            const contract = new ethers.Contract(NewsGraphRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
            const tx = await contract.withdrawRewards(id)
            return await tx.wait();
        } catch (e) {
            throw ErrorMapper.toEntity(e)
        }
    }

    private async getTotalJuries(): Promise<string> {
        let provider = new ethers.providers.EtherscanProvider("ropsten"); //TODO
        const contract = new ethers.Contract(NewsGraphRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, provider);
        return await contract.VOTING_JURORS_QTY().then((result: any) => result._hex);
    }
}
