import Vote from "@domain/models/Vote/Vote";
import { Web3Provider } from '@ethersproject/providers'

export default interface IVoteRepository {
    commit(vote: Vote, library: Web3Provider): Promise<void>

    reveal(vote: Vote, library: Web3Provider): Promise<void>
}
