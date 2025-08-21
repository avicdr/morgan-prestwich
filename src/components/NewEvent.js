import React from "react";
import planet from "../static/planet-builder-poster-1-8-1.png";
import Accordion from "./Accordion";

function NewEvent() {
  return (
    <div
      className="d-flex align-items-center vh-100 section"
      style={{ backgroundColor: "#001E3A", padding: "2rem", width: "100vw" }}
    >
      <div className="left new-event-img-container" data-aos="fade-up-right" style={{ margin: "0 5rem", height: "inherit" }}>
        <img src={planet} style={{ height: "100%", padding: "3.5rem 1rem" }} className="new-event-img"/>
      </div>
      <div className="right">
        <Accordion
          title="Event News"
          content="Augue neque gravida in fermentum et sollicitudin. Rhoncus dolor purus non enim praesent elementum facilisis. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Praesent elementum facilisis."
        />
        <Accordion
          title="Management"
          content="Augue neque gravida in fermentum et sollicitudin. Rhoncus dolor purus non enim praesent elementum facilisis. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Praesent elementum facilisis."
        />
        <Accordion
          title="Operation research"
          content="Augue neque gravida in fermentum et sollicitudin. Rhoncus dolor purus non enim praesent elementum facilisis. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Praesent elementum facilisis."
        />
        <Accordion
          title="Data Analysis"
          content="Augue neque gravida in fermentum et sollicitudin. Rhoncus dolor purus non enim praesent elementum facilisis. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Praesent elementum facilisis."
        />
      </div>
    </div>
  );
}

export default NewEvent;
