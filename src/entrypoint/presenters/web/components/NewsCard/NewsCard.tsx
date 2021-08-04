import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import NewsPreview from "@domain/models/News/NewsPreview";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckIcon from '@material-ui/icons/Check';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Link } from 'react-router-dom';
import { URLS } from "@constants/urls";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { toast } from 'react-toastify';

interface PropTypes {
    News: NewsPreview;
}

export default function NewsCard(props: PropTypes) {
    let news = props.News;

    const { t } = useTranslation();
    const classes = useStyles();

    const MAX_LEDE = 500;

    const getStatusBar = () => {
        if (!news.isRevealOver()) {
            return (
                <div className={classnames(classes.statusBar, classes.pendingStatusBar)}>
                    <QueryBuilderIcon className={classes.statusBarIcon} />
                    <span>{t("pending-status-bar-description")}</span>
                </div>
            );
        }
        else if (news.hasEnoughtVotes()) {
            return (
                <div className={classnames(classes.statusBar, classes.insufficientStatusBar)}>
                    <RadioButtonUncheckedIcon className={classes.statusBarIcon} />
                    <span>{t("insufficient-status-bar-description")}</span>
                </div>
            );
        }
        else if(news.isTrue()) {
            return (
                <div className={classnames(classes.statusBar, classes.trueStatusBar)}>
                    <CheckIcon className={classes.statusBarIcon} />
                    <span>{t("true-status-bar-description")}</span>
                </div>
            );
        }
        else if(news.isFalse()) {
            return (
                <div className={classnames(classes.statusBar, classes.falseStatusBar)}>
                    <CancelOutlinedIcon className={classes.statusBarIcon} />
                    <span>{t("false-status-bar-description")}</span>
                </div>
            );
        }
        else if(news.isUnqualified()) {
            return (
                <div className={classnames(classes.statusBar, classes.unqualifiedStatusBar)}>
                    <RemoveCircleOutlineIcon className={classes.statusBarIcon} />
                    <span>{t("unqualified-status-bar-description")}</span>
                </div>
            );
        }
        else {
            return (
                <div className={classnames(classes.statusBar, classes.noConsentStatusBar)}>
                    <ErrorOutlineIcon className={classes.statusBarIcon} />
                    <span>{t("no-consent-status-bar-description")}</span>
                </div>
            );
        }
    }

    if (news.lede.length > MAX_LEDE) {
        const shortLede = news.lede.substring(0, MAX_LEDE).replace(/[\W]*\S+[\W]*$/, '...');
        news = news.setLede(shortLede)
    }

    const copy = () => {
        navigator.clipboard.writeText(window.location.hostname + URLS.news.replace(":id", `${news.id}`))
        toast.success(t("succesful-copy"))
    }

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={URLS.news.replace(":id", `${news.id}`)} style={{ height: "100%" }}>
                <CardMedia component="img" className={classes.image} image={news.image} />
                {getStatusBar()}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{news.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{news.lede}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: "end"}}>
                <Button size="small" color="primary" onClick={copy}>
                    <FileCopyOutlinedIcon />
                    <Typography variant="body2">{t("copy")}</Typography>
                </Button>
            </CardActions>
        </Card>
    )
}
