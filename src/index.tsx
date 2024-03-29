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

import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(
    provider,
    typeof provider.chainId === 'number'
      ? provider.chainId
      : typeof provider.chainId === 'string'
        ? parseInt(provider.chainId)
        : 'any'
  )
  library.pollingInterval = 15000
  return library
}

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

ReactDOM.render(
  <Suspense fallback={(<div>{i18n.t("loading")}</div>)}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeProvider theme={Themes}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </Suspense>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
