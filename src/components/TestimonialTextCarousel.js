import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
// import "./TextCarousel.css"; // Import the CSS file

function TestimonialTextCarousel() {
  let texts = [
    { textMain: "Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet proin nulla aliquet enim."},
    { textMain: "Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet proin nulla aliquet enim."},
    { textMain: "Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet proin nulla aliquet enim."},
    { textMain: "Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet proin nulla aliquet enim."},
  ];

  useEffect(() => {
    const carouselInner = document.querySelectorAll(".carousel-inner")[1];
    if (carouselInner) {
      carouselInner.style.height = "300px";
    }
  
    const prevBtnImages = document.querySelectorAll(".carousel-control-prev img");
    if (prevBtnImages.length >= 2) {
      prevBtnImages[1].style.filter = "invert(100%)";
    }
  
    const nextBtnImages = document.querySelectorAll(".carousel-control-next img");
    if (nextBtnImages.length >= 2) {
      nextBtnImages[1].style.filter = "invert(100%)";
    }
  }, []);
  
  
  return (
    <div style={{ position: "relative", width: "100vw", height: "400px", marginTop: "5rem"}} className="testimonial-carousel">
      <div className="background-qoute">
      <Carousel className="custom-carousel" data-aos="fade-left">
        {texts.map((text, index) => {
          return (
            <Carousel.Item key={index}>
              <div
                className="carousel-caption"
                style={{ textAlign: "center" }}
              >
                <h1
                  className="animate__animated animate__slideOutLeft carousel-blue"
                  style={{ fontSize: "1.875rem" }}
                >
                  {text.textMain}
                </h1>
                <p style={{  color: '#6D6D6D',
  textAlign: 'center',
  fontFamily: 'Poppins',
  fontSize: '1.2rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '21.84px', marginTop: "3rem"}}>Amet Vulpitat, Digital Marketing</p>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
    </div>
  );
}

export default TestimonialTextCarousel;
