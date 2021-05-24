import React, { useState } from "react";
import Container from "../Container/Container";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import SelectTopic from "../SelectTopic/SelectTopic";
import Topic from "@domain/models/Topic/Topic";

export default function JuryForm() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [currentTopic, setCurrentTopic] = useState<Topic>(undefined);

    const onChange = (t: Topic) => { setCurrentTopic(t) }

    return (
        <div className={classes.rowContainer}>
            <Container title={t("registry")}>
                <SelectTopic selectedOption={currentTopic} onChange={onChange}/>
            </Container>
        </div>
    )
}
