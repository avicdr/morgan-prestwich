import React from "react";
import CandidateSectionAccordion from "./CandidateSectionAccordion";

function CandidatesSec2() {
  return (
    <div
      style={{
        backgroundColor: "#0C2742",
        width: "100vw",
        justifyContent: "space-evenly",
        padding: "4rem",
        margin: "2rem 0",
      }}
      className="resp-p-1r"
    >
      <h1
        style={{
          color: "#FFF",
          fontFamily: "Kanit",
          fontSize: "60px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "60px",
          margin: "2rem 0",
        }}
        className="resp-fZ-40px"
      >
        We’re Currently <br /> hiring
      </h1>
      <div className="accordions">
        <CandidateSectionAccordion index="01" title="Advisory" roles="02" />
        <CandidateSectionAccordion
          index="02"
          title="Board, C-suite, Leadership"
          roles="07"
        />
        <CandidateSectionAccordion
          index="03"
          title="Commercialization"
          roles="15"
        />
        <CandidateSectionAccordion
          index="04"
          title="Medical Affairs"
          roles="03"
        />
        <CandidateSectionAccordion
          index="05"
          title="Clinical Development"
          roles="09"
        />
        <CandidateSectionAccordion
          index="06"
          title="Technical Operations"
          roles="09"
        />
        <CandidateSectionAccordion
          index="07"
          title="Digital Health, Artificial Intelligence & MachineLearning"
          roles="09"
        />
        <CandidateSectionAccordion
          index="08"
          title="Manufacturing and Distribution"
          roles="09"
        />
        <CandidateSectionAccordion
          index="09"
          title="Medical Technology"
          roles="09"
        />
        <hr
          style={{ borderTop: "1px solid white", width: "100%" }}
          data-aos="fade-up-left"
        />
      </div>
    </div>
  );
}

export default CandidatesSec2;
