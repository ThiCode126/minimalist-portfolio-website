import React from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useWindowDimensions from "../utils/useWindowDimensions";
import { redirectTo } from "../utils/utils";
import { detailHeroSize, detailPreviewSize } from "../utils/imgSize";
import Interested from "../components/Interested";
import { dataPortfolio } from "../utils/dataPortfolio";

import { ReactComponent as LeftSVG } from "../assets/icons/arrow-left.svg";
import { ReactComponent as RightSVG } from "../assets/icons/arrow-right.svg";

const Details = () => {
  let { id } = useParams();
  const { type } = useWindowDimensions();
  const { title, shortDesc, category, hashtag, background, idBefore, idAfter } =
    dataPortfolio[id];

  return (
    <>
      <section id="detail">
        <div className="cw">
          <LazyLoadImage
            src={`/assets/detail/${type}/image-${title.toLowerCase()}-hero.jpg`}
            alt={title}
            width={detailHeroSize[type].width}
            height={detailHeroSize[type].height}
            className="hero"
          />
          <div className="body">
            <div className="first">
              <h2 className="title">{title}</h2>
              <p className="short-desc">{shortDesc}</p>
              <p className="category">{category}</p>
              <p className="hashtag">{hashtag}</p>
              <div
                className="btn secondary"
                onClick={() => redirectTo("https///thicode.fr")}
              >
                Visit Website
              </div>
            </div>
            <div className="second">
              <h3>Project Background</h3>
              <p className="bg-text">{background}</p>
              <h3>Static Previews</h3>
              <div className="img-preview">
                <LazyLoadImage
                  src={`/assets/detail/${type}/image-${title.toLowerCase()}-preview-1.jpg`}
                  alt={title}
                  width={detailPreviewSize[type].width}
                  height={detailPreviewSize[type].height}
                  className="preview-1"
                />
                <LazyLoadImage
                  src={`/assets/detail/${type}/image-${title.toLowerCase()}-preview-2.jpg`}
                  alt={title}
                  width={detailPreviewSize[type].width}
                  height={detailPreviewSize[type].height}
                  className="preview-2"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <div
              className="previous"
              onClick={() => redirectTo("/portfolio/" + idBefore)}
            >
              <div className="arrow">
                <LeftSVG />
              </div>
              <div>
                <h4>{dataPortfolio[idBefore].title}</h4>
                <span>Previous Project</span>
              </div>
            </div>
            <div
              className="next"
              onClick={() => redirectTo("/portfolio/" + idAfter)}
            >
              <div className="arrow">
                <RightSVG />
              </div>
              <div>
                <h4>{dataPortfolio[idAfter].title}</h4>
                <span>Next Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Interested page="details" />
    </>
  );
};

export default Details;
