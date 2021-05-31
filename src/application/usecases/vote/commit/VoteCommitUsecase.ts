import IVoteRepository from "@application/repositories/IVoteRepository";
import Vote from "@domain/models/Vote/Vote";
import { Web3Provider } from '@ethersproject/providers'
import IVoteCommitUsecase from "./IVoteCommitUsecase";

export default class VoteCommitUsecase implements IVoteCommitUsecase {

    private voteRepository: IVoteRepository;

    constructor(voteRepository: IVoteRepository) {
        this.voteRepository = voteRepository;
    }
    
    public async commit(vote: Vote, library: Web3Provider): Promise<void> {
        return this.voteRepository.commit(vote, library);
    }
}
