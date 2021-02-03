
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Error from "@entrypoint/presenters/web/components/Error/Error"; 

export default function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </>
  );
}
