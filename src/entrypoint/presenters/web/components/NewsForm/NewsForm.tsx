import React, { Fragment, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { Button, Typography } from "@material-ui/core";
import NewsDto from "@domain/dtos/News/NewsDto";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function NewsForm() { //TODO
    const { t } = useTranslation();
    const classes = useStyles();

    const [news, setNews] = useState<NewsDto>({ content: undefined, topic: undefined });

    const setContent = (e: any) => {
        const target = (e.target as HTMLInputElement)
        setNews((n) => { return { ...n, content: target.files[0] } })
        // const fileReader = new FileReader();
        // fileReader.readAsDataURL(target.files[0]);
        // console.log(target.files[0])
        // fileReader.onload = (e) => {
        //     console.log(e.target.result)
        // };
    }

    return (
        <div className={classes.columnContainer}>
            <div className={classes.rowContainer}>
                <div className={classes.textContainer}>
                    <Typography className={classes.text} variant="h6">{news.content ? news.content.name : t("select-markdown")}</Typography>
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
                <Button component="span" className={classes.button}>
                    <Typography variant="h6">{news.topic ? news.topic.name : t("select-topic")}</Typography>
                    <ExpandMoreIcon />
                </Button>
            </div>
        </div>
    )
}
