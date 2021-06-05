import { VOTE_VALUE } from "@constants/vote_value";
import Topic from "@domain/models/Topic/Topic";

export default class News {
    id?: number;
    verified: VOTE_VALUE;
    topic: Topic;
    content: string;

    constructor(id: number, content: string, topic: Topic, verified: VOTE_VALUE) {
        this.id = id;
        this.verified = verified;
        this.content = content;
        this.topic = topic;
    }
}
