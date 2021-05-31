import News from "@domain/models/News/News";
import { Web3Provider } from '@ethersproject/providers'

export default interface INewsPostUsecase {
    post(news: News, library: Web3Provider): Promise<void>
}
