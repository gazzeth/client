import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@entrypoint/presenters/web/reducers/allReducers";
import Error from "./Error";
import allActions from "@entrypoint/presenters/web/actions/allActions";

export default function withError(Component: React.ComponentType) {
    return function ComponentWithLayout() {

        const dispatch = useDispatch();
        let errorCode = useSelector((state: RootState) => state.error.code);

        useEffect(() => {
            dispatch(allActions.errorActions.resetCode())
        }, [dispatch])

        if (errorCode !== undefined) {
            return <Error code={errorCode} />
        }
        else {
            return <Component />
        }
    }
}
