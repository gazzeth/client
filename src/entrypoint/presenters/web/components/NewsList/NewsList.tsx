import React, { useEffect, useState } from "react";
// import useStyles from "./styles";
import { container } from "@container-inversify";
import News from "@domain/News/News";
import NewsCard from "@entrypoint/presenters/web/components/NewsCard/NewsCard";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsList() {

    const [newsList, setNewList] = useState<News[]>([])

    useEffect(() => {
        newsService.getNewsListUseCase().list()
            .then((newsListResponce) => {
                setNewList(newsListResponce);
            })
            .catch((error) => console.log(error)) //TODO
    }, []);

    return (
        <>
            {newsList.map(news => <NewsCard News={news} />)}
        </>
    )
}