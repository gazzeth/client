import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import News from "@domain/News/News";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";


interface Props {
    News: News;
}

export default function NewsCard(props: Props) {
    const news = props.News;

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia component="img" className={classes.image} image={news.image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{news.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{news.lede}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">{t("see-more")}</Button>
            </CardActions>
        </Card>
    )
}