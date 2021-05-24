import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import ITopicRepository from "@application/repositories/ITopicRepository";
import TopicListUsecase from "@application/usecases/topic/list/TopicListUsecase";

@injectable()
export default class TopicService {
    @inject(TYPES.ITopicRepository) private topicRepository: ITopicRepository;

    public getTopicListUseCase() {
        return new TopicListUsecase(this.topicRepository);
    }
}
