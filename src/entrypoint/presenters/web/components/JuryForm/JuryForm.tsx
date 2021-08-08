import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import Topic from "@domain/models/Topic/Topic";
import NumberFormat from 'react-number-format';
import { Button, TextField, Typography } from "@material-ui/core";
import clsx from 'clsx';
import LockInfo from "../LockInfo/LockInfo";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import TopicService from "@configuration/usecases/TopicService";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { toast } from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from "@domain/models/Pagination/Pagination";

const topicService = container.get<TopicService>(TYPES.TopicService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function JuryForm() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [suscribeTopics, setSuscribeTopics] = useState<{ topic: Topic, quantity: number }[]>([]);
    const [newSuscribeTopics, setNewSuscribeTopics] = useState<{ topic: Topic, quantity: number }[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [loading, setLoading] = React.useState(false);

    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [, account, , library] = useActiveBlockchain();

    const changeSuscription = newSuscribeTopics.filter((t, i) => t.quantity !== suscribeTopics[i].quantity)

    const onSummit = () => {
        setLoading(true)
        topicService.getTopicSubscribeUsecase().subscribe(changeSuscription, library)
            .then(() => { setSuscribeTopics(newSuscribeTopics); toast.success(t("succesful-sucribe-topic")); }) //TODO improve Promise.All
            .catch((error) => toast.error(t(error.message)))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        topicService.getTopicListByAddressUseCase().listByAddress(new Pagination(5, 0), account)
            .then((topics) => setSuscribeTopics(t => { setNewSuscribeTopics(topics); return topics; }))
            .catch((error) => toast.error(t(error.message)))
    }, [account, t])

    useEffect(() => {
        topicService.getTopicListUseCase().list(new Pagination(5, 0))
            .then((topics) => setTopics(topics))
            .catch((error) => toast.error(t(error.message)))
    }, [t])

    const addedTopics = topics
        .filter((t) => suscribeTopics.find((tq) => tq.topic.name === t.name) === undefined)
        .map((t) => { return { topic: t, quantity: 0 } })
    if (addedTopics.length !== 0) {
        setSuscribeTopics((t) => { const newT = t.concat(addedTopics); setNewSuscribeTopics(newT); return newT; })
    }

    const costOld = suscribeTopics
        .map((t, i) => t.topic.costJury * t.quantity)
        .reduce((p, c, cI, a) => p + c, 0)
    const costNew = newSuscribeTopics
        .map((t, i) => t.topic.costJury * t.quantity)
        .reduce((p, c, cI, a) => p + c, 0)

    return (
        <div className={classes.rowContainer}>
            <Container title={t("registry")}>
                <div className={classes.columnContainer}>
                    <table className={classes.container}>
                        <tr>
                            <th style={{ background: "#edeef2", borderTopLeftRadius: 20, }}>
                                <Typography variant="h6">{t("topic")}</Typography>
                            </th>
                            <th style={{ background: "#edeef2", borderTopRightRadius: 20, }}>
                                <Typography variant="h6">{t("quantity")}</Typography>
                            </th>
                        </tr>
                        {
                            newSuscribeTopics.map((t, i) => {
                                return (
                                    <tr>
                                        <td style={{ paddingRight: "1rem" }}>
                                            <Typography variant="h6">{t.topic.name}</Typography>
                                        </td>
                                        <td>
                                            <TextField variant="outlined" value={t.quantity}
                                                onChange={(event) => { setNewSuscribeTopics(Object.assign([], newSuscribeTopics, { [i]: { ...t, quantity: +event.target.value } })) }}
                                                InputProps={{ inputComponent: NumberFormatCustom as any }} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    {
                        changeSuscription.length !== 0 && <LockInfo lockCost={costNew - costOld} library={library} account={account} />
                    }
                </div>
                <div className={classes.rowContainer} style={{ position: 'relative', }}>
                    <Button className={classes.buttonRegistry} onClick={onSummit}
                        disabled={loading || changeSuscription.length === 0}>
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
