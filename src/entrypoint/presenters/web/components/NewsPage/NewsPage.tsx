import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "@domain/models/News/News";
import useStyles from "./styles";
// import { useTranslation } from 'react-i18next';
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";
import { CircularProgress, Container } from "@material-ui/core";
// import Pie from "react-chartjs-2";
import NewsRender from "../NewsRender/NewsRender";
import Votation from "../Votation/Votation";

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsPage() {

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
    console.log(news)
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
    return (
        <Container maxWidth={false}>
            <NewsRender>{news.content}</NewsRender>
            <Votation votes={news.votes} />
        </Container>
    )
}
