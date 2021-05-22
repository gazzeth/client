import React from "react";
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
import NewsFilter from "@domain/models/Filter/NewsFilter";
import { InputLabel, FormControl, FormHelperText, MenuItem, Paper, Select, Typography, Container } from "@material-ui/core";
import { VERIFIED_STATUS } from "@constants/verifiedStatus";

interface PropTypes {
    filter: NewsFilter,
    onChange: (filter: NewsFilter) => void
}

export default function NewsFilterBar({ filter, onChange }: PropTypes) {
    const { t } = useTranslation();
    const classes = useStyles();

    const handleVerifiedChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        let value = event.target.value;
        if (value === "undefined") {
            value = undefined;
        }
        onChange(filter.setVerified(value as (VERIFIED_STATUS | undefined)));
    }

    return (
        <Paper elevation={3}>
            <Container fixed>
                <Typography variant="h5">{t("filter-bar-title")}</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink>{t("verified-title")}</InputLabel>
                    <Select displayEmpty value={filter.verified} onChange={handleVerifiedChange}>
                        <MenuItem value={"undefined"}><em>{t("none")}</em></MenuItem>
                        <MenuItem value={VERIFIED_STATUS.true}>{t("verified")}</MenuItem>
                        <MenuItem value={VERIFIED_STATUS.false}>{t("not-verified")}</MenuItem>
                        <MenuItem value={VERIFIED_STATUS.pending}>{t("pending")}</MenuItem>
                    </Select>
                    <FormHelperText>{t("verified-title")}</FormHelperText>
                </FormControl>
            </Container>
        </Paper>
    );
}
