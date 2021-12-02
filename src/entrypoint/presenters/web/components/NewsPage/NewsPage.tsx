import React, { useEffect, useState } from "react";
import classnames from "classnames";
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
import { useDispatch } from 'react-redux';
import allActions from "@entrypoint/presenters/web/actions/allActions";

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsPage() {
    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();
    const idNumber = Number(id)

    const classes = useStyles();
    const dispatch = useDispatch();

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
        dispatch(allActions.errorActions.setCode("404"))
        return null
    }
    if (loading === true) {
        return (
            <div className={classes.containerSpinner}>
                <CircularProgress className={classes.spinner} size="10" />
            </div>
        );
    }

    const getStatusMessage = (n: News) => {
        let message, className;
        if (!n.isRevealOver()) {
            message = "news-status-message-4"
            className = classes.pendingStatusBar
        }
        else if (!n.hasEnoughtVotes()) {
            message = "news-status-message-3"
            className = classes.insufficientStatusBar
        }
        else if(n.isTrue()) {
            message = "news-status-message-0"
            className = classes.trueStatusBar
        }
        else if(n.isFalse()) {
            message = "news-status-message-1"
            className = classes.falseStatusBar
        }
        else if(n.isUnqualified()) {
            message = "news-status-message-2"
            className = classes.unqualifiedStatusBar
        }
        else {
            message = "news-status-message-5"
            className = classes.noConsentStatusBar
        }
        return (
            <div className={classnames(classes.statusBar, className)}>
                <Typography variant="body2" >{t(message)}</Typography>
            </div>
        )
    }

    return (
        <>
            {getStatusMessage(news)}
            <Container maxWidth={false}>
                <NewsRender>{news.content}</NewsRender>
                {news.isRevealOver() && <Votation votes={news.votes} id={!news.withdraw ? news.id : undefined} />}
            </Container>
        </>
    )
}
