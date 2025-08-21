import React from "react";
import map from "../static/uiw_map.svg";
import people from "../static/ion_people-outline.svg";
import business from "../static/mdi_business-outline.svg";
import language from "../static/mdi_language.svg";
import success from "../static/icon-park-outline_list-success.svg";
import diversity from "../static/fluent_diversity-20-filled.svg";

function Latest() {
  return (
    <div className="d-flex flex-column align-items-center section">
      <div style={{ width: "100%", marginLeft: "8rem" }} className="resp-ml-3">
        <div className="small" data-aos="fade-down-right">
          OUR BUSINESS THRIVES
        </div>
        <h1 className="heading-blue resp-w100" data-aos="fade-up-right" style={{width: "40%"}}>
          Latest news coming from the economy world
        </h1>
      <div className="items">
        <div className="item-latest w-30">
          <img src={map} data-aos="fade-right" />
          <h4 className="heading-blue" style={{fontWeight: 500}} data-aos="fade-right">
            27 Countries
          </h4>
          <p
            style={{
              color: "#878787",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24.96px",
            }}
            data-aos="fade-right"
          >
            Morgan Prestwich has coverage globally with an emphasis on the US, 
            Europe and Middle East having made placements in 27 countries so far and counting
          </p>
        </div>
        <div className="item-latest w-30">
          <img src={people} data-aos="fade-down" />
          <h4 className="heading-blue" style={{fontWeight: 500}} data-aos="fade-down">
            25 Head Hunters
          </h4>
          <p
            style={{
              color: "#878787",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24.96px",
            }}
            data-aos="fade-down"
          >
            An experienced, dedicated and highly specialised group of recruiters
            make up our team.
          </p>
        </div>
        <div className="item-latest w-30">
          <img src={business} data-aos="fade-left" />
          <h4 className="heading-blue" style={{fontWeight: 500}} data-aos="fade-left">
            98% Repeat business
          </h4>
          <p
            style={{
              color: "#878787",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24.96px",
            }}
            data-aos="fade-left"
          >
            Our clients choose us time and time again, proving to us that we
            offer something more than other search firms.
          </p>
        </div>
        <div className="item-latest w-30">
          <img src={language} data-aos="fade-right" />
          <h4 className="heading-blue" style={{fontWeight: 500}} data-aos="fade-right">
            13 Languages
          </h4>
          <p
            style={{
              color: "#878787",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24.96px",
            }}
            data-aos="fade-right"
          >
            Spoken fluently amongst our staff spanning several jurisdictions 
            with a focus on continental Europe, Asia and Middle East.
          </p>
        </div>
        <div className="item-latest w-30">
          <img src={success} data-aos="fade-up" />
          <h4 className="heading-blue" style={{fontWeight: 500, lineHeight: "35px"}} data-aos="fade-up">
            100% Retained search success
          </h4>
          <p
            style={{
              color: "#878787",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24.96px",
            }}
            data-aos="fade-up"
          >
            We pride ourselves on having never failed in filling a retained
            project, our 100% placement success is down to our profound
            knowledge
          </p>
        </div>
        <div className="item-latest w-30">
          <img src={diversity} data-aos="fade-left" />
          <h4 className="heading-blue" style={{fontWeight: 500}} data-aos="fade-left">
            Over 60% diversity
          </h4>
          <p
            style={{
              color: "#878787",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24.96px",
            }}
            data-aos="fade-left"
          >
            In 2021 60% of our placements where diverse, a figure we aim to
            improve on for 2022.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Latest;
