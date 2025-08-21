import React from "react";
import bullet from "../../static/bullet.svg";
import candidate1 from "../../static/candidate_1.png";
import candidate2 from "../../static/candidate_2.png";
import candidate3 from "../../static/candidate_3.png";
import candidate4 from "../../static/candidate_4.png";
import candidate5 from "../../static/candidate_5.jpg";

function CandidatesSec1() {
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="w-100 d-flex justify-content-center my-5">
          <div
            className="d-flex flex-column align-items-center new-event-img-container resp-w90p"
            style={{ marginTop: "3rem", width: "50%", textAlign: "center" }}
          >
            <div className="d-flex">
              <h4 className="heading-black resp-fZ-1_7r">Future</h4>
              <img src={bullet} />
              <h4 className="heading-black resp-fZ-1_7r">Community</h4>
              <img src={bullet} />
              <h4 className="heading-black resp-fZ-1_7r">Honor</h4>
            </div>
            <div
              style={{
                width: "100%",
                color: "#575757",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "25.6px",
              }}
            >
              Candidates are pivotal to the success of Morgan Prestwich. If you are an experienced Bio-Pharmaceutical professional then please get in touch, we are here to help, advise and ultimately improve people’s careers.
            </div>
          </div>
        </div>
        <div className="w-100 resp-h-fit-content" style={{ height: "max-content" }}>
          <div
            className="image-section d-flex resp-w100p justify-content-center"
            style={{ position: "relative", height: "100%" }}
          >
            <div className="d-flex resp-d-none align-items-center my-4 py-4 mx-3">
              <img src={candidate1} />
            </div>
            <div className="d-flex flex-column align-items-center">
            <img src={candidate2} className="mx-3 new-event-img-container" />
            <img src={candidate5} className="mx-3 new-event-img-container my-3" style={{height: "490px", width: "440px"}}/>
            </div>
            <div className="d-flex resp-d-none flex-column justify-content-center">
              <img src={candidate3} />
              <img src={candidate4} className="my-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidatesSec1;
