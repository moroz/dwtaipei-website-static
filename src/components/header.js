import Logo from "./logo";
import { Link } from "gatsby";
import React, { useState } from "react";

const MenuItem = ({ href, children, onClick }) => (
  <Link className="header__menu__item" to={href} onClick={onClick}>
    {children}
  </Link>
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
        <Link className="header__sitename is-hidden-desktop" to="/">
          Diamond Way Taiwan
        </Link>
        <div className="header__menu" id="offcanvas">
          <MenuItem href="/" onClick={handleToggle}>
            Home
          </MenuItem>
          <MenuItem href="/meditation" onClick={handleToggle}>
            Meditation
          </MenuItem>
          <MenuItem href="/faq" onClick={handleToggle}>
            Travel
          </MenuItem>
        </div>
        <HamburgerToggle toggled={hamburgerState} handleToggle={handleToggle} />
      </div>
    </header>
  );
};
export default Header;
