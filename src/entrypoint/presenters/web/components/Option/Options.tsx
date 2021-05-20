import React from "react";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import clsx from 'clsx';

type Props = {
    link?: string,
    onClick?: () => void,
    icon: string,
    header: string,
    subHeader?: string,
    active?: boolean
}

export default function Options({ link, onClick, icon, header, subHeader, active }: Props) {
    const classes = useStyles();

    const onClickButton = () => {
        if (onClick) {
            onClick();
        }
        if (link) {
            window.open(link, '_blank');
        }
    }

    return (
        <Button className={clsx(classes.button, { [classes.buttonActive]: active })} classes={{ disabled: classes.disabled }} disabled={!onClick && !link} onClick={onClickButton}>
            <div className={classes.container}>
                <div className={classes.textContainer}>
                    <Typography>{header}</Typography>
                    {subHeader && <Typography>{subHeader}</Typography>}
                </div>
                <div className={classes.iconContainer}>
                    <img src={icon} alt={'Icon'} className={classes.image} />
                </div>
            </div>
        </Button>
    )
}