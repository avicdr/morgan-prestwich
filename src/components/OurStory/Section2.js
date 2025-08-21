import React from "react";
import rightArrow from "../../static/right_arrow.svg";
import image2 from "../../static/story_2.png";

function Section2() {
  return (
    <div>
      {/* {"SECTION 2"} */}
      <div
        className="d-flex align-items-center justify-content-evenly section story-professional-section flex-direction-column"
        style={{
          height: "550px",
          background: "none",
          width: "100vw",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        {" "}
        <div className="right">
          <img
            src={image2}
            style={{ zIndex: "-100", position: "relative", width: "100%" }}
          />
        </div>
        <div
          style={{
            width: "40vw",
            marginRight: "5rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            textAlign: "right",
            marginBottom: "3rem",
          }}
          className="resp-w80p resp-mr-0 mtop-2"
        >
          <div className="small" data-aos="fade-down">
            Flexible Approach
          </div>
          <h1 className="heading-blue" data-aos="fade-down">
          Team of highly experienced Head Hunters
          </h1>
          <div>
            <div className="text-grey" data-aos="fade-up">
              We are a team of highly experienced Head Hunters within the Life
              Sciences industry and pride ourselves on the quality of our
              delivery and flexible approach to working with clients.
              <br />
              We believe that great science deserves great teams, and only in
              this way do the fruits of your innovation get to the patients in
              most need.
              <br />
              We work with the best because we are the best.
            </div>
            {/* <button
              className="blue-btn mt-4 gray-btn"
              style={{
                background: "none",
                color: "black",
                fontWeight: "bold",
                border: "1px solid #939598",
              }}
              data-aos="fade-left"
            >
              Read More{" "}
              <img
                src={rightArrow}
                style={{
                  height: "25px",
                  width: "32px",
                  marginLeft: "10px",
                  filter: "invert(1)",
                  // opacity: "0.5",
                }}
              />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
