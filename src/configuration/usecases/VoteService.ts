import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import IVoteRepository from "@application/repositories/IVoteRepository";
import VoteCommitUsecase from "@application/usecases/vote/commit/VoteCommitUsecase";
import VoteRevealUsecase from "@application/usecases/vote/reveal/VoteRevealUsecase";

@injectable()
export default class VoteService {
    @inject(TYPES.IVoteRepository) private voteRepository: IVoteRepository;

    public getVoteCommitUseCase() {
        return new VoteCommitUsecase(this.voteRepository);
    }

    public getVoteRevealUsecase() {
        return new VoteRevealUsecase(this.voteRepository);
    }
}
