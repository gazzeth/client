import Topic from "@domain/models/Topic/Topic";

export default class News {
    id?: number;
    verified?: boolean;
    topic: Topic;
    content: string;

    constructor(id: number, content: string, topic: Topic, verified?: boolean) {
        this.id = id;
        this.verified = verified;
        this.content = content;
        this.topic = topic;
    }
}
