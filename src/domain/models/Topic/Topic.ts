export default class Topic {
    name: string;
    costJury: number;
    costPublish: number;

    constructor(name: string, costJury: number, costPublish: number) {
        this.name = name;
        this.costJury = costJury;
        this.costPublish = costPublish;
    }
}
