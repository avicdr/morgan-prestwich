import React from "react";
import rightArrow from "../../static/right_arrow.svg";
import image1 from "../../static/story_1.png";

function Section1() {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-evenly section story-professional-section flex-direction-column-reverse"
        style={{
          height: "550px",
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
            justifyContent: "center",
            marginBottom: "3rem",
          }}
          className="resp-w100 mtop-2"
        >
          <div className="small" data-aos="fade-down">
            The Best Professional team
          </div>
          <h1 className="heading-blue" data-aos="fade-down">
            Founded in 2010, Morgan Prestwich
          </h1>
          <div>
            <div className="text-grey resp-w90p">
              Founded in 2010, Morgan Prestwich is Europe’s leading independent
              life sciences executive search and advisory firm. We specialise in
              partnering with fast growing Biotechnology organisations, focused
              in Speciality, Rare and Orphan Diseases, and help build their
              operations throughout Europe and the US. <br/> Our global headquarters
              are located in the UK, adjacent to the two major London airports,
              with offices in Cork, Ireland and Boston, US.
            </div>
            {/* <button
              className="blue-btn mt-4 gray-btn"
              style={{
                background: "none",
                color: "black",
                fontWeight: "bold",
                border: "1px solid #939598",
              }}
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
        <div className="right">
          <img
            src={image1}
            style={{ zIndex: "-100", position: "relative", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
