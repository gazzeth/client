import React from "react";
import useStyles from "./styles";
import Error from "@entrypoint/presenters/web/components/Error/Error";
import useAuthorization from "../../hooks/useAuthorization";
import { CircularProgress } from "@material-ui/core";

export default function withAuthorization(Component: React.ComponentType) {
    return function ComponentWithAuthorization() {

        const classes = useStyles();

        const [isAuthorized, loading] = useAuthorization()

        if (loading) {
            return (
                <div className={classes.columnContiner}>
                    <div className={classes.rowContiner}>
                        <CircularProgress color="primary" size={400} />
                    </div>
                </div>
            )
        }
        if (isAuthorized) {
            return (
                <Component />
            )
        }
        return (
            <Error code={"401"} />
        );
    }
}
