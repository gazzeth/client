import { BigNumber } from "ethers";

export default class Topic {
    name: string;
    costJury: BigNumber;
    costPublish: BigNumber;
    commitPhaseDuration: number;
    revealPhaseDuration: number;
    selectableJurorsQuantity: number;

    constructor(name: string, costJury: BigNumber, costPublish: BigNumber, 
        commitPhaseDuration?: number, revealPhaseDuration?: number, 
        selectableJurorsQuantity?: number) {
        this.name = name;
        this.costJury = costJury;
        this.costPublish = costPublish;
        this.commitPhaseDuration = commitPhaseDuration;
        this.revealPhaseDuration = revealPhaseDuration;
        this.selectableJurorsQuantity = selectableJurorsQuantity;
    }
}
