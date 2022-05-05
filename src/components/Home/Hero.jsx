import React from "react";
import heroDesktop from "../../assets/homepage/desktop/image-homepage-hero.jpg";
import heroTablet from "../../assets/homepage/tablet/image-homepage-hero.jpg";
import heroMobile from "../../assets/homepage/mobile/image-homepage-hero.jpg";
import useWindowDimensions from "../../utils/useWindowDimensions";

import { ReactComponent as ArrowDownSVG } from "../../assets/icons/down-arrows.svg";

const Hero = () => {
  const { type } = useWindowDimensions();

  const scrollToAbout = () => {
    let e = document.getElementById("home__about");
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <section id="home__hero">
      {type === "mobile" && (
        <img src={heroMobile} alt="Hero" width="311" height="271" />
      )}
      {type === "tablet" && (
        <img src={heroTablet} alt="Hero" width="688" height="600" />
      )}
      {type === "desktop" && (
        <img src={heroDesktop} alt="Hero" width="1110" height="600" />
      )}
      <div className="text">
        <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
        <div className="btn about" onClick={scrollToAbout}>
          <div className="arrow">{<ArrowDownSVG />}</div>
          <span>About Me</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
