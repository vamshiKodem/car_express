import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";
import { useNavBar } from "./useNavBar";

export const NavBar = () => {
  const { navContent, onLogoClick, onInvalidNavClick } = useNavBar();

  return (
    <nav>
      <div className="nav-section">
        <button className="nav-button" onClick={onLogoClick}>
          {navContent.logoContent}
        </button>
        <div className="nav-middle-section">
          <button className="nav-button" onClick={onLogoClick}>
            {navContent.home}
          </button>
          <button className="nav-button" onClick={onInvalidNavClick}>
            {navContent.services}
          </button>
        </div>

        <button className="nav-button" onClick={onInvalidNavClick}>
          {navContent.gallery}
        </button>
        <button className="nav-button" onClick={onInvalidNavClick}>
          {navContent.contactUs}
        </button>
      </div>
    </nav>
  );
};
