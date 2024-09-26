import React from "react";
import "../styles/Header.css";
import { ReactComponent as MenuIcon } from "../assets/menuIcon.svg";

const Header = () => {
  return (
    <>
      <header className="header-bar">
        <nav>
          <MenuIcon className="menu-icon" />
        </nav>
        <h1 className="header-title">Big Picture</h1>
      </header>
      <div className="header-shadow"></div>
    </>
  );
};

export default Header;