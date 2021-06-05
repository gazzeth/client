import { VOTE_VALUE } from "@constants/vote_value";
import News from "@domain/models/News/News";
import NewsPreview from "@domain/models/News/NewsPreview";
import Topic from "@domain/models/Topic/Topic";
import Vote from "@domain/models/Vote/Vote";
import { ethers } from "ethers";

export default class NewsMapper {
    public static toEntityPreview(dto: any): NewsPreview {
        const parts = dto.file.match(/[^\n]+/g);
        const title = parts[0].substring(2, parts[0].length);
        const image = parts[1].substring(4, parts[1].length - 1);
        const lede = parts[2];
        const winningVote: number = dto.voting.winningVote;
        const topic: any = dto.topic
        return new NewsPreview(parseInt(dto.id), title, lede, image, 
            NewsMapper.toEntityVoteValue(winningVote), NewsMapper.toEntityTopic(topic),
            parseInt(dto.publishDate))
    }

    public static toEntity(dto: any): News {
        const topic: any = dto.topic
        const winningVote: number = dto.voting.winningVote;
        const votes: any[] = dto.voting.votes;
        const voteCounters: string[] = dto.voting.voteCounters;
        return new News(parseInt(dto.id), dto.file, NewsMapper.toEntityTopic(topic), 
            NewsMapper.toEntityVoteValue(winningVote), votes.map((v) => NewsMapper.toEntityVote(v, parseInt(dto.id))),
            parseInt(dto.publishDate), dto.voting.withdrawn, voteCounters.map(vc => parseInt(vc)))
    }

    public static toEntityVote(dto: any, publicationId: number): Vote {
        return new Vote(NewsMapper.toEntityVoteValue(dto.value), publicationId, dto.justification, dto.penalized, dto.juror.id)
    }
    
    public static toEntityTopic(dto: any): Topic {
        return new Topic(dto.id, parseFloat(ethers.utils.formatUnits(dto.priceToBeJuror, 18)), 
            parseFloat(ethers.utils.formatUnits(dto.priceToPublish, 18)), 
            parseInt(dto.commitPhaseDuration), parseInt(dto.revealPhaseDuration))
    }

    public static toEntityVoteValue(vote: number): VOTE_VALUE {
        switch(vote) {
            case 0:
                return VOTE_VALUE.None
            case 1:
                return VOTE_VALUE.True
            case 2:
                return VOTE_VALUE.False
            case 3:
                return VOTE_VALUE.Unqualified
        }
    }
}
