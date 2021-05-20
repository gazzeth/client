import React from "react";
import useStyles from "./styles";
import { Button, IconButton, Modal, Paper, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

type Props = {
    isOpen: boolean,
    onClose: () => void,
    onClickTitle?: () => void,
    title?: string,
    children: React.ReactNode
}

export default function CustomModal({ isOpen, onClose, onClickTitle, title, children }: Props) {

    const classes = useStyles();

    return (
        <Modal
            className={classes.modal}
            open={isOpen}
            onClose={onClose}>
            <Paper className={classes.paper}>
                <div className={classes.titleRow}>
                    <Button className={classes.button} onClick={onClickTitle}>
                        <Typography variant="h5">{title}</Typography>
                    </Button>
                    <IconButton className={classes.iconButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div>
                    {children}
                </div>
            </Paper>
        </Modal>
    )
}