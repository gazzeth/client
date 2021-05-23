import React from "react";
import useStyles from "./styles";
import { Modal } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Container from "../Container/Container";

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
                <Container onClose={onClose} onClickTitle={onClickTitle} title={title} icon={<CloseIcon />}>
                    {children}
                </Container>
        </Modal>
    )
}