import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import News from "@domain/News/News";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { Link } from 'react-router-dom';
import { URLS } from "@constants/urls";

interface PropTypes {
    News: News;
}

export default function NewsCard(props: PropTypes) {
    let news = props.News;

    const { t } = useTranslation();
    const classes = useStyles();

    const MAX_LEDE = 500;

    const getStatusBar = () => {
        switch (news.verified) {
            case undefined:
                return (
                    <div className={classnames(classes.statusBar, classes.pendingStatusBar)}>
                        <ErrorOutlineOutlinedIcon className={classes.statusBarIcon} />
                        <span>{t("pending-status-bar-description")}</span>
                    </div>
                );
            case true:
                return (
                    <div className={classnames(classes.statusBar, classes.trueStatusBar)}>
                        <CheckIcon className={classes.statusBarIcon} />
                        <span>{t("true-status-bar-description")}</span>
                    </div>
                );
            case false:
                return (
                    <div className={classnames(classes.statusBar, classes.falseStatusBar)}>
                        <CancelOutlinedIcon className={classes.statusBarIcon} />
                        <span>{t("false-status-bar-description")}</span>
                    </div>
                );
        }
    }

    if (news.lede.length > MAX_LEDE) {
        const shortLede = news.lede.substring(0, MAX_LEDE).replace(/[\W]*\S+[\W]*$/, '...');
        news = news.setLede(shortLede)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia component="img" className={classes.image} image={news.image} />
                {getStatusBar()}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{news.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{news.lede}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" component={Link} to={URLS.news.replace(":id", `${news.id}`)}>{t("see-more")}</Button>
            </CardActions>
        </Card>
    )
}