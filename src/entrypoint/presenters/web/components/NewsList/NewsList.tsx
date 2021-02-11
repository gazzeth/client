import React from "react";
import useStyles from "./styles";
import { container } from "@container-inversify";
import News from "@domain/News/News";
import NewsCard from "@entrypoint/presenters/web/components/NewsCard/NewsCard";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";
import Pagination from "@domain/Pagination/Pagination";
import Filter from "@domain/Filter/NewsFilter";
import { CircularProgress, Container, Grid } from '@material-ui/core'
import NewsFilterBar from "../NewsFilterBar/NewsFilterBar";
import useInfiniteScrolling from "../../hooks/useInifiniteScrolling";

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsList() {
    const PAGE_SIZE = 5; //TODO maybe put in constnants?

    const getPage = async (handleNewList: ((newsList: News[]) => void),
        pagination: Pagination, filter: Filter) => {
        newsService.getNewsListUseCase().list(pagination, filter)
            .then((newsListResponce) => {
                handleNewList(newsListResponce);
            })
            .catch((error) => console.log(error)) //TODO
    }

    const classes = useStyles();
    const [loading, , filter, setFilter, newsList] = useInfiniteScrolling(getPage, new Filter(), PAGE_SIZE)


    return (
        <Container maxWidth={false}>
            <Grid container className={classes.gridContainer} spacing={2}>
                <Grid item/>
                <Grid item xs={12}>
                    <NewsFilterBar filter={filter} onChange={(f) => setFilter(f)} />
                </Grid>
            </Grid>
            <Grid container direction="column" className={classes.gridContainer} spacing={3}>
                <Grid item>
                    <Grid container justify="center" className={classes.gridContainer} spacing={3}>
                        {newsList.map(news => <Grid item><NewsCard News={news} /></Grid>)}
                    </Grid>
                </Grid>
                {loading && <Grid item><CircularProgress color="secondary" /></Grid>}
            </Grid>
        </Container>
    )
}
