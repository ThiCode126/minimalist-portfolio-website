import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as LogoSVG } from "../assets/logo.svg";
import { ReactComponent as GitHubSVG } from "../assets/icons/github.svg";
import { ReactComponent as TwitterSVG } from "../assets/icons/twitter.svg";
import { ReactComponent as LinkedinSVG } from "../assets/icons/linkedin.svg";
import { redirectTo } from "../utils/utils";

const Footer = () => {
  return (
    <>
      <section id="interested">
        <div className="cw">
          <h2>Interested in doing a project together?</h2>
          <div className="btn secondary" onClick={() => redirectTo("/contact")}>
            Contact Me
          </div>
        </div>
      </section>
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
    </>
  );
};

export default Footer;
