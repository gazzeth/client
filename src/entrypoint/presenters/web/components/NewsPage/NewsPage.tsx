import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "@domain/News/News";
import useStyles from "./styles";
// import { useTranslation } from 'react-i18next';
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import NewsService from "@configuration/usecases/NewsService";
import { CircularProgress, Container, Grid, Typography } from "@material-ui/core";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import Pie from "react-chartjs-2";
import classnames from "classnames";

const newsService = container.get<NewsService>(TYPES.NewsService);

export default function NewsPage() {
    let votesChartInstance = null;

    const { id } = useParams<{ id: string }>();
    const idNumber = Number(id)

    const classes = useStyles();

    const [news, setNews] = useState<News>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const votesChartOptions = {
        legend: {
            display: true,
            position: "bottom"
        },
        elements: {
            arc: {
                borderWidth: 2
            }
        }
    };

    const votesChartData = {
        maintainAspectRatio: false,
        responsive: true,
        labels: ["True", "Fake"],
        datasets: [
            {
                data: [3, 7],
                backgroundColor: ["#10913d", "#ba1833"],
                hoverBackgroundColor: ["#17d459", "#f52245"],
                hoverBorderColor: "white"
            }
        ]
    };

    useEffect(() => {
        if (idNumber !== NaN) {
            newsService.getNewsGetListUseCase().get(idNumber)
                .then((newsResponce) => setNews(newsResponce))
                .catch((error) => console.log(error))//TODO maybe do somethin else
                .finally(() => setLoading(false))
        }
    }, [idNumber])

    if (idNumber === NaN || (loading === false && news === undefined)) {
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
            "PROXIMAMENTE"
            {/* TODO 
            <Grid container direction="column" className={classes.gridContainer} spacing={2}>
                <Grid item>
                    <Grid container justify="center" className={classes.gridContainer}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia component="img" className={classes.image} image={news.image} />
                                <CardContent>
                                    <Typography variant="h1" className={classnames(classes.text, classes.title)}>
                                        {news.title}
                                    </Typography>
                                    <Typography variant="h2" className={classnames(classes.text, classes.lede)}>
                                        {news.lede}
                                    </Typography>
                                    <Typography variant="h3" className={classnames(classes.text, classes.body)}>
                                        {news.body}
                                    </Typography>
                                </CardContent>
                                <Container maxWidth="sm">
                                    <Pie
                                        data={votesChartData}
                                        options={votesChartOptions}
                                        ref={input => {
                                            votesChartInstance = input;
                                        }}
                                    />
                                </Container>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid >
            </Grid > */}
        </Container>
    )
}
