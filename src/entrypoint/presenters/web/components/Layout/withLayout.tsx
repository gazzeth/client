import React from "react";
import useStyles from "./styles";
import Header from "@entrypoint/presenters/web/components/Header/Header";

export default function withLayout(Component: React.ComponentType) {
    return function ComponentWithLayout() {

        const classes = useStyles();

        return (
            <>
                <Header />
                <div className={classes.extendToolbar} />
                <Component />
            </>
        );
    }
}
