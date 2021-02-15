import React from "react";
import { useParams } from "react-router-dom";
// import useStyles from "./styles";
// import { useTranslation } from 'react-i18next';

export default function NewsPage() {
    const { id } = useParams<{id:string}>();

    return (
        <>{id} es el id</>
    )
}
