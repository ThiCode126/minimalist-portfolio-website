import React from "react";
import Interested from "../components/Interested";
import Card from "../components/Portfolio/Card";
import { dataPortfolio } from "../utils/dataPortfolio";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div className="cw">
          {dataPortfolio.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </section>
      <Interested page="portfolio" />
    </>
  );
};

export default Portfolio;
