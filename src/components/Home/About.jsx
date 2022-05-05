import React from "react";
import profileDesktop from "../../assets/homepage/desktop/image-homepage-profile.jpg";
import profileTablet from "../../assets/homepage/tablet/image-homepage-profile.jpg";
import profileMobile from "../../assets/homepage/mobile/image-homepage-profile.jpg";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { redirectTo } from "../../utils/utils";

const About = () => {
  const { type } = useWindowDimensions();

  return (
    <>
      <section id="home__about">
        {type === "mobile" && (
          <img src={profileMobile} alt="Hero" width="311" height="346" />
        )}
        {type === "tablet" && (
          <img src={profileTablet} alt="Hero" width="280" height="600" />
        )}
        {type === "desktop" && (
          <img src={profileDesktop} alt="Hero" width="540" height="600" />
        )}

        <div className="text">
          <h2>About Me</h2>
          <p>
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <div
            className="btn secondary"
            onClick={() => redirectTo("/portfolio")}
          >
            Go to portfolio
          </div>
        </div>
      </section>
      <section id="home__interested">
        <h2>Interested in doing a project together?</h2>

        <div className="btn secondary" onClick={() => redirectTo("/contact")}>
          Contact Me
        </div>
      </section>
    </>
  );
};

export default About;
