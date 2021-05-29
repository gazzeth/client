import ITopicRepository from "@application/repositories/ITopicRepository";
import Pagination from "@domain/models/Pagination/Pagination";
import Topic from "@domain/models/Topic/Topic";
import { injectable } from 'inversify';

@injectable()
export default class TopicHardcodeRepository implements ITopicRepository {

    private topicList = [
        new Topic("Quimica", 10), new Topic("Politica", 14), new Topic("Espectaculo", 11),
        new Topic("Geografia", 20), new Topic("Biologia", 50), new Topic("Fisica", 10),
        new Topic("Economia", 20), new Topic("Argentina", 24), new Topic("Uruguay", 16),
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
