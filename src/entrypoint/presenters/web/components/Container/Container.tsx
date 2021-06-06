import React from "react";
import useStyles from "./styles";
import { Button, IconButton, Paper, Typography } from "@material-ui/core";

type Props = {
    onClick?: () => void,
    onClickTitle?: () => void,
    title?: string,
    icon?: React.ReactNode,
    titleVariant?: ("h1" | "h2" | "h3" | "h4" | "h5" | "h6"),
    children: React.ReactNode
}

export default function Container({ onClick, onClickTitle, title, icon, titleVariant, children }: Props) {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <div className={classes.titleRow}>
                <Button className={classes.button} onClick={onClickTitle}>
                    <Typography variant={titleVariant ? titleVariant : "h5"}>{title}</Typography>
                </Button>
                {icon &&
                    <IconButton className={classes.iconButton} onClick={onClick}>
                        {icon}
                    </IconButton>
                }
            </div>
            <div>
                {children}
            </div>
        </Paper>
    )
}
