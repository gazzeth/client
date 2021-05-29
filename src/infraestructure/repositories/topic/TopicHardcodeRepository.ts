import ITopicRepository from "@application/repositories/ITopicRepository";
import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";
import { injectable } from 'inversify';

@injectable()
export default class TopicHardcodeRepository implements ITopicRepository {

    private topicList = [
        new Topic("Quimica", 10, 11), new Topic("Politica", 14, 15), new Topic("Espectaculo", 11, 12),
        new Topic("Geografia", 20, 21), new Topic("Biologia", 50, 51), new Topic("Fisica", 10, 11),
        new Topic("Economia", 20, 21), new Topic("Argentina", 24, 25), new Topic("Uruguay", 16, 17),
    ]

    list(pagination: Pagination): Promise<Topic[]> {
        const responce = this.topicList
            // .slice(pagination.getCurrentPage() * pagination.limit, (pagination.getCurrentPage() + 1) * pagination.limit);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(responce);
            }, 1 * 1000)
        });
    }

    subscribe(topic: { topic: Topic, quantity: number }): Promise<void> {
        return;
    }
}
