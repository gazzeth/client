import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import ITopicRepository from "@application/repositories/ITopicRepository";
import TopicListUsecase from "@application/usecases/topic/list/TopicListUsecase";
import TopicSubscribeUsecase from "@application/usecases/topic/subscribe/TopicSubscribeUsecase";
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";
import TopicListByAddressUsecase from "@application/usecases/topic/listByAddress/TopicListByAddressUsecase";

@injectable()
export default class TopicService {
    @inject(TYPES.ITopicRepository) private topicRepository: ITopicRepository;
    @inject(TYPES.IDaiRepository) private daiRepository: ICurrencyRepository;

    public getTopicListUseCase() {
        return new TopicListUsecase(this.topicRepository);
    }

    public getTopicListByAddressUseCase() {
        return new TopicListByAddressUsecase(this.topicRepository);
    }

    public getTopicSubscribeUsecase() {
        return new TopicSubscribeUsecase(this.topicRepository, this.daiRepository);
    }
}
