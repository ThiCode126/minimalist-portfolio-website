import React from "react";
import Card from "../components/Portfolio/Card";
import { dataPortfolio } from "../utils/dataPortfolio";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="cw">
        {dataPortfolio.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
