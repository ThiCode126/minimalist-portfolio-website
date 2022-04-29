import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeClassName = "active";
  return (
    <header id="header">
      <div className="cw">
        <nav>
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
