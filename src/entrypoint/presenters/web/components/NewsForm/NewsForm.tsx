import React, { Fragment, useState } from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import { Button } from "@material-ui/core";
import PublishIcon from '@material-ui/icons/Publish';
import News from "@domain/models/News/News";

export default function NewsForm() {
    const { t } = useTranslation();
    const classes = useStyles();

    const [news, setNews] = useState<News>(undefined);

    const setContent = (e: any) => {
        const target = (e.target as HTMLInputElement)
        // const fileReader = new FileReader();
        // fileReader.readAsDataURL(target.files[0]);
        // console.log(target.files[0])
        // fileReader.onload = (e) => {
        //     console.log(e.target.result)
        // };

    }

    return (
        <Fragment>
            <input
                color="primary"
                accept="image/*"
                type="file"
                onChange={setContent}
                id="icon-button-file"
                style={{ display: 'none', }}
            />
            <label htmlFor="icon-button-file">
                <Button
                    variant="contained"
                    component="span"
                    className={classes.button}
                    size="large"
                    color="primary"
                >
                    <PublishIcon className={classes.extendedIcon} />
                </Button>
            </label>
        </Fragment>
    )
}
