import Topic from "@domain/models/Topic/Topic";
import { BigNumber } from "ethers";

export default class TopicMapper {

    public static toEntity(dto: any): Topic {
        return new Topic(dto.id,  BigNumber.from(dto.priceToBeJuror), 
            BigNumber.from(dto.priceToPublish), 
            parseInt(dto.commitPhaseDuration), parseInt(dto.revealPhaseDuration))
    }

}
