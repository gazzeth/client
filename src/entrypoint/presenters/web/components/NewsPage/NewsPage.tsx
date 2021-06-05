import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import News from "@domain/models/News/News";
import useStyles from "./styles";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import NewsRender from "../NewsRender/NewsRender";
import Votation from "../Votation/Votation";
import { VOTE_VALUE } from "@constants/vote_value";

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsPage() {
    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();
    const idNumber = Number(id)

    const classes = useStyles();

    const [news, setNews] = useState<News>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!isNaN(idNumber)) {
            newsService.getNewsGetUseCase().get(idNumber)
                .then((newsResponce) => setNews(newsResponce))
                .catch((error) => console.log(error))//TODO maybe do somethin else
                .finally(() => setLoading(false))
        }
    }, [idNumber])

    if (isNaN(idNumber) || (loading === false && news === undefined)) {
        return <>404 para el id:{id}</>//TODO render 404
    }
    if (loading === true) {
        return (
            <div className={classes.containerSpinner}>
                <CircularProgress className={classes.spinner} size="10" />
            </div>
        );
    }

    const getStatusMessage = (n: News) => {
        let message, backColor, color;
        if (!n.isRevealOver()) {
            return null
        }
        switch (n.verified) {
            case VOTE_VALUE.True:
                message = "news-status-message-0"
                backColor = "#008000"
                color = "#FFFFFF"
                break;
            case VOTE_VALUE.False:
                message = "news-status-message-1"
                backColor = "#FF0000"
                color = "#FFFFFF"
                break;
            case VOTE_VALUE.Unqualified:
                message = "news-status-message-2"
                backColor = "#FFFF00"
                color = "#FFFFFF"
                break;
            default:
                message = "news-status-message-3"
                backColor = "#000000"
                color = "#FFFFFF"
        }
        return (
            <div style={{ backgroundColor: backColor, width: "100%", padding: "1rem", color: color }}>
                <Typography variant="body2" >{t(message)}</Typography>
            </div>
        )
    }

    return (
        <>
            {getStatusMessage(news)}
            <Container maxWidth={false}>
                <NewsRender>{news.content}</NewsRender>
                {news.isRevealOver() && <Votation votes={news.votes} />}
            </Container>
        </>
    )
}
