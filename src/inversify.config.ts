import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "@constants/types";

const container = new Container();

// TODO: remove, this is a example
// container.bind<ICommodityRepository>(TYPES.ICommodityRepository).to(CommodityHarcodeRepository);
// container.bind<IAnalysisRepository>(TYPES.IAnalysisRepository).to(AnalysisHarcodeRepository);
// container.bind<CommodityService>(TYPES.CommodityService).to(CommodityService);
// container.bind<AnalysisService>(TYPES.AnalysisService).to(AnalysisService);

// container.resolve(CommodityService);
// container.resolve(AnalysisService);

export { container }
