import { VOTE_VALUE } from "@constants/vote_value";
import Topic from "../Topic/Topic";

export default class NewsPreview {
    id: number;
    verified: VOTE_VALUE;
    title: string;
    lede: string;
    image: string;
    topic: Topic;
    publishDate: number;
    voteCounters: number[];

    constructor(id: number, title: string, lede: string, image: string, verified: VOTE_VALUE,
        topic: Topic, publishDate: number, voteCounters: number[]) {
        this.id = id;
        this.verified = verified;
        this.title = title;
        this.lede = lede;
        this.image = image;
        this.topic = topic;
        this.publishDate = publishDate;
        this.voteCounters = voteCounters;
    }

    setLede(lede: string) {
        return new NewsPreview(this.id, this.title, lede, this.image, this.verified, 
            this.topic, this.publishDate, this.voteCounters);
    }  

    public isCommitOver(): boolean {
        return Date.now() > this.publishDate * 1000 + this.topic.commitPhaseDuration * 1000; 
    }
    
    public isRevealOver(): boolean {
        return Date.now() > this.publishDate * 1000 + this.topic.commitPhaseDuration * 1000 + this.topic.revealPhaseDuration * 1000; 
    }

    public hasEnoughtVotes(): boolean {
        return this.voteCounters[0] / this.voteCounters.reduce((p, c, cI, a) => p + c) > 0.35
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
        console.log(this.voteCounters[state] / this.voteCounters.reduce((p, c, cI, a) => p + c))
        return this.verified === state && this.voteCounters[state] / this.voteCounters.reduce((p, c, cI, a) => p + c) >= 0.60
    }
}
