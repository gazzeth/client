import IVoteRepository from "@application/repositories/IVoteRepository";
import Vote from "@domain/models/Vote/Vote";
import { Web3Provider } from '@ethersproject/providers'
import IVoteRevealUsecase from "./IVoteRevealUsecase";

export default class VoteRevealUsecase implements IVoteRevealUsecase {

    private voteRepository: IVoteRepository;

    constructor(voteRepository: IVoteRepository) {
        this.voteRepository = voteRepository;
    }
    
    public async reveal(vote: Vote, library: Web3Provider): Promise<void> {
        return this.voteRepository.reveal(vote, library);
    }
}
