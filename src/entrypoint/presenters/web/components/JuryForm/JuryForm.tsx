import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import Topic from "@domain/models/Topic/Topic";
import NumberFormat from 'react-number-format';
import { Button, TextField, IconButton, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import LockInfo from "../LockInfo/LockInfo";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import TopicService from "@configuration/usecases/TopicService";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { toast } from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from "@domain/models/Pagination/Pagination";
import SelectTopic from "../SelectTopic/SelectTopic";

const topicService = container.get<TopicService>(TYPES.TopicService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function JuryForm() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [currentTopic, setCurrentTopic] = useState<Topic>(undefined);
    const [currentQuantity, setCurrentQuantity] = useState<string>(undefined);
    const [errorMenssage, setErrorMenssage] = useState<string>(undefined);

    const [suscribeTopics, setSuscribeTopics] = useState<{ topic: Topic, quantity: number }[]>([]);
    const [newSuscribeTopics, setNewSuscribeTopics] = useState<{ topic: Topic, quantity: number }[]>([]);
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

    const onChange = (t: Topic) => { setCurrentTopic(t) }
    const onAdd = () => {
        if (currentTopic && currentQuantity) {
            if (+currentQuantity === 0) {
                setErrorMenssage(t("jury-form-quantity"))
            }
            else {
                setErrorMenssage(undefined)
                const index = newSuscribeTopics.findIndex((t) => t.topic.name === currentTopic.name)
                if (index !== -1) {
                    setNewSuscribeTopics(Object.assign([], newSuscribeTopics, { [index]: { topic: currentTopic, quantity: +currentQuantity } }))
                }
                else {
                    setNewSuscribeTopics((nst) => {
                        setSuscribeTopics((st) => [...st, { topic: currentTopic, quantity: 0 }]);
                        return [...nst, { topic: currentTopic, quantity: +currentQuantity }];
                    })
                }
            }
        }
        else {
            setErrorMenssage(t("jury-form-incomplete"))
        }
    }

    useEffect(() => {
        topicService.getTopicListByAddressUseCase().listByAddress(new Pagination(15, 0), account)
            .then((topics) => setSuscribeTopics(t => { setNewSuscribeTopics(topics); return topics; }))
            .catch((error) => toast.error(t(error.message)))
    }, [account, t])

    const costOld = suscribeTopics
        .map((t, i) => t.topic.costJury * t.quantity)
        .reduce((p, c, cI, a) => p + c, 0)
    const costNew = newSuscribeTopics
        .map((t, i) => t.topic.costJury * t.quantity)
        .reduce((p, c, cI, a) => p + c, 0)

    let noSuscriptions = true;

    const handleInsufficientBalance = (b: boolean) => {
        if (b) {
            setErrorMenssage(t("insuficient-balance-dai"))
        }
        else if (errorMenssage === t("insuficient-balance-dai")) {
            setErrorMenssage(undefined)
        }
    }

    return (
        <div className={classes.rowContainer}>
            <Container title={t("registry")}>
                <div className={classes.rowContainer}>
                    <SelectTopic selectedOption={currentTopic} onChange={onChange} />
                    <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
                        <TextField variant="outlined" label={t("quantity")} value={currentQuantity}
                            onChange={(event) => { setCurrentQuantity(event.target.value) }}
                            InputProps={{ inputComponent: NumberFormatCustom as any }} />
                    </div>
                    <Button onClick={onAdd} className={classes.button}>
                        <Typography variant="h6">{t("add")}</Typography>
                    </Button>
                </div>
                {errorMenssage && <div className={classes.rowContainer}><Typography className={classes.error}>{errorMenssage}</Typography></div>}
                <div className={classes.columnContainer}>
                    <table className={classes.container}>
                        <tr>
                            <th style={{ background: "#edeef2", borderTopLeftRadius: 20, }}>
                                <Typography variant="h6">{t("topic")}</Typography>
                            </th>
                            <th style={{ background: "#edeef2", }}>
                                <Typography variant="h6">{t("quantity")}</Typography>
                            </th>
                            <th style={{ background: "#edeef2", borderTopRightRadius: 20, }}></th>
                        </tr>
                        {
                            newSuscribeTopics
                                .map((t, i) => {
                                    if (t.quantity === 0) {
                                        return null
                                    }
                                    noSuscriptions = false
                                    return (
                                        <tr>
                                            <td style={{ paddingRight: "1rem" }}>
                                                <Typography variant="h6">{t.topic.name}</Typography>
                                            </td>
                                            <td style={{ paddingRight: "1rem" }}>
                                                <TextField variant="outlined" value={t.quantity} style={{ width: "100%" }}
                                                    onChange={(event) => {
                                                        if (+event.target.value !== 0) {
                                                            setNewSuscribeTopics(Object.assign([], newSuscribeTopics, { [i]: { ...t, quantity: +event.target.value } }));
                                                        }
                                                    }}
                                                    InputProps={{ inputComponent: NumberFormatCustom as any }} />
                                            </td>
                                            <td style={{ paddingRight: "1rem" }}>
                                                <IconButton className={classes.iconButton} onClick={() => setNewSuscribeTopics(Object.assign([], newSuscribeTopics, { [i]: { ...t, quantity: 0 } }))}>
                                                    <CloseIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                        {
                            noSuscriptions &&
                            <tr>
                                <th colSpan={2} style={{ paddingRight: "1rem" }}>
                                    <Typography variant="h6">{t("no-suscription")}</Typography>
                                </th>
                            </tr>
                        }
                    </table>
                    {
                        changeSuscription.length !== 0 && <LockInfo lockCost={costNew - costOld} library={library} account={account} onChange={handleInsufficientBalance} />
                    }
                </div>
                <div className={classes.rowContainer} style={{ position: 'relative', }}>
                    <Button className={classes.buttonRegistry} onClick={onSummit}
                        disabled={loading || changeSuscription.length === 0 || !!errorMenssage}>
                        <Typography variant="h6">{t("regiter-jury")}</Typography>
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </Container>
        </div >
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
