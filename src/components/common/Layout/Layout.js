import React, { Fragment } from "react";
import { node } from "prop-types";

import Header from "../../Header";
import { Content } from "./styles";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Content>{children}</Content>
    </Fragment>
  );
}

Layout.propTypes = {
  children: node.isRequired // eslint-disable-line
};

export default Layout;
