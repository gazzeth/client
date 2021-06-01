import { injectable } from 'inversify';
import { ethers } from "ethers";
import Protocol from '@assets/abis/Protocol.json';
import { Web3Provider } from '@ethersproject/providers'
import { getChainId, RSV, signData } from 'eth-permit/dist/rpc';
import IVoteRepository from '@application/repositories/IVoteRepository';
import Vote from '@domain/models/Vote/Vote';

@injectable()
export default class VoteEthereumRepository implements IVoteRepository {

    private static readonly PROTOCOL_CONTRACT_ADDRESS: string = process.env.REACT_APP_PROTOCOL_CONTRACT_ADDRESS || "";

    public async commit(vote: Vote, library: Web3Provider): Promise<void> {
        const contract = new ethers.Contract(VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
        const sender = (await library.listAccounts())[0]

        const nonce = (await contract.getCommitmentNonce(sender, vote.publicationId))._hex;
        const result = await signVote(library, VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, sender, vote.publicationId, vote.value, nonce);
        const encode = ethers.utils.defaultAbiCoder.encode(["uint8", "bytes32", "bytes32"], [result.v, result.r, result.s]);
        const commitment = ethers.utils.keccak256(encode);
        return contract.commitVote(vote.publicationId, commitment, nonce);
    }

    public async reveal(vote: Vote, library: Web3Provider): Promise<void> {
        const contract = new ethers.Contract(VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
        const sender = (await library.listAccounts())[0]
        const commitmentNonce = (parseInt((await contract.getCommitmentNonce(sender, vote.publicationId))._hex, 16) -1).toString(16);
        const result = await signVote(library, VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, sender, vote.publicationId, vote.value, commitmentNonce);
        return contract.revealVote(vote.publicationId, vote.value, vote.justification, result.v, result.r, result.s);
    }
}

const getDomain = async (provider: any, contractAddress: string): Promise<Domain> => {
    const chainId = await getChainId(provider);
    console.log(typeof chainId)
    const domain: Domain = { name: 'Gazzeth Protocol', version: '1', chainId: 3, verifyingContract: contractAddress };
    return domain;
};

interface Domain {
    name: string;
    version: string;
    chainId: number;
    verifyingContract: string;
}

const EIP712Domain = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
];

interface VoteMessage {
    publicationId: number;
    vote: number;
    nonce: string;
}

const createTypedVoteData = (message: VoteMessage, domain: Domain) => {
    const typedData = {
        types: {
            EIP712Domain,
            Vote: [
                { name: "publicationId", type: "uint256" },
                { name: "vote", type: "uint8" },
                { name: "nonce", type: "uint256" },
            ],
        },
        primaryType: "Vote",
        domain,
        message,
    };

    return typedData;
};

export const signVote = async (
    provider: any,
    contractAddress: string,
    sender: string,
    publicationId: number,
    vote: number,
    nonce: string
): Promise<VoteMessage & RSV> => {
    const message: VoteMessage = {
        publicationId: publicationId,
        vote: vote,
        nonce: nonce,
    };

    const domain = await getDomain(provider, contractAddress);
    const typedData = createTypedVoteData(message, domain);
    const sig = await signData(provider, sender, typedData);

    return { ...sig, ...message };
};
