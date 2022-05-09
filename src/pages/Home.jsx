import React from "react";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Interested from "../components/Interested";

const Home = () => {
  return (
    <section id="home">
      <div className="cw">
        <Hero />
        <About />
        <Interested page="home" />
      </div>
    </section>
  );
};

export default Home;
