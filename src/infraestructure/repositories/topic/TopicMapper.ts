import Topic from "@domain/models/Topic/Topic";
import { ethers } from "ethers";

export default class TopicMapper {

    public static toEntity(dto: any): Topic {
        return new Topic(dto.id, parseFloat(ethers.utils.formatUnits(dto.priceToBeJuror, 18)), 
            parseFloat(ethers.utils.formatUnits(dto.priceToPublish, 18)), 
            parseInt(dto.commitPhaseDuration), parseInt(dto.revealPhaseDuration))
    }

}
