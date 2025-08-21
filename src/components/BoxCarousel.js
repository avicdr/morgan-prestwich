import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import facebook from "../static/facebook.svg";
import linkedin from "../static/linkedin.svg";
import twitter from "../static/twitter.svg";
import right from "../static/right.svg";
import left from "../static/left.svg";

const BoxCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  const handleNext = () => {
    const totalBoxes = props.boxes.length;
    const nextIndex = (activeIndex + 1) % totalBoxes;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const totalBoxes = props.boxes.length;
    const prevIndex = (activeIndex - 1 + totalBoxes) % totalBoxes;
    setActiveIndex(prevIndex);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 400);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { boxes } = props;
  let activeBoxes;
  if (isMobile) {
    activeBoxes = [boxes[activeIndex]];
  } else {
    activeBoxes = [
      boxes[(activeIndex + boxes.length - 1) % boxes.length],
      boxes[activeIndex],
      boxes[(activeIndex + 1) % boxes.length],
    ];
  }

  return (
    <div className="box-carousel-container section">
      <div className="box-carousel d-flex" {...handlers}>
        {activeBoxes.map((box, index) => (
          <div
            className={`box${index === isMobile ? 0 : 1 ? " active-box" : ""}`}
            key={index}
            data-aos="fade-left"
          >
            <img src={box.img} alt={box.name} />
            <h1 className="heading-blue">{box.name}</h1>
            <div className="gray-text">{box.description}</div>
            <div className="social d-flex my-3">
              <img
                src={facebook}
                alt="Facebook"
                style={{ height: "20px", padding: "0 4px" }}
              />
              <img
                src={twitter}
                alt="Twitter"
                style={{ height: "20px", padding: "0 4px" }}
              />
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ height: "20px", padding: "0 4px" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev-btn" onClick={handlePrev}>
          <img src={left} alt="Previous" />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <img src={right} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default BoxCarousel;
