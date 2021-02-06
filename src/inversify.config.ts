import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";
import INewsRepository from "@application/repositories/INewsRepository";
import NewsHardcodeRepository from "@infraestructure/repositories/news/NewsHardcodeRepository";

const container = new Container();

container.bind<INewsRepository>(TYPES.INewsRepository).to(NewsHardcodeRepository);
container.bind<NewsService>(TYPES.NewsService).to(NewsService);

container.resolve(NewsService);

export { container }
