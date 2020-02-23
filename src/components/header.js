import Logo from "./logo";
import React, { useState } from "react";

const MenuItem = ({ href, children }) => (
  <a className="header__menu__item" href={href}>
    {children}
  </a>
);

const HamburgerToggle = ({ toggled, handleToggle }) => (
  <div id="hamburgerToggle">
    <input type="checkbox" onChange={handleToggle} value={toggled} />
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const Header = ({ siteTitle }) => {
  const [hamburgerState, setHamburgerState] = useState(false);

  const handleToggle = () => {
    setHamburgerState(!hamburgerState);
  };

  return (
    <header className={hamburgerState ? "header header--expanded" : "header"}>
      <div className="header__inner">
        <Logo />
        <a className="header__sitename is-hidden-desktop" href="/">
          Diamond Way Taiwan
        </a>
        <div className="header__menu" id="offcanvas">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/meditation">Meditation</MenuItem>
          <MenuItem href="/faq">Travel</MenuItem>
        </div>
        <HamburgerToggle toggled={hamburgerState} handleToggle={handleToggle} />
      </div>
    </header>
  );
};
export default Header;
