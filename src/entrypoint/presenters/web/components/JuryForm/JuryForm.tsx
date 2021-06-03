import React, { useState } from "react";
import Container from "../Container/Container";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import SelectTopic from "../SelectTopic/SelectTopic";
import Topic from "@domain/models/Topic/Topic";
import NumberFormat from 'react-number-format';
import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import classnames from "classnames";
import LockInfo from "../LockInfo/LockInfo";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import TopicService from "@configuration/usecases/TopicService";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { toast } from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';

const topicService = container.get<TopicService>(TYPES.TopicService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function JuryForm() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [currentTopic, setCurrentTopic] = useState<Topic>(undefined);
    const [currentQuantity, setCurrentQuantity] = useState<string>(undefined);
    const [selectedTopics, setSelectedTopics] = useState<{ topic: Topic, quantity: number }[]>([])
    const [errorMenssage, setErorMenssage] = useState<string>(undefined)
    const [cost, setCost] = useState<number>(0);
    const [loading, setLoading] = React.useState(false);

    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [, account, , library] = useActiveBlockchain();

    const onChange = (t: Topic) => { setCurrentTopic(t) }
    const onAdd = () => {
        if (currentTopic && currentQuantity) {
            setSelectedTopics(topics => {
                setErorMenssage(undefined)
                setCost(c => c + currentTopic.costJury * (+currentQuantity))
                return [...topics, { topic: currentTopic, quantity: +currentQuantity }]
            })
        }
        else {
            setErorMenssage(t("jury-form-incomplete"))
        }
    }
    const onSummit = () => {
        setLoading(true)
        topicService.getTopicSubscribeUsecase().subscribe(selectedTopics, library)
            .then(() => toast.success(t("succesful-sucribe-topic"))) //TODO improve Promise.All
            .catch((error) => toast.error(t(error.message)))
            .finally(() => setLoading(false))
    }

    return (
        <div className={classes.rowContainer}>
            <Container title={t("registry")}>
                <div className={classes.rowContainer}>
                    <SelectTopic selectedOption={currentTopic} onChange={onChange} />
                    <TextField variant="outlined" label={t("quantity")} value={currentQuantity}
                        onChange={(event) => { setCurrentQuantity(event.target.value) }}
                        InputProps={{ inputComponent: NumberFormatCustom as any }} />
                    <Button onClick={onAdd} className={classes.button}>
                        <Typography variant="h6">{t("add")}</Typography>
                    </Button>
                </div>
                {errorMenssage && <Typography className={classes.error}>{errorMenssage}</Typography>}
                {
                    selectedTopics.map((t, i) => {
                        const onRemove = () => {
                            setSelectedTopics(topic => {
                                const newTopics = [...topic]
                                newTopics.splice(i, 1)
                                setCost(c => c - t.topic.costJury * t.quantity)
                                return newTopics
                            })
                        }
                        return (
                            <div className={classnames(classes.rowContainer, classes.spaceBetween)}>
                                <Typography variant="h6">{t.topic.name}</Typography>
                                <Typography variant="h6">{t.quantity}</Typography>
                                <IconButton className={classes.iconButton} onClick={onRemove}>
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        )
                    })
                }
                {selectedTopics.length !== 0 && <LockInfo lockCost={cost} library={library} account={account} />}
                <div className={classes.rowContainer} style={{ position: 'relative', }}>
                    <Button className={classes.buttonRegistry} onClick={onSummit}
                        disabled={loading || selectedTopics.length === 0}>
                        <Typography variant="h6">{t("regiter-jury")}</Typography>
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </Container>
        </div>
    )
}

interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
    const { inputRef, onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values: any) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
        />
    )
}
