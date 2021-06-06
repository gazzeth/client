import { VOTE_VALUE } from "@constants/vote_value";

export default class NewsFilter {
    public verified?: VOTE_VALUE;
    public topic?: string;

    constructor(verified?: VOTE_VALUE, topic?: string) {
        this.verified = verified;
        this.topic = topic;
    }

    setVerified(verified?: VOTE_VALUE) {
        return new NewsFilter(verified, this.topic);
    }

    setTopic(topic: string) {
        return new NewsFilter(this.verified, topic);
    }
}
