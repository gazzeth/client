import React from "react";
import useStyles from "./styles";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Container from "../Container/Container";

type Props = {
    children: string
}

export default function NewsRender({ children }: Props) {

    const classes = useStyles();

    return (
        <div className={classes.rowContainer}>
            <Container>
                <div className={classes.container}>
                    <ReactMarkdown remarkPlugins={[gfm]}>{children}</ReactMarkdown>
                </div>
            </Container>
        </div>
    )
}
