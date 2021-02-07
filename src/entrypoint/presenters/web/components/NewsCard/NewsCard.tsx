import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import News from "@domain/News/News";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

interface Props {
    News: News;
}

export default function NewsCard(props: Props) {
    const news = props.News;

    const { t } = useTranslation();
    const classes = useStyles();

    const getIcon = () => {
        switch (news.verified) {
            case undefined:
                return <ErrorOutlineOutlinedIcon className={classnames(classes.overlay, classes.pendingIcon)} />;
            case true:
                return <CheckIcon className={classnames(classes.overlay, classes.trueIcon)} />;
            case false:
                return <CancelOutlinedIcon className={classnames(classes.overlay, classes.falseIcon)} />;
        }
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia component="img" className={classes.image} image={news.image} />
                {getIcon()}
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