import React from "react";
import mainImg from "../static/h-1-newrev-img-1-1.png";
import whiteCircle from "../static/white-circle.svg";
import phnCover from "../static/phn.png"

function More() {
  const screenWidth = window.innerWidth;
  return (
    <div
     className="section resp-mb0"
      style={{ height: "750px", position: "relative", marginBottom: "3rem" }}
    >
      <img
      className="more-img"
        src={screenWidth < 400 ? phnCover : mainImg}
        style={{ height: "750px", width: "100vw" }}
        data-aos="zoom-in"
      />
      <div
      className="view-more"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "25%",
          display: "flex",
          padding: "20px 38px 20px 20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          background: "#B5B5B5",
        }}
        data-aos="fade-left"
      >
        <div
          style={{
            color: "black",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          View More
        </div>
        <div className="text-white" style={{ textAlign: "end" }}>
          Working with us means Partnership over the long-term here
        </div>
        <button className="circle_btn">
          <img src={whiteCircle} />
        </button>
      </div>
    </div>
  );
}

export default More;
