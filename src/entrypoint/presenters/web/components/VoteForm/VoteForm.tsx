import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import Container from "../Container/Container";
import { Button, FormControl, InputLabel, Select, TextField, Typography } from "@material-ui/core";
import { VOTE_VALUE, VOTE_VALUES } from "@constants/vote_value";
import { useParams } from "react-router";
import Vote from "@domain/models/Vote/Vote";
import VoteService from "@configuration/usecases/VoteService";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { toast } from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';
import { URLS } from "@constants/urls";
import { Link } from "react-router-dom";
import NewsService from "@configuration/usecases/NewsService";
import News from "@domain/models/News/News";

const voteService = container.get<VoteService>(TYPES.VoteService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);
const newsService = container.get<NewsService>(TYPES.NewsService);

type Props = {
    isReveal: boolean
}

export default function VoteForm({ isReveal }: Props) {
    const { t } = useTranslation();
    const classes = useStyles();

    const id = Number.parseFloat(useParams<{ id: string }>().id);

    const [voteValue, setVoteValue] = useState<VOTE_VALUE>(undefined);
    const [justification, setJustification] = useState<string>(undefined);
    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [, , , library] = useActiveBlockchain();
    const [loading, setLoading] = React.useState(false);
    const [news, setNews] = React.useState<News>(undefined);

    useEffect(() => {
        if (!isNaN(id)) {
            newsService.getNewsGetUseCase().get(id)
                .then((newsResponce) => setNews(newsResponce))
                .catch((error) => console.log(error))//TODO maybe do somethin else
                .finally(() => setLoading(false))
        }
    }, [id])

    const onSummit = () => {
        setLoading(true)
        if (isReveal) {
            voteService.getVoteRevealUsecase()
                .reveal(new Vote(voteValue, id, justification), library)
                .then(() => toast.success(t("succesful-vote-reveal")))
                .catch((error: Error) => toast.error(t(error.message)))
                .finally(() => setLoading(false))
        }
        else {
            voteService.getVoteCommitUseCase()
                .commit(new Vote(voteValue, id), library)
                    .then(() => toast.success(t("succesful-vote-commit")))
                    .catch((error: Error) => toast.error(t(error.message)))
                    .finally(() => setLoading(false))
        }
    }

    return (
        <div className={classes.rowContainer}>
            <Container title={t(`${isReveal ? "reveal" : "vote"}-news`)} explanation={t(`${isReveal ? "reveal" : "vote"}-explanation`)} icon={(
                <Button className={classes.buttonPublication} component={Link} to={URLS.news.replace(":id", ""+id)}>
                    <Typography variant="body2">{t("go-to-publication")}</Typography>
                </Button>
            )}>
                {
                    !isReveal && (
                    <div>
                        {
                            VOTE_VALUES.filter((v, i) => i < 4).map((voteValue) => {
                                if (voteValue !== VOTE_VALUE.None) {
                                    return (
                                        <div className={classes.rowRuleContainer}>
                                            <Typography>
                                                <span className={classes.ruleLabel}>{t("vote-rule-label-" + voteValue)}: </span>
                                                {t("vote-rule-description-" + voteValue)}
                                            </Typography>
                                        </div>
                                    )
                                }
                                return null
                            })
                        }
                    </div>
                )
                }
                <div className={classes.rowContainer}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>{t("select-vote-value")}</InputLabel>
                <Select native value={voteValue} label={t("select-vote-value")}
                    onChange={(e) => setVoteValue(e.target.value as VOTE_VALUE)} >
                    {
                        VOTE_VALUES.filter((v, i) => i < 4).map((voteValue) => {
                            if (voteValue === VOTE_VALUE.None) {
                                return <option aria-label="None" value={undefined} />
                            }
                            return <option value={voteValue}>{t("vote-value-" + voteValue)}</option>
                        })
                    }
                </Select>
            </FormControl>
        </div>
                {
        isReveal && (
            <div className={classes.rowContainer}>
                <TextField className={classes.formControl} label={t("justification")}
                    multiline rows={4} variant="outlined" onChange={(e) => setJustification(e.target.value as string)} />
            </div>
        )
    }
    <div className={classes.rowContainer} style={{ position: 'relative', }}>
        <Button className={classes.button} onClick={onSummit}
            disabled={loading || voteValue === undefined || news === undefined || 
            (isReveal && (justification === undefined || !news.isCommitOver() || news.isRevealOver())) ||
            (!isReveal && news.isCommitOver())}>
            <Typography variant="h6">{t(isReveal ? "reveal" : "vote")}</Typography>
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
            </Container >
        </div >
    )
}
