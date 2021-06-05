import { VOTE_VALUE } from "@constants/vote_value";

export default class Vote {
    value: VOTE_VALUE;
    publicationId: number;
    justification: string;
    penalized: boolean;
    address: string;

    constructor(value: VOTE_VALUE, publicationId: number, justification?: string, penalized?: boolean, address?: string) {
        this.value = value;
        this.publicationId = publicationId;
        this.justification = justification ? justification : "";
        this.penalized = penalized ? penalized : false;
        this.address = address ? address : "";
    }
}
