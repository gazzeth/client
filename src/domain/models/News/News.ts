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
    voteCounters: number[];

    constructor(id: number, content: string, topic: Topic, verified: VOTE_VALUE,
                votes?: Vote[], publishDate?: number, withdraw?: boolean, 
                voteCounters?: number[]) {
        this.id = id;
        this.verified = verified;
        this.content = content;
        this.topic = topic;
        this.votes = votes ? votes : [];
        this.publishDate = publishDate;
        this.withdraw = withdraw;
        this.voteCounters = voteCounters;
    }

    public isCommitOver(): boolean {
        return Date.now() > this.publishDate * 1000 + this.topic.commitPhaseDuration * 1000; 
    }

    public isRevealOver(): boolean {
        return Date.now() > this.publishDate * 1000 + this.topic.commitPhaseDuration * 1000 + this.topic.revealPhaseDuration * 1000; 
    }

    public isWithdrawOver(): boolean {
        return this.withdraw; 
    }

    public hasEnoughtVotes(): boolean {
        return (this.topic.selectableJurorsQuantity - this.voteCounters[1] 
            - this.voteCounters[2] - this.voteCounters[3])  
            / this.topic.selectableJurorsQuantity < 0.35
    }

    public isTrue(): boolean {
        return this.isStateValid(VOTE_VALUE.True)
    }

    public isFalse(): boolean {
        return this.isStateValid(VOTE_VALUE.False)
    }

    public isUnqualified(): boolean {
        return this.isStateValid(VOTE_VALUE.Unqualified)
    }

    private isStateValid(state: VOTE_VALUE): boolean {
        return this.verified === state && this.voteCounters[state] / this.topic.selectableJurorsQuantity >= 0.60
    }
}
