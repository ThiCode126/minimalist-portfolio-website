import React from "react";
import { redirectTo } from "../utils/utils";

const Interested = ({ page }) => {
  return (
    <>
      <section id="interested" className={page}>
        <div className="cw">
          <h2>Interested in doing a project together?</h2>
          <div className="btn secondary" onClick={() => redirectTo("/contact")}>
            Contact Me
          </div>
        </div>
      </section>
    </>
  );
};

export default Interested;
