import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import NewsFilter from "@domain/models/Filter/NewsFilter";
import { InputLabel, FormControl, Paper, Select, Typography, CircularProgress, Grid } from "@material-ui/core";
import { VOTE_VALUE, VOTE_VALUES } from "@constants/vote_value";
import Topic from "@domain/models/Topic/Topic";
import TopicService from "@configuration/usecases/TopicService";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";

const topicService = container.get<TopicService>(TYPES.TopicService);

interface PropTypes {
    filter: NewsFilter,
    onChange: (filter: NewsFilter) => void
}

export default function NewsFilterBar({ filter, onChange }: PropTypes) {
    const { t } = useTranslation();
    const classes = useStyles();

    const handleVerifiedChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        let value = event.target.value;
        if (value === "") {
            value = undefined;
        }
        else {
            value = +value;
        }
        onChange(filter.setVerified(value as (VOTE_VALUE | undefined)));
    }

    const handleTopicChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        let value = event.target.value;
        if (value === "") {
            value = undefined;
        }
        onChange(filter.setTopic(value as (string | undefined)));
    }

    const [topics, setTopics] = useState<Topic[]>([])

    useEffect(() => {
        topicService.getTopicListUseCase().list(undefined)
            .then((topics) => setTopics(topics))
            .catch((error) => console.log(error)) //TODO
    }, [])

    return (
        <Paper className={classes.paper}>
            <div className={classes.rowContainer}>
                <Typography className={classes.title} variant="h5">{t("filter-bar-title")}</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>{t("verified-title")}</InputLabel>
                    <Select native value={filter.verified} label={t("verified-title")}
                        onChange={handleVerifiedChange}>
                        <option aria-label="None" value={undefined} />
                        {
                            VOTE_VALUES.map((voteValue) => {
                                if(voteValue === VOTE_VALUE.None) {
                                    return null
                                }
                                return <option value={voteValue}>{t("vote-state-value-" + voteValue)}</option>
                            })
                        }
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>{t("select-topic")}</InputLabel>
                    {topics.length === 0 ?
                        <Grid container justify="center" className={classes.gridContainer} spacing={3}>
                            <Grid item><CircularProgress color="primary" size={50} /></Grid>
                        </Grid> :
                        <Select native value={filter.topic} label={t("select-topic")}
                            onChange={handleTopicChange}>
                            <option aria-label="None" value={undefined} />
                            {
                                topics.map((topic) => {
                                    return <option value={topic.name}>{topic.name}</option>
                                })
                            }
                        </Select>}
                </FormControl>
            </div>
        </Paper>
    );
}
