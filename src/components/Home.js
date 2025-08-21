import React, { useEffect, useState } from "react";
import bgVideo from "../static/morgan_4_6.mp4";
import Navbar from "./Navbar";
import TextCarousel from "./TextCarousel";
import Thrives from "./Thrives";
import imgLeft from "../static/mask-group-23-jpg.png";
import imgRight from "../static/h-1-img-gallery-img-3-jpg.png";
import Expertise from "./Expertise";
import Diversity from "./Diversity";
import LifeSciences from "./LifeSciences";
import OurTeam from "./OurTeam";
import TestimonialTextCarousel from "./TestimonialTextCarousel";
import Latest from "./Latest";
import NewEvent from "./NewEvent";
import NewsAndArticles from "./NewsAndArticles";
import More from "./More";
import Footer from "./Footer";
import back from "../static/prevBtn.svg";
import next from "../static/nextBtn.svg";

function Home() {

  const [tickerText, setTickerText] = useState("");

  useEffect(() => {
    fetch('https://endpts.com/channel/rd/', { mode: 'cors' })
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const titleElements = doc.querySelectorAll('.epn_result_list.epn_4_column .epn_white_box.epn_item h3 a');
        
        const titles = Array.from(titleElements)
          .map(titleElement => `• ${titleElement.textContent}`)
          .join(' ');

        setTickerText(titles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);



  useEffect(() => {
    const prevBtns = document.querySelectorAll(".carousel-control-prev");
    const nextBtns = document.querySelectorAll(".carousel-control-next");

    for (let index = 0; index < prevBtns.length; index++) {
      prevBtns[index].innerHTML =
        "<span><img src='" +
        back +
        "' style='filter:invert(1) brightness(5)'/></span>";
    }

    for (let index = 0; index < nextBtns.length; index++) {
      nextBtns[index].innerHTML =
        "<span><img src='" +
        next +
        "' style='filter:invert(1) brightness(5)'/></span>";
    }

    const prevImg = prevBtns[1]?.querySelector("img");
    if (prevImg) {
      prevImg.classList.add("second");
    }

    const nextImg = nextBtns[1]?.querySelector("img");
    if (nextImg) {
      nextImg.classList.add("second");
    }
  }, []);

  return (
    <>
      <div className="home">
        <video src={bgVideo} id="background-video" autoPlay muted loop />
        <Navbar />
        <TextCarousel />
      </div>
      <div className="ticker-wrap m-0">
        <div className="ticker">
          <div className="ticker_item">
          {tickerText}
          </div>
        </div>
      </div>
      <Thrives />
      <div
        className="images d-flex justify-content-between"
        style={{ width: "100vw" }}
      >
        <img
          src={imgLeft}
          className="imageSectionImg leftImg"
          data-aos="fade-right"
        />
        <img
          src={imgRight}
          className="imageSectionImg rightImg"
          data-aos="fade-left"
        />
      </div>
      <Expertise />
      <LifeSciences />
      <TestimonialTextCarousel />
      <OurTeam />
      <Latest />
      <NewEvent />
      <Diversity />
      <NewsAndArticles />
      <More />
      <Footer />
    </>
  );
}

export default Home;
