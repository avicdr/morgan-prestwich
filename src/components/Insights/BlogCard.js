import React from "react";
import cover from "../../static/blog-img-main.png";
import phnCover from "../../static/blog-img-4-jpg.png";
import btn from "../../static/next_btn.svg";
import { Link } from "react-router-dom";

function BlogCard({ path, heading, content, date, mainContent, isBlog }) {
  const screenWidth = window.innerWidth;

  return (
    <div>
      <div
        className="news-item resp-w100p"
        data-aos="fade-left"
        style={{ width: "90%", margin: "auto" }}
      >
        <div style={{ position: "relative" }}>
          {screenWidth < 440 ? (
            <img src={phnCover} style={{ width: "100%" }} />
          ) : (
            <img src={cover} style={{ width: "100%" }} />
          )}
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
            {date}
          </div>
        </div>
        <div className="small" style={{ marginBottom: "0", marginTop: "1rem" }}>
          {path}
        </div>
        <h3 className="heading-blue" style={{ lineHeight: "30px" }}>
          {heading}
        </h3>
        {isBlog ? "" : <div className="gray-text resp-w90per">{content}</div>}
        {isBlog ? (
          ""
        ) : (
          <Link to="/insights/blog">
            <button
              className="circle_btn"
              onClick={() => {
                localStorage.setItem(
                  "blog-data",
                  JSON.stringify({ path, heading, content, mainContent, date })
                );
              }}
            >
              <img src={btn} />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default BlogCard;
