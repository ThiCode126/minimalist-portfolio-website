import React from "react";
import { useParams } from "react-router-dom";
import Interested from "../components/Interested";

const Details = () => {
  let { id } = useParams();
  return (
    <>
      <section id="details">
        <div className="cw">
          <h1>Details {id}</h1>
        </div>
      </section>
      <Interested page="details" />
    </>
  );
};

export default Details;
