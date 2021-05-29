import React, { Fragment, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import Topic from "@domain/models/Topic/Topic";
import SelectTopic from "../SelectTopic/SelectTopic";
import Container from "../Container/Container";
import LockInfo from "../LockInfo/LockInfo";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function NewsForm() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [news, setNews] = useState<{ content: string, topic: Topic }>({ content: undefined, topic: undefined });
    const [preRender, setPreRender] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>(undefined);

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

    }

    return (
        <>
            <div className={classes.rowContainer}>
                <Container title={t("publish-news")}>
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
                    {news.topic && <LockInfo lockCost={news.topic.costPublish} />}
                    <div className={classes.rowContainer}>
                        <Button className={classes.buttonPublish} onClick={onSummit}
                            disabled={!news.content || !news.topic}>
                            <Typography variant="h6">{t("publish")}</Typography>
                        </Button>
                    </div>
                </Container>
            </div>
            {
                preRender && !!news.content &&
                <div className={classes.rowContainer}>
                    <Container>
                        <ReactMarkdown remarkPlugins={[gfm]}>{news.content}</ReactMarkdown>
                    </Container>
                </div>
            }
        </>
    )
}
