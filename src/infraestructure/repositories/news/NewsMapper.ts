import { VOTE_VALUE } from "@constants/vote_value";
import NewsPreview from "@domain/models/News/NewsPreview";

export default class NewsMapper {
    public static toEntity(dto: any): NewsPreview {
        const parts = dto.file.match(/[^\n]+/g);
        const title = parts[0].substring(2, parts[0].length);
        const image = parts[1].substring(4, parts[1].length - 1);
        const lede = parts[2];
        const winningVote: number = dto.voting.winningVote;
        return new NewsPreview(parseInt(dto.id), title, lede, image, NewsMapper.toEntityVote(winningVote))
    }

    public static toEntityVote(vote: number): VOTE_VALUE {
        switch(vote) {
            case 0:
                return VOTE_VALUE.None
            case 1:
                return VOTE_VALUE.True
            case 2:
                return VOTE_VALUE.False
            case 4:
                return VOTE_VALUE.Unqualified
        }
    }
}