import Vote from "@domain/models/Vote/Vote";
import { Web3Provider } from '@ethersproject/providers'

export default interface IVoteRevealUsecase {
    commit(vote: Vote, library: Web3Provider): Promise<void>
}
