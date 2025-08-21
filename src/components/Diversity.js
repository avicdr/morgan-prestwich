import React from "react";
import rightArrow from "../static/right_arrow.svg";
import BarGraph from "./Graphs/BarGraph";

function Diversity() {
  return (
    <div
      className="d-flex align-items-center justify-content-around section flex-direction-column-reverse"
      style={{ height: "550px" }}
    >
      <div style={{ width: "40vw", margin: "0 4rem" }} className="resp-w95">
        <BarGraph />
      </div>
      <div style={{width: "40vw"}} className="resp-w100 thrives-left">
        <div className="small" data-aos="fade-left">
          Diversity As Our Corporate Values
        </div>
        <h1 className="heading-blue" data-aos="flip-left">
          Contributing to important global initiatives
        </h1>
        <div data-aos="zoom-in" className="gray-text mr-2r">
          Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh
          nisl id venenatis a condimentum. Libero justo laoreet sitamet. Nisl
          nisi scelerisque eu ultrices vitae. Dolor sit amet consectetur
          adipiscing elit sit pellentesque. Phasellus egestas tellus rutrum
          tellus pellentesque eu. Sagittis purus sit amet volutpat.
        </div>
        <button
          className="blue-btn mt-4 gray-btn"
          style={{
            background: "none",
            color: "#939598",
            border: "1px solid #939598",
          }}
          data-aos="fade-left"
        >
          View More{" "}
          <img
            src={rightArrow}
            style={{
              height: "25px",
              width: "32px",
              marginLeft: "10px",
              filter: "invert(1)",
              opacity: "0.5",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Diversity;
