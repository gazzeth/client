
import { createStore } from "redux";
import rootReducers from "@entrypoint/presenters/web/reducers/allReducers";

const store = createStore(
    rootReducers,
);

export default store;
