import React from "react";
import cover from "../static/blog-img-4-jpg.png";
import btn from "../static/next_btn.svg";

function NewsAndArticles() {
  return (
    <div
      className="d-flex flex-column align-items-center section"
      style={{ margin: "4rem 0", width: "100vw" }}
    >
      <div className="small" data-aos="fade-down">
        NEWS & ARTICLES
      </div>
      <h1
        className="heading-blue resp-w100"
        data-aos="fade-down"
        style={{ width: "30%", textAlign: "center", marginTop: 0 }}
      >
        Stay updated with our latest posts
      </h1>
      <div
        className="news-items d-flex flex-wrap"
        style={{ justifyContent: "space-evenly" }}
      >
        <div className="news-item" data-aos="fade-right">
          <div style={{ position: "relative" }}>
            <img
              src={cover}
              style={{ width: "100%" }}
            />
            <div
              className="date"
              style={{
                position: "absolute",
                background: "#939598",
                bottom: 0,
                right: "0%",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "25.6px",
                letterSpacing: "3.85px",
                padding: "5px 20px",
                color: "white",
              }}
            >
              22. 02. 2021.
            </div>
          </div>
          <div
            className="small"
            style={{ marginBottom: "0", marginTop: "1rem" }}
          >
            Sally Forrest / Festivals
          </div>
          <h3 className="heading-blue" style={{ lineHeight: "30px" }}>
            There is nothing new with your old posting
          </h3>
          <div className="gray-text resp-w90per">
            Risus quis varius quam quisque id diam vel quam elementum. Vulputate
            mi sit amet mauris commodo quis imperdiet.
          </div>
          <button className="circle_btn">
            <img src={btn} />
          </button>
        </div>
        <div className="news-item" data-aos="fade-up">
          <div style={{ position: "relative" }}>
            <img src={cover} style={{ width: "100%" }} />
            <div
              className="date"
              style={{
                position: "absolute",
                background: "#939598",
                bottom: 0,
                right: "0%",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "25.6px",
                letterSpacing: "3.85px",
                padding: "5px 20px",
                color: "white",
              }}
            >
              22. 02. 2021.
            </div>
          </div>
          <div
            className="small"
            style={{ marginBottom: "0", marginTop: "1rem" }}
          >
            Sally Forrest / Festivals
          </div>
          <h3 className="heading-blue" style={{ lineHeight: "30px" }}>
            There is nothing new with your old posting
          </h3>
          <div className="gray-text resp-w90per">
            Risus quis varius quam quisque id diam vel quam elementum. Vulputate
            mi sit amet mauris commodo quis imperdiet.
          </div>
          <button className="circle_btn">
            <img src={btn} />
          </button>
        </div>
        <div className="news-item" data-aos="fade-left">
          <div style={{ position: "relative" }}>
            <img src={cover} style={{ width: "100%" }} />
            <div
              className="date"
              style={{
                position: "absolute",
                background: "#939598",
                bottom: 0,
                right: "0%",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "25.6px",
                letterSpacing: "3.85px",
                padding: "5px 20px",
                color: "white",
              }}
            >
              22. 02. 2021.
            </div>
          </div>
          <div
            className="small"
            style={{ marginBottom: "0", marginTop: "1rem" }}
          >
            Sally Forrest / Festivals
          </div>
          <h3 className="heading-blue" style={{ lineHeight: "30px" }}>
            There is nothing new with your old posting
          </h3>
          <div className="gray-text resp-w90per">
            Risus quis varius quam quisque id diam vel quam elementum. Vulputate
            mi sit amet mauris commodo quis imperdiet.
          </div>
          <button className="circle_btn">
            <img src={btn} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsAndArticles;
