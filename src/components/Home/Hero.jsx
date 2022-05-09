import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { homeHeroSize } from "../../utils/imgSize";

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
      <LazyLoadImage
        src={`./assets/homepage/${type}/image-homepage-hero.jpg`}
        alt="image-homepage-hero"
        width={homeHeroSize[type].width}
        height={homeHeroSize[type].height}
      />
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
