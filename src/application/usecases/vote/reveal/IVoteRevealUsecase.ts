import Vote from "@domain/models/Vote/Vote";
import { Web3Provider } from '@ethersproject/providers'

export default interface IVoteCommitUsecase {
    reveal(vote: Vote, library: Web3Provider): Promise<void>
}
