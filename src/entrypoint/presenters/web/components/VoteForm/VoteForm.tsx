import React, { useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import Container from "../Container/Container";
import { Button, FormControl, InputLabel, Select, TextField, Typography } from "@material-ui/core";
import { VOTE_VALUE, VOTE_VALUES } from "@constants/vote_value";
import { useParams } from "react-router";

type Props = {
    isReveal: boolean
}

export default function VoteForm({ isReveal }: Props) {
    const { t } = useTranslation();
    const classes = useStyles();

    const { id } = useParams<{ id: string }>();

    const [voteValue, setVoteValue] = useState<VOTE_VALUE>(undefined);
    const [justification, setJustification] = useState<string>(undefined);

    const onSummit = () => {
        if (isReveal) {

        }
        else {

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
                        multiline rows={4} variant="outlined" onChange={(e) => setJustification(e.target.value as string)}/>
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
