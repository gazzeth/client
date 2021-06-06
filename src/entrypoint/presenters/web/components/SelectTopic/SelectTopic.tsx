import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { Button, Typography } from "@material-ui/core";
import Modal from "../Modal/Modal";
import Topic from "@domain/models/Topic/Topic";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TopicService from "@configuration/usecases/TopicService";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import clsx from 'clsx';

const topicService = container.get<TopicService>(TYPES.TopicService);

type Props = {
    selectedOption?: Topic,
    onChange: (t: Topic) => void,
}

export default function SelectTopic({ selectedOption, onChange }: Props) {
    const { t } = useTranslation();
    const classes = useStyles();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () => { setIsModalOpen(false) }
    const onOpen = () => { setIsModalOpen(true) }

    const [topics, setTopics] = useState<Topic[]>([])

    useEffect(() => {
        topicService.getTopicListUseCase().list(undefined)
            .then((topics) => setTopics(topics))
            .catch((error) => console.log(error)) //TODO
    }, [])

    return (
        <>
            <Button onClick={onOpen} component="span" className={clsx(classes.button, { [classes.buttonSelected]: selectedOption })}>
                <Typography variant="h6">{selectedOption ? selectedOption.name : t("select-topic")}</Typography>
                <ExpandMoreIcon />
            </Button>
            <Modal isOpen={isModalOpen} onClose={onClose} title={t("select-topic")}>
            {/* TODO style={{ overflowY: 'auto', height: 'calc(100vh - 127px)' }} */}
                <div> 
                    {
                        topics.map((t: Topic) => {
                            return (
                                <div className={classes.container}>
                                    <Button className={classes.buttonOption} onClick={() => { onChange(t); onClose(); }}
                                        disabled={selectedOption && t.name === selectedOption.name}>
                                        <div className={classes.container}>
                                            <Typography variant="h6">{t.name}</Typography>
                                        </div>
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
        </>
    )
}