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

    const onSummit = () => {
        if (isReveal) {
            voteService.getVoteRevealUsecase()
                .reveal(new Vote(voteValue, Number.parseFloat(id), justification), library)
        }
        else {
            voteService.getVoteCommitUseCase()
                .commit(new Vote(voteValue, Number.parseFloat(id)), library)
        }
    }

    return (
        <div className={classes.rowContainer}>
            <Container title={t(`${isReveal ? "reveal" : "vote"}-news`)}>
                <div className={classes.rowContainer}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>{t("select-vote-value")}</InputLabel>
                        <Select native value={voteValue} label={t("select-vote-value")}
                            onChange={(e) => setVoteValue(e.target.value as VOTE_VALUE)} >
                            {
                                VOTE_VALUES.map((voteValue) => {
                                    if (voteValue == VOTE_VALUE.None) {
                                        return <option aria-label="None" value={undefined} />
                                    }
                                    return <option value={voteValue}>{t("vote-value-" + voteValue)}</option>
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
                {
                    isReveal && <TextField className={classes.formControl} label={t("justification")}
                        multiline rows={4} variant="outlined" onChange={(e) => setJustification(e.target.value as string)} />
                }
                <div className={classes.rowContainer}>
                    <Button className={classes.button} onClick={onSummit}
                        disabled={voteValue === undefined || (justification === undefined && isReveal)}>
                        <Typography variant="h6">{t(isReveal ? "reveal" : "vote")}</Typography>
                    </Button>
                </div>
            </Container>
        </div>
    )
}
