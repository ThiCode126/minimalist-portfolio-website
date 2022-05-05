import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as LogoSVG } from "../assets/logo.svg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  let activeClassName = "active";
  return (
    <header id="header">
      <div className="cw">
        <div className="logo">
          <LogoSVG />
        </div>
        <div
          className={`toggle-menu ${isNavOpen ? "to-closed" : "to-open"}`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="bar bar__1"></span>
          <span className="bar bar__2"></span>
          <span className="bar bar__3"></span>
        </div>
        <nav className={`${isNavOpen ? "open" : "closed"}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                CONTACT ME
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
