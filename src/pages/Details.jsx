import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  return (
    <section id="details">
      <div className="cw">
        <h1>Details {id}</h1>
      </div>
    </section>
  );
};

export default Details;