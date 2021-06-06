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

    constructor(id: number, title: string, lede: string, image: string, verified: VOTE_VALUE,
        topic: Topic, publishDate: number) {
        this.id = id;
        this.verified = verified;
        this.title = title;
        this.lede = lede;
        this.image = image;
        this.topic = topic;
        this.publishDate = publishDate;
    }

    setLede(lede: string) {
        return new NewsPreview(this.id, this.title, lede, this.image, this.verified, 
            this.topic, this.publishDate);
    }  

    public isCommitOver(): boolean {
        return Date.now() > this.publishDate * 1000 + this.topic.commitPhaseDuration * 1000; 
    }

    public isRevealOver(): boolean {
        return Date.now() > this.publishDate * 1000 + this.topic.revealPhaseDuration * 1000; 
    }
}
