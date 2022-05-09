import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { redirectTo } from "../../utils/utils";
import { homeAboutSize } from "../../utils/imgSize";

const About = () => {
  const { type } = useWindowDimensions();

  return (
    <section id="home__about">
      <LazyLoadImage
        src={`./assets/homepage/${type}/image-homepage-profile.jpg`}
        alt="image-homepage-profile"
        width={homeAboutSize[type].width}
        height={homeAboutSize[type].height}
      />

      <div className="text">
        <h2>About Me</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <div className="btn secondary" onClick={() => redirectTo("/portfolio")}>
          Go to portfolio
        </div>
      </div>
    </section>
  );
};

export default About;
