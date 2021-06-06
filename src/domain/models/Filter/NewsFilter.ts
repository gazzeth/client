import { VOTE_VALUE } from "@constants/vote_value";

export default class NewsFilter {
    public verified?: VOTE_VALUE;

    constructor(verified?: VOTE_VALUE) {
        this.verified = verified;
    }

    setVerified(verified?: VOTE_VALUE) {
        return new NewsFilter(verified);
    }
}
