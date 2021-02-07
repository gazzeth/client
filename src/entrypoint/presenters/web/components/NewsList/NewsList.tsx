import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { container } from "@container-inversify";
import News from "@domain/News/News";
import NewsCard from "@entrypoint/presenters/web/components/NewsCard/NewsCard";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";
import Pagination from "@domain/Pagination/Pagination";
import Filter from "@domain/Filter/NewsFilter";
import { CircularProgress, Container, Grid } from '@material-ui/core'

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsList() {

    const classes = useStyles();

    const PAGE_SIZE = 5; //TODO maybe put in constnants?
    const [newsList, setNewList] = useState<News[]>([]);
    const [pagination, setPagination] = useState<Pagination>(new Pagination(PAGE_SIZE, 0));
    const [filter, setFilter] = useState<Filter>(new Filter());
    const [loading, setLoading] = useState<boolean>(true);

    const getNextPage = (handleNewList: ((newsList: News[]) => void),
        pagination: Pagination, filter: Filter) => {
        newsService.getNewsListUseCase().list(pagination, filter)
            .then((newsListResponce) => {
                handleNewList(newsListResponce);
                setLoading(false);
            })
            .catch((error) => console.log(error)) //TODO
    }

    useEffect(() => {
        const dafaultPagination = new Pagination(PAGE_SIZE, 0)
        setPagination(dafaultPagination);
        getNextPage((newsListResponce) => setNewList(newsListResponce),
            dafaultPagination, filter);
    }, [filter]);

    useEffect(() => {
        if (pagination.offset !== 0) {
            getNextPage((newsListResponce) => setNewList(n => [...n, ...newsListResponce]),
                pagination, filter);
        }
    }, [pagination]) //TODO remove warning run some test

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !loading) {
            setPagination(pagination.advancePage());
            setLoading(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" className={classes.newsListContainer} spacing={3}>
                {newsList.map(news => <Grid item><NewsCard News={news} /></Grid>)}
                {loading ? <CircularProgress color="secondary" /> : null}
            </Grid>
        </Container>
    )
}
