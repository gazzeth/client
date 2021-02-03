import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
// import * as serviceWorker from "./serviceWorker";
import Themes from "@entrypoint/presenters/web/themes";
import store from "@entrypoint/presenters/web/store/store";
import App from "@entrypoint/presenters/web/App";
import '@entrypoint/presenters/web/components/Translation/I18next';
import i18n from "i18next";

ReactDOM.render(  
  <Suspense fallback={(<div>{i18n.t("loading")}</div>)}>
    <Provider store={store}>
      <ThemeProvider theme={Themes}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </Suspense>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
