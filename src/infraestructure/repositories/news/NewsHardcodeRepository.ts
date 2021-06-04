import { injectable } from 'inversify';
import INewsRepository from "@application/repositories/INewsRepository";
import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import News from "@domain/models/News/News";
import Pagination from "@domain/models/Pagination/Pagination";
import { VERIFIED_STATUS } from '@constants/verifiedStatus';
import { ethers } from "ethers";
import Protocol from '@assets/abis/Protocol.json';
import { Web3Provider } from '@ethersproject/providers'
import { signDaiPermit } from 'eth-permit';
import IpfsHttpClient from "ipfs-http-client"
import ErrorMapper from '../ErrorMapper';
import IpfsMapper from './IpfsMapper';
import NewsMapper from './NewsMapper';

@injectable()
export default class NewsHardcodeRepository implements INewsRepository {

    private static readonly PROTOCOL_CONTRACT_ADDRESS: string = process.env.REACT_APP_PROTOCOL_CONTRACT_ADDRESS || "";
    private static readonly DAI_CONTRACT_ADDRESS: string = process.env.REACT_APP_DAI_CONTRACT_ADDRESS || "";

    private ipfsClient = IpfsHttpClient.create({ host: "ipfs.infura.io", port: 5001, protocol: "https" })

    public async list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]> {
        const url = "https://api.thegraph.com/subgraphs/name/gazzeth/protocol-ropsten-v0"

        const options: RequestInit = {
            method: "POST",
            body: JSON.stringify({
                query: `{ publications(skip: ${pagination.offset}, first: ${pagination.limit}) { id hash author topic { id } publishDate voting { withdrawn winningVote } } }`,
                variables: null
            }),
            headers: { "Content-Type": "application/json" }
        }

        const result: any[] = (await (await fetch(url, options)).json()).data.publications

        const resultWithFile: NewsPreview[] = []
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            element.file = await IpfsMapper.toEntity(this.ipfsClient.cat(element.hash))
            resultWithFile.push(NewsMapper.toEntity(element))
        }

        return resultWithFile;
    }

    public async get(id: number): Promise<News> {
        // const responce = this.newsList.filter(n => n.id === id).pop();
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1 * 1000)
        });
    }

    public async post(news: News, library: Web3Provider): Promise<void> {
        try {
            const { path } = await this.ipfsClient.add(news.content, { pin: true })

            const contract = new ethers.Contract(NewsHardcodeRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
            const senders = await library.listAccounts()
            const result = await signDaiPermit(window.ethereum, NewsHardcodeRepository.DAI_CONTRACT_ADDRESS, senders[0],
                NewsHardcodeRepository.PROTOCOL_CONTRACT_ADDRESS);
            const tx = await contract.publish(path, "Worldwide/Ethereum/Airdrops", result.nonce, result.expiry, result.v, result.r, result.s)
            return await tx.wait();
        } catch (e) {
            throw ErrorMapper.toEntity(e)
        }
    }
}
