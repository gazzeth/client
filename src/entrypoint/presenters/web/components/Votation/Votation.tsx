import React from "react";
import Vote from "@domain/models/Vote/Vote";
import useStyles from "./styles";
import Container from "../Container/Container";
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

type Props = {
    votes: Vote[]
}

export default function Votation({ votes }: Props) {

    const classes = useStyles();
    const { t } = useTranslation();

    console.log(votes)

    return (
        <div className={classes.root}>
            <Container title={t("votation")} titleVariant={"h2"}>
                {
                    votes.map((v) => {
                        return (
                            <div className={classes.rowContainer}>
                                <div className={classes.leftContainer}>
                                    <Typography>{v.address}</Typography>
                                    {v.justification !== "" && <Typography>{v.justification}</Typography>}
                                </div>
                                <div className={classes.rightContainer}>
                                    <Typography>{t((v.penalized) ? "penalized" : "vote-value-" + v.value)}</Typography>
                                </div>
                            </div>
                        )
                    })
                }
            </Container>
        </div>
    )
}
