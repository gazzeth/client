import { VOTE_VALUE } from "@constants/vote_value";
import Topic from "@domain/models/Topic/Topic";
import Vote from "../Vote/Vote";

export default class News {
    id?: number;
    verified: VOTE_VALUE;
    topic: Topic;
    content: string;
    votes: Vote[];
    publishDate: number;
    withdraw: boolean;

    constructor(id: number, content: string, topic: Topic, verified: VOTE_VALUE,
                votes?: Vote[], publishDate?: number, withdraw?: boolean) {
        this.id = id;
        this.verified = verified;
        this.content = content;
        this.topic = topic;
        this.votes = votes ? votes : [];
        this.publishDate = publishDate;
        this.withdraw = withdraw;
    }

    public isCommitOver(): boolean {
        return Date.now() > this.publishDate + this.topic.commitPhaseDuration; 
    }

    public isRevealOver(): boolean {
        return Date.now() > this.publishDate + this.topic.revealPhaseDuration; 
    }

    public isWithdrawOver(): boolean {
        return this.withdraw; //TODO
    }
}
