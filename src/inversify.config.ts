import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "@constants/types";

import NewsService from "@configuration/usecases/NewsService";
import UserService from "@configuration/usecases/UserService";

import INewsRepository from "@application/repositories/INewsRepository";
import IUserBlockchainRepository from "@application/repositories/IUserBlockchainRepository";

import NewsHardcodeRepository from "@infraestructure/repositories/news/NewsHardcodeRepository";
import UserMetaMaskRepository from "@infraestructure/repositories/user/UserMetaMaskRepository";

const container = new Container();

container.bind<INewsRepository>(TYPES.INewsRepository).to(NewsHardcodeRepository);
container.bind<NewsService>(TYPES.NewsService).to(NewsService);
container.bind<IUserBlockchainRepository>(TYPES.IUserBlockchainRepository).to(UserMetaMaskRepository);
container.bind<UserService>(TYPES.UserService).to(UserService);

export { container }
