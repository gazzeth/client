
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "@entrypoint/presenters/web/components/Error/Error";
import withLayout from "@entrypoint/presenters/web/components/Layout/withLayout";
import NewsList from "@entrypoint/presenters/web/components/NewsList/NewsList";

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withLayout(NewsList)} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  );
}
