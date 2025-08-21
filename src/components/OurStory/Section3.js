import React from "react";
import rightArrow from "../../static/right_arrow.svg";
import image3 from "../../static/story_3.png";
import PercentageBar from "./PercentageBar";

function Section3() {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-evenly section story-professional-section mb-3 flex-direction-column-reverse"
        style={{
          height: "75vh",
          background: "none",
          width: "100vw",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "40vw",
            marginLeft: "3rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "flex-end",
            marginBottom: "3rem",
          }}
          className="resp-w80p ml-resp-0 mtop-2"
        >
          <div className="small" data-aos="fade-down">
            Our Business
          </div>
          <h1 className="heading-blue resp-fZ-1_7r" data-aos="fade-down">
            We excel at the following:
          </h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column mb-4 mx-3">
              <div className="d-flex justify-content-between">
                <h5 className="heading-blue resp-fZ-1_7r mx-0 d-listItem my-1" data-aos="fade-right">
                  Ad-hoc Executive and Leadership retained search projects
                </h5>
                {/* <h5 className="heading-blue resp-fZ-1_7r m-0">77%</h5> */}
              </div>
              {/* <PercentageBar percentage="77" /> */}
              <div className="d-flex justify-content-between">
                <h5 className="heading-blue resp-fZ-1_7r mx-0 d-listItem my-1" data-aos="fade-right">
                  Entire team or company builds
                </h5>
                {/* <h5 className="heading-blue resp-fZ-1_7r m-0">92%</h5> */}
              </div>
              {/* <PercentageBar percentage="92" /> */}
              <div className="d-flex justify-content-between">
                <h5 className="heading-blue resp-fZ-1_7r mx-0 d-listItem my-1" data-aos="fade-right">
                  {" "}
                  Advisory on go to market strategy including headcount,
                  phasing, salaries etc (please look at our expertise page to
                  find out more)
                </h5>
                {/* <h5 className="heading-blue resp-fZ-1_7r m-0">77%</h5> */}
              </div>
              {/* <PercentageBar percentage="77" /> */}
            </div>
          </div>
          {/* <button
            className="blue-btn mt-4 bg-black font-weight-bold"
            data-aos="flip-left"
          >
            Read More{" "}
            <img
              src={rightArrow}
              style={{ height: "25px", width: "32px", marginLeft: "10px" }}
            />
          </button> */}
        </div>
        <div className="right">
          <img
            src={image3}
            style={{ zIndex: "-100", position: "relative", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
