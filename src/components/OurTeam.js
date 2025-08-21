import React, { useEffect } from "react";
import BoxCarousel from "./BoxCarousel";
import image1 from "../static/img1.png";
import image2 from "../static/img2.png";
import image3 from "../static/img3.png";
import { Link } from "react-router-dom";

function OurTeam() {
  useEffect(() => {
    document.querySelectorAll(".carousel-inner")[1].style.height = "300px";
  }, []);

  const boxes = [
    {
      img: image1,
      name: "Mark Da Silva",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      img: image2,
      name: "Emily Smith",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      img: image3,
      name: "Sofia Brown",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <div
      className="d-flex align-items-center flex-column section"
      style={{ height: "auto", marginBottom: "5rem" }}
    >
      <div
        className="small"
        style={{
          margin: 0,
          fontSize: "14px",
          textDecoration: "underline",
          color: "#62466B",
          letterSpacing: "1px",
          fontWeight: "bold",
        }}
        data-aos="fade-up"
      >
        <Link to={"/team"} style={{ color: "inherit" }}>
          VIEW OUR TEAM
        </Link>
      </div>
      <h1 className="heading-blue t-center" data-aos="fade-up">
        All the people behind the latest project
      </h1>
      <div data-aos="fade-up" className="our-team">
        Meet Our Exceptional Team: Driving Innovation and Collaboration
      </div>
      <div>
        <BoxCarousel boxes={boxes} />
      </div>
    </div>
  );
}

export default OurTeam;
