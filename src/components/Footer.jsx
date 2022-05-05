import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as LogoSVG } from "../assets/logo.svg";
import { ReactComponent as GitHubSVG } from "../assets/icons/github.svg";
import { ReactComponent as TwitterSVG } from "../assets/icons/twitter.svg";
import { ReactComponent as LinkedinSVG } from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="cw">
        <div className="logo">
          <LogoSVG />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="contact">CONTACT ME</NavLink>
            </li>
          </ul>
        </nav>
        <div className="social">
          <GitHubSVG />
          <TwitterSVG />
          <LinkedinSVG />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
