import { VERIFIED_STATUS } from "@constants/verifiedStatus";

export default class NewsFilter {
    public verified?: VERIFIED_STATUS;

    constructor(verified?: VERIFIED_STATUS) {
        this.verified = verified;
    }

    setVerified(verified?: VERIFIED_STATUS) {
        return new NewsFilter(verified);
    }
}
