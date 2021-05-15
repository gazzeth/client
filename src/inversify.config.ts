import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "@constants/types";

import NewsService from "@configuration/usecases/NewsService";
import WalletService from "@configuration/usecases/WalletService";
import BlockchainService from "@configuration/usecases/BlockchainService";

import INewsRepository from "@application/repositories/INewsRepository";
import IWalletRepository from "@application/repositories/IWalletRepository";
import IBlockchainRepository from "@application/repositories/IBlockchainRepository";

import NewsHardcodeRepository from "@infraestructure/repositories/news/NewsHardcodeRepository";
import WalletRepository from "@infraestructure/repositories/wallet/WalletRepository";
import EthereumRepository from "@infraestructure/repositories/blockchain/EthereumRepository";


const container = new Container();

container.bind<INewsRepository>(TYPES.INewsRepository).to(NewsHardcodeRepository);
container.bind<IWalletRepository>(TYPES.IWalletRepository).to(WalletRepository);
container.bind<IBlockchainRepository>(TYPES.IBlockchainRepository).to(EthereumRepository);

container.bind<NewsService>(TYPES.NewsService).to(NewsService);
container.bind<WalletService>(TYPES.WalletService).to(WalletService);
container.bind<BlockchainService>(TYPES.BlockchainService).to(BlockchainService);

export { container }
