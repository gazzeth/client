import { VOTE_VALUE } from "@constants/vote_value";

export default class Vote {
    vote: VOTE_VALUE;
    publicationId: number;
    justification: string;
    penalized: boolean;

    constructor(vote: VOTE_VALUE, publicationId: number, justification?: string, penalized?: boolean) {
        this.vote = vote;
        this.publicationId = publicationId;
        this.justification = justification ? justification : "";
        this.penalized = penalized ? penalized : false;
    }
}
