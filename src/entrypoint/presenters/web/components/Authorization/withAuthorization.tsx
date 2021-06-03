import React from "react";
import Error from "@entrypoint/presenters/web/components/Error/Error";
import useAuthorization from "../../hooks/useAuthorization";

export default function withAuthorization(Component: React.ComponentType) {
    return function ComponentWithAuthorization() {

        const [isAuthorized] = useAuthorization()

        if (isAuthorized) {
            return (
                <Component />
            )
        }
        return (
            <Error code={"401"}/>
        );
    }
}
