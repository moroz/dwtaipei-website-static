import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "../css/site.sass";

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
