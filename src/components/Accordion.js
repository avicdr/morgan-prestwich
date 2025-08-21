import React, { useState, useRef } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const panelRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
    setPanelHeight(isActive ? 0 : panelRef.current.scrollHeight);
  };

  return (
    <div style={{width: "80%"}} className="accordion-item">
      <div
        className="d-flex justify-content-between align-items-center py-2"
        style={{ width: "100%" }}
        data-aos="fade-up-left"
      >
        <div
          style={{
            width: "80%",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
          }}
        >
          {title}
        </div>
        <button
          className={`accordion ${isActive ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <img
            src={
              isActive
                ? "https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                : "https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
            }
            style={{ height: "20px", filter: "invert(1)" }}
          />
        </button>
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
        <p>{content}</p>
      </div>
      <hr
        style={{ borderTop: "1px solid white", width: "97%" }}
        data-aos="fade-up-left"
      />
    </div>
  );
};

export default Accordion;
