export default class Topic {
    name: string;
    costJury: number;
    costPublish: number;
    commitPhaseDuration: number;
    revealPhaseDuration: number;

    constructor(name: string, costJury: number, costPublish: number, 
        commitPhaseDuration?: number, revealPhaseDuration?: number) {//TODO remove ?
        this.name = name;
        this.costJury = costJury;
        this.costPublish = costPublish;
        this.commitPhaseDuration = commitPhaseDuration;
        this.revealPhaseDuration = revealPhaseDuration;
    }
}
