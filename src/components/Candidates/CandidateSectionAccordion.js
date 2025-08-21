import React, { useState, useRef } from "react";
import accordionIcon from "../../static/accordion_icon.svg";
import { HashLink } from "react-router-hash-link";

const CandidateSectionAccordion = ({ index, title, content, roles }) => {
  const [isActive, setIsActive] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const panelRef = useRef(null);

  const toggleCandidateSectionAccordion = () => {
    setIsActive(!isActive);
    setPanelHeight(isActive ? 0 : panelRef.current.scrollHeight);
  };

  return (
    <div
      style={{ width: "100%" }}
      id="title"
      className="CandidateSectionAccordion-item"
    >
      <hr
        style={{ borderTop: "1px solid white", width: "100%" }}
        data-aos="fade-up-left"
      />
      <div className="d-flex align-items-baseline justify-content-between">
        <div className="index resp-mr-1">
          <div data-aos="fade-up-left">{index}</div>
        </div>
        <div
          className="d-flex justify-content-between align-items-center py-2"
          style={{ width: "90%" }}
          data-aos="fade-up-left"
        >
          {" "}
          <div
            style={{
              color: "#FFF",
              fontFamily: "Kanit",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "54px",
              width: "50%",
            }}
            className="resp-fZ-1_7r hiring-name resp-w100p"
          >
            <HashLink smooth to={`/solutions#${title}`}>
              {title}
            </HashLink>
          </div>
          <HashLink smooth to={`/solutions#${title}`}>
            <div className="index resp-d-none" data-aos="zoom-in">
              ({roles} Open Roles)
            </div>
          </HashLink>
          <button
            className={`accordion ${isActive ? "active" : ""}`}
            onClick={toggleCandidateSectionAccordion}
          >
            <img
              src={accordionIcon}
              style={{ height: "15px", transform: "rotate(180deg)" }}
            />
          </button>
        </div>
      </div>
      <div
        className="panel"
        ref={panelRef}
        style={{
          height: panelHeight,
          transition: "height 0.4s",
          visibility: isActive ? "visible" : "hidden",
        }}
        data-aos="fade-up-left"
      >
        <p>Please send your CV to info@morganprestwich.com and one of the team will be in touch.</p>
      </div>
    </div>
  );
};

export default CandidateSectionAccordion;
