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
    private static readonly REVEAL_VOTE_TYPEHASH: string = process.env.REACT_APP_REVEAL_VOTE_TYPEHASH || "";

    public async commit(vote: Vote, library: Web3Provider): Promise<void> {
        const contract = new ethers.Contract(VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
        const sender = (await library.listAccounts())[0]

        const nonce = await contract.getCommitmentNonce(sender, vote.publicationId);
        const result = await signVote(window.ethereum, VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, sender, vote.publicationId, 1, nonce);
        const encode = ethers.utils.defaultAbiCoder.encode(["uint8", "bytes32", "bytes32"], [result.v, result.r, result.s]);
        const hash = ethers.utils.keccak256(encode);
        return contract.commitVote(vote.publicationId, hash, nonce);
    }

    public async reveal(vote: Vote, library: Web3Provider): Promise<void> {
        const contract = new ethers.Contract(VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
        const senders = await library.listAccounts()

        const sender = (await library.listAccounts())[0]
        const nonce = await contract.getCommitmentNonce(sender, vote.publicationId);
        const result = await signVote(window.ethereum, VoteEthereumRepository.PROTOCOL_CONTRACT_ADDRESS, sender, vote.publicationId, 1, nonce - 1);
        return contract.revealVote(vote.publicationId, vote.vote, vote.justification, result.v, result.r, result.s);
    }
}

const getDomain = async (provider: any, tokenAddress: string): Promise<Domain> => {
    const chainId = await getChainId(provider);
    const domain: Domain = { name: 'Protocol', version: '1', chainId, verifyingContract: tokenAddress };
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
    nonce: number;
}

const createTypedVoteData = (message: VoteMessage, domain: Domain) => {
    const typedData = {
        types: {
            EIP712Domain,
            RevealVote: [
                { name: "publicationId", type: "uint256" },
                { name: "vote", type: "int" },
                //   { name: "nonce", type: "uint256" }, TODO: improve in contract
            ],
        },
        primaryType: "RevealVote",
        domain,
        message,
    };

    return typedData;
};

export const signVote = async (
    provider: any,
    tokenAddress: string,
    sender: string,
    publicationId: number,
    vote: number,
    nonce: number
): Promise<VoteMessage & RSV> => {
    const message: VoteMessage = {
        publicationId: publicationId,
        vote: vote,
        nonce: nonce, 
    };

    const domain = await getDomain(provider, tokenAddress);
    const typedData = createTypedVoteData(message, domain);
    const sig = await signData(provider, sender, typedData);

    return { ...sig, ...message };
};
