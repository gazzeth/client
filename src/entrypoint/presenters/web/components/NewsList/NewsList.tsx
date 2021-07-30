import React from "react";
import useStyles from "./styles";
import { container } from "@container-inversify";
import NewsPreview from "@domain/models/News/NewsPreview";
import NewsCard from "@entrypoint/presenters/web/components/NewsCard/NewsCard";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";
import Pagination from "@domain/models/Pagination/Pagination";
import Filter from "@domain/models/Filter/NewsFilter";
import { CircularProgress, Container, Grid } from '@material-ui/core'
import NewsFilterBar from "../NewsFilterBar/NewsFilterBar";
import useInfiniteScrolling from "../../hooks/useInifiniteScrolling";
import { useLocation } from "react-router-dom";
import { VOTE_VALUES } from "@constants/vote_value";

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsList() {
    const PAGE_SIZE = 5; //TODO maybe put in constnants?

    let query = new URLSearchParams(useLocation().search);

    const getPage = async (handleNewList: ((newsList: NewsPreview[]) => void),
        pagination: Pagination, filter: Filter) => {
        newsService.getNewsListUseCase().list(pagination, filter)
            .then((newsListResponce) => {
                handleNewList(newsListResponce);
            })
            .catch((error) => console.log(error)) //TODO
    }

    const verified = query.get("verified") === null ? undefined : VOTE_VALUES[parseInt(query.get("verified"))]
    const topic = query.get("topic") === null ? undefined : query.get("topic")
    const classes = useStyles();
    const [loading, , filter, setFilter, newsList] = useInfiniteScrolling(getPage, new Filter(verified, topic), PAGE_SIZE)


    return (
        <Container maxWidth={false}>
            <Grid container className={classes.gridContainer} spacing={2} alignItems="stretch">
                <Grid item />
                <Grid item xs={12}>
                    <NewsFilterBar filter={filter} onChange={(f) => {
                            const params = new URLSearchParams(window.location.search);
                            if (f.verified !== undefined) {
                                params.set("verified", f.verified.toString());
                            }
                            else {
                                params.delete("verified")
                            }
                            if (f.topic !== undefined) {
                                params.set("topic", f.topic);
                            }
                            else {
                                params.delete("topic")
                            }
                            window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
                            setFilter(f)
                    }} />
                </Grid>
            </Grid>
            <Grid container direction="column" className={classes.gridContainer} spacing={3}>
                <Grid item>
                    <Grid container justify="center" direction="row-reverse" className={classes.gridContainer} spacing={3}>
                        {newsList.map(news => <Grid item><NewsCard News={news} /></Grid>)}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column" className={classes.gridContainer} spacing={3}>
                <Grid item>
                    <Grid container justify="center" className={classes.gridContainer} spacing={3}>
                        {loading && <Grid item><CircularProgress color="primary" size={200} /></Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
