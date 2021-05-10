import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "@constants/types";

import NewsService from "@configuration/usecases/NewsService";

import INewsRepository from "@application/repositories/INewsRepository";
import IUseEtherium from "@application/repositories/IEtheriumRepository";

import NewsHardcodeRepository from "@infraestructure/repositories/news/NewsHardcodeRepository";
import MetaMaskRepository from "@infraestructure/repositories/wallet/MetaMaskRepository";
import useEtherium from "@infraestructure/repositories/etherium/EtheriumRepository";

const container = new Container();

container.bind<INewsRepository>(TYPES.INewsRepository).to(NewsHardcodeRepository);
container.bind<IUseEtherium>(TYPES.IUseEtherium).toConstantValue(useEtherium);
container.bind<MetaMaskRepository>(TYPES.MetaMaskRepository).to(MetaMaskRepository);

container.bind<NewsService>(TYPES.NewsService).to(NewsService);

export { container }
