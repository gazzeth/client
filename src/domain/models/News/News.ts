import { VOTE_VALUE } from "@constants/vote_value";
import Topic from "@domain/models/Topic/Topic";
import Vote from "../Vote/Vote";

export default class News {
    id?: number;
    verified: VOTE_VALUE;
    topic: Topic;
    content: string;
    votes: Vote[];

    constructor(id: number, content: string, topic: Topic, verified: VOTE_VALUE, votes?: Vote[]) {
        this.id = id;
        this.verified = verified;
        this.content = content;
        this.topic = topic;
        this.votes = votes ? votes : [];
    }
}
