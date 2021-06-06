import React, { useState } from "react";
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

const voteService = container.get<VoteService>(TYPES.VoteService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

type Props = {
    isReveal: boolean
}

export default function VoteForm({ isReveal }: Props) {
    const { t } = useTranslation();
    const classes = useStyles();

    const { id } = useParams<{ id: string }>();

    const [voteValue, setVoteValue] = useState<VOTE_VALUE>(undefined);
    const [justification, setJustification] = useState<string>(undefined);
    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [, , , library] = useActiveBlockchain();
    const [loading, setLoading] = React.useState(false);

    const onSummit = () => {
        setLoading(true)
        if (isReveal) {
            voteService.getVoteRevealUsecase()
                .reveal(new Vote(voteValue, Number.parseFloat(id), justification), library)
                .then(() => toast.success(t("succesful-vote-reveal")))
                .catch((error: Error) => toast.error(t(error.message)))
                .finally(() => setLoading(false))
        }
        else {
            voteService.getVoteCommitUseCase()
                .commit(new Vote(voteValue, Number.parseFloat(id)), library)
                .then(() => toast.success(t("succesful-vote-commit")))
                .catch((error: Error) => toast.error(t(error.message)))
                .finally(() => setLoading(false))
        }
    }

    return (
        <div className={classes.rowContainer}>
            <Container title={t(`${isReveal ? "reveal" : "vote"}-news`)}>
                {
                    !isReveal && (
                        <div>
                        {
                            VOTE_VALUES.map((voteValue) => {
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
                                VOTE_VALUES.map((voteValue) => {
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
                        disabled={loading || voteValue === undefined || (justification === undefined && isReveal)}>
                        <Typography variant="h6">{t(isReveal ? "reveal" : "vote")}</Typography>
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </Container>
        </div>
    )
}
