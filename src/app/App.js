import React, { Fragment } from "react";
import { Provider } from "redux-zero/react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Routes from "../components/Routes";
import { Router } from "react-router-dom";
import Modal from "../components/common/Modal";
import { withI18n } from "../utils/i18n";
import history from "../services/history";
import { rem } from "../styles/tools";
import Footer from "../components/Footer";
import store from "../utils/store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider
          theme={{
            space: [0, rem(5), rem(10), rem(15), rem(20)],
            breakpoints: [rem(767), rem(992), rem(1199)]
          }}
        >
          <Fragment>
            <Routes />
            <Footer />
            <Modal />
          </Fragment>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
export default withI18n(App);
