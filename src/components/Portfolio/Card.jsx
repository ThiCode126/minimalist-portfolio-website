import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { redirectTo } from "../../utils/utils";
import { cardPortfolioSize } from "../../utils/imgSize";

const Card = ({ item }) => {
  const { type } = useWindowDimensions();
  return (
    <div id={`card-${item.id}`} className="card">
      <LazyLoadImage
        src={`./assets/portfolio/${type}/image-portfolio-${item.title}.jpg`}
        alt={item.title}
        width={cardPortfolioSize[type].width}
        height={cardPortfolioSize[type].height}
      />
      <div className="body">
        <h2>{item.title}</h2>
        <p>{item.shortDesc}</p>

        <div
          className="btn secondary"
          onClick={() => redirectTo("/portfolio/" + item.id)}
        >
          View Project
        </div>
      </div>
    </div>
  );
};

export default Card;
