import React from "react";
import { Carousel } from "react-bootstrap";
// import "./TextCarousel.css"; // Import the CSS file

function TextCarousel() {
  let texts = [
    { textMain: "Great Science deserves", textSubordinary: "Great People" },
    { textMain: "Successfully building Teams globally", textSubordinary: "since 2010" },
    { textMain: "An enduring commitment to Inclusivity", textSubordinary: "and Diversity" },
    { textMain: "Great Science deserves", textSubordinary: "Great People" },
  ];
  return (
    <div style={{position: 'absolute', top: "50%", left: "0", marginLeft: "1rem"}}>
      <Carousel className="custom-carousel" data-aos="fade-left">
      {texts.map((text, index) => {
        return (
          <Carousel.Item key={index}>
            <div className="carousel-caption">
              <h1
                className="carousel-text-home animate__animated animate__slideOutLeft"
                style={{ fontSize: "3rem", fontFamily: "Poppins" }}
              >
                {text.textMain} <br /> {text.textSubordinary}
              </h1>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
    </div>
  );
}

export default TextCarousel;
