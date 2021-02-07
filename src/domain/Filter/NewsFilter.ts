export default class NewsFilter {
    public verified?: "true" | "false" | "pending";

    constructor(verified?: "true" | "false" | "pending") {
        this.verified = verified;
    }

    setVerified(verified?: "true" | "false" | "pending") {
        return new NewsFilter(verified);
    }
}
