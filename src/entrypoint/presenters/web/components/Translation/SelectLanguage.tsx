import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import i18n from "./I18next";
import { useTranslation } from 'react-i18next';
import useStyles from "./styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from "../Modal/Modal";

export default function SelectLanguage() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () => { setIsModalOpen(false) }
    const onOpen = () => { setIsModalOpen(true) }

    return (
        <>
            <Button onClick={onOpen} component="span" className={classes.button}>
                <Typography variant="h6">{t(i18n.language)}</Typography>
                <ExpandMoreIcon />
            </Button>
            <Modal isOpen={isModalOpen} onClose={onClose} title={t("select-topic")}>
                {/* TODO style={{ overflowY: 'auto', height: 'calc(100vh - 127px)' }} */}
                <div>
                    {
                        i18n.languages.map((l: string) => {
                            return (
                                <div className={classes.container}>
                                    <Button className={classes.buttonOption} onClick={() => { i18n.changeLanguage(l); onClose(); }}
                                        disabled={l === i18n.language}>
                                        <div className={classes.container}>
                                            <Typography variant="h6">{t(l)}</Typography>
                                        </div>
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
        </>
    )
}