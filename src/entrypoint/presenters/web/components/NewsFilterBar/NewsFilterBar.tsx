import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import NewsFilter from "@domain/models/Filter/NewsFilter";
import { InputLabel, FormControl, Paper, Select, Typography, Container } from "@material-ui/core";
import { VOTE_VALUE, VOTE_VALUES } from "@constants/vote_value";

interface PropTypes {
    filter: NewsFilter,
    onChange: (filter: NewsFilter) => void
}

export default function NewsFilterBar({ filter, onChange }: PropTypes) {
    const { t } = useTranslation();
    const classes = useStyles();

    const handleVerifiedChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        let value = event.target.value;
        if (value === "undefined") {
            value = undefined;
        }
        onChange(filter.setVerified(value as (VOTE_VALUE | undefined)));
    }

    return (
        <Paper elevation={3}>
            <Container fixed>
                <Typography variant="h5">{t("filter-bar-title")}</Typography>
                <div className={classes.rowContainer}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>{t("verified-title")}</InputLabel>
                        <Select native value={filter.verified} label={t("verified-title")}
                            onChange={handleVerifiedChange}>
                            <option aria-label="None" value={undefined} />
                            {
                                VOTE_VALUES.map((voteValue) => {
                                    return <option value={voteValue}>{t("vote-state-value-" + voteValue)}</option>
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
            </Container>
        </Paper>
    );
}
