import React from "react";
import logoDesktop from "../images/logo-desktop.svg";
import logoTouch from "../images/logo-touch.svg";

export default () => (
  <a href="/" className="header__logo">
    <img
      src={logoDesktop}
      alt="Diamond Way Buddhism Karma Kagyu Lineage Taiwan"
      className="is-hidden-touch"
    ></img>
    <img
      src={logoTouch}
      alt="Diamond Way Buddhism Karma Kagyu Lineage Taiwan"
      className="is-hidden-desktop"
    ></img>
  </a>
);
