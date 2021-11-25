import React, { Fragment, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import Topic from "@domain/models/Topic/Topic";
import SelectTopic from "../SelectTopic/SelectTopic";
import Container from "../Container/Container";
import LockInfo from "../LockInfo/LockInfo";
import NewsService from "@configuration/usecases/NewsService";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import News from "@domain/models/News/News";
import NewsRender from "../NewsRender/NewsRender";
import BlockchainService from "@configuration/usecases/BlockchainService";
import { toast } from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ethers } from "ethers";

const newsService = container.get<NewsService>(TYPES.NewsService);
const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function NewsForm() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [news, setNews] = useState<{ content: string, topic: Topic }>({ content: undefined, topic: undefined });
    const [preRender, setPreRender] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>(undefined);
    const [loading, setLoading] = React.useState(false);
    const [errorMenssage, setErrorMenssage] = useState<string>(undefined);

    const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
    const [ , account, , library ] = useActiveBlockchain();

    const onChange = (t: Topic) => { setNews((n) => { return { ...n, topic: t } }) }
    const handleChangePreRender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPreRender(event.target.checked);
    };

    const setContent = (e: any) => {
        const target = (e.target as HTMLInputElement)
        setFileName(target.files[0].name)
        target.files[0].text().then(s =>
            setNews((n) => {
                return { ...n, content: s }
            }))
    }

    const onSummit = () => {
        setLoading(true)
        newsService.getNewsPostUseCase()
            .post(new News(undefined, news.content, news.topic, undefined), library)
            .then(() => toast.success(t("succesful-news-post"))) 
            .catch((error: Error) => toast.error(t(error.message)))
            .finally(() => setLoading(false))
    }

    const handleInsufficientBalance = (b: boolean) => {
        if (b) {
            setErrorMenssage(t("insuficient-balance-dai"))
        }
        else if (errorMenssage === t("insuficient-balance-dai")) {
            setErrorMenssage(undefined)
        }
    }

    return (
        <>
            <div className={classes.rowContainer}>
                <Container title={t("publish-news")} explanation={t("news-explanation")}>
                    <div className={classes.rowContainer}>
                        <div className={classes.textContainer}>
                            <Typography className={classes.text} variant="h6">{fileName ? fileName : t("select-markdown")}</Typography>
                        </div>
                        <Fragment>
                            <input color="primary" accept="text/markdown" type="file" onChange={setContent} id="button-file" style={{ display: 'none', }} />
                            <label htmlFor="button-file">
                                <Button component="span" className={classes.button}>
                                    <Typography variant="h6">{t("browse-files")}</Typography>
                                </Button>
                            </label>
                        </Fragment>
                    </div>
                    <div className={classes.rowContainer}>
                        <SelectTopic selectedOption={news.topic} onChange={onChange} />
                    </div>
                    <div className={classes.rowContainer}>
                        <FormControlLabel
                            control={<Checkbox checked={preRender} onChange={handleChangePreRender} color="primary" />} label={t("pre-render")} />
                    </div>
                    {news.topic && <LockInfo lockCost={parseFloat(ethers.utils.formatUnits(news.topic.costPublish, 18))} library={library} account={account} onChange={handleInsufficientBalance} />}
                    {errorMenssage && <div className={classes.rowContainer}><Typography className={classes.error}>{errorMenssage}</Typography></div>}
                    <div className={classes.rowContainer} style={{ position: 'relative', }}>
                        <Button className={classes.buttonPublish} onClick={onSummit}
                            disabled={loading || !news.content || !news.topic}>
                            <Typography variant="h6">{t("publish")}</Typography>
                        </Button>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </div>
                </Container>
            </div>
            {
                preRender && !!news.content && <NewsRender>{news.content}</NewsRender>
            }
        </>
    )
}
