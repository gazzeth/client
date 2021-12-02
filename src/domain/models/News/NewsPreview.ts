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

    public getState(): VOTE_VALUE {
        if (!this.isRevealOver()) {
            return VOTE_VALUE.Pending
        }
        else if (!this.hasEnoughtVotes()) {
            return VOTE_VALUE.Insufficient
        }
        else if(this.isTrue()) {
            return VOTE_VALUE.True
        }
        else if(this.isFalse()) {
            return VOTE_VALUE.False
        }
        else if(this.isUnqualified()) {
            return VOTE_VALUE.Unqualified
        }
        else {
            return VOTE_VALUE.NoConsent
        }
    }

    private isStateValid(state: VOTE_VALUE): boolean {
        return this.verified === state && this.voteCounters[state] / this.topic.selectableJurorsQuantity >= 0.60
    }
}
