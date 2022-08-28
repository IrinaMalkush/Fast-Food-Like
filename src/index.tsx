import "./index.css";

import { FontsStyles, GlobalStyle, styledTheme } from "like-ui-components";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { store } from "./core/redux/Store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={styledTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <GlobalStyle />
        <FontsStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

serviceWorker.unregister();
