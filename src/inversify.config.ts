import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "@constants/types";

import NewsService from "@configuration/usecases/NewsService";
import WalletService from "@configuration/usecases/WalletService";
import BlockchainService from "@configuration/usecases/BlockchainService";
import TopicService from "@configuration/usecases/TopicService";
import VoteService from "@configuration/usecases/VoteService";

import INewsRepository from "@application/repositories/INewsRepository";
import IWalletRepository from "@application/repositories/IWalletRepository";
import IBlockchainRepository from "@application/repositories/IBlockchainRepository";
import ITopicRepository from "@application/repositories/ITopicRepository";
import IVoteRepository from "@application/repositories/IVoteRepository";
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";

import NewsGraphRepository from "@infraestructure/repositories/news/NewsGraphRepository";
import WalletRepository from "@infraestructure/repositories/wallet/WalletRepository";
import EthereumRepository from "@infraestructure/repositories/blockchain/EthereumRepository";
import TopicGraphRepository from "@infraestructure/repositories/topic/TopicGraphRepository";
import VoteGraphRepository from "@infraestructure/repositories/vote/VoteGraphRepository";
import DaiEthereumRepository from "@infraestructure/repositories/currency/DaiEthereumRepository";


const container = new Container();

container.bind<INewsRepository>(TYPES.INewsRepository).to(NewsGraphRepository);
container.bind<IWalletRepository>(TYPES.IWalletRepository).to(WalletRepository);
container.bind<IBlockchainRepository>(TYPES.IBlockchainRepository).to(EthereumRepository);
container.bind<ITopicRepository>(TYPES.ITopicRepository).to(TopicGraphRepository);
container.bind<IVoteRepository>(TYPES.IVoteRepository).to(VoteGraphRepository);
container.bind<ICurrencyRepository>(TYPES.IEthRepository).to(DaiEthereumRepository);
container.bind<ICurrencyRepository>(TYPES.IDaiRepository).to(DaiEthereumRepository);
container.bind<ICurrencyRepository>(TYPES.IGazzethRepository).to(DaiEthereumRepository);

container.bind<NewsService>(TYPES.NewsService).to(NewsService);
container.bind<WalletService>(TYPES.WalletService).to(WalletService);
container.bind<BlockchainService>(TYPES.BlockchainService).to(BlockchainService);
container.bind<TopicService>(TYPES.TopicService).to(TopicService);
container.bind<VoteService>(TYPES.VoteService).to(VoteService);

export { container }
