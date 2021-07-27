import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import NewsPreview from "@domain/models/News/NewsPreview";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { Link } from 'react-router-dom';
import { URLS } from "@constants/urls";
import { VOTE_VALUE } from "@constants/vote_value";
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
        switch (news.verified) {
            case VOTE_VALUE.None:
                return (
                    <div className={classnames(classes.statusBar, classes.pendingStatusBar)}>
                        <ErrorOutlineOutlinedIcon className={classes.statusBarIcon} />
                        <span>{t("pending-status-bar-description")}</span>
                    </div>
                );
            case VOTE_VALUE.True:
                return (
                    <div className={classnames(classes.statusBar, classes.trueStatusBar)}>
                        <CheckIcon className={classes.statusBarIcon} />
                        <span>{t("true-status-bar-description")}</span>
                    </div>
                );
            case VOTE_VALUE.False:
                return (
                    <div className={classnames(classes.statusBar, classes.falseStatusBar)}>
                        <CancelOutlinedIcon className={classes.statusBarIcon} />
                        <span>{t("false-status-bar-description")}</span>
                    </div>
                );
            case VOTE_VALUE.Unqualified:
                return (
                    <div className={classnames(classes.statusBar, classes.unqualifiedStatusBar)}>
                        <ReportProblemOutlinedIcon className={classes.statusBarIcon} />
                        <span>{t("unqualified-status-bar-description")}</span>
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
