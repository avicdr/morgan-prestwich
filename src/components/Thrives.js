import React from "react";
import network from "../static/network.png";
import rightArrow from "../static/right_arrow.svg";

function Thrives() {
  return (
    <div
      className="d-flex align-items-center section p-relative"
      style={{ width: "100vw", height: "85vh" }}
    >
      <div className="left thrives-left">
        <div className="small" data-aos="fade-up-right">
          OUR BUSINESS THRIVES
        </div>
        <h1
          className="heading-blue-main"
          data-aos="fade-down-right"
          style={{ width: "90%" }}
        >
          Building teams that change the world with the help of our consultants
        </h1>
        <div
          data-aos="zoom-in"
          style={{
            width: "90%",
            color: "#575757",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "25.6px",
          }}
        >
          Our team will develop a practical strategy as well as manage and
          coordinate your project campaign. We guarantee excellent results.
        </div>
        <button className="blue-btn mt-4" data-aos="flip-left">
          View More{" "}
          <img
            src={rightArrow}
            style={{ height: "25px", width: "32px", marginLeft: "10px" }}
          />
        </button>
      </div>
      <div className="right p-absolute" data-aos="zoom-in">
        <img
          src={network}
          className="p-absolute resp-network"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Thrives;
