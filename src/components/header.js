import { Link } from "gatsby";
import logo from "../images/logo-desktop.svg";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="header">
    <img
      src={logo}
      alt="Diamond Way Buddhism Karma Kagyu Lineage Taiwan"
      className="header__logo"
    ></img>
  </header>
);

export default Header;
