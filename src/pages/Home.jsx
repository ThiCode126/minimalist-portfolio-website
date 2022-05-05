import React from "react";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <section id="home">
      <div className="cw">
        <Hero />
        <About />
      </div>
    </section>
  );
};

export default Home;
