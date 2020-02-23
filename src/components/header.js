import { Link } from "gatsby";
import logo from "../images/logo-desktop.svg";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="header">
    <a href="/" className="header__logo">
      <img
        src={logo}
        alt="Diamond Way Buddhism Karma Kagyu Lineage Taiwan"
      ></img>
    </a>
    <div className="header__menu" id="offcanvas">
      <a className="header__menu__item" href="/">
        Homepage
      </a>
      <a className="header__menu__item" href="/faq">
        Travel
      </a>
    </div>
  </header>
);

export default Header;
