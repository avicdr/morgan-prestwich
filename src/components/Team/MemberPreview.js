import React, { useEffect, useState } from "react";
import phone from "../../static/phone.svg"
import mail from "../../static/mail.svg"

function MemberPreview({ data }) {
  const item = localStorage.getItem("member-data");
  const [finalData, setFinalData] = useState({});
  useEffect(() => {
    if (data.img === null) {
      setFinalData(JSON.parse(item));
    } else {
      setFinalData(data);
    }

    const clearTimeout = () => {
      setTimeout(() => {
        localStorage.removeItem("member-data");
      }, 10000);
    };

    return () => {
      clearTimeout();
    };
  }, [data]);

  return (
    <div
      className="mx-auto d-flex mb-5 flex-direction-column"
      id="preview"
      style={{
        width: "90%",
        visibility: finalData?.img !== null ? "visible" : "hidden",
      }}
    >
      <div
        style={{ width: "37vw" }}
        className="d-flex flex-column justify-content-center resp-w100p"
      >
        <img
          src={finalData?.img}
          style={{ height: "100%", width: "35vw" }}
          data-aos="zoom-in"
          className="resp-w100p"
        />
      </div>
      <hr
        className="member-preview-hr"
        style={{
          borderLeft: "1px solid #F0F0F0",
          height: "auto",
          margin: "0 1rem",
        }}
      />
      <div
        className="right"
        style={{ display: finalData?.name ? "block" : "none" }}
      >
        <div className="member-preview-name" data-aos="fade-left">
          {finalData?.name}
        </div>
        <span
          className="member-position"
          style={{ padding: "0.7rem 0", borderBottom: "1px solid black" }}
          data-aos="fade-left"
        >
          {finalData?.role}
        </span>
        <div className="member-description my-5" data-aos="fade-left">
          {finalData?.description !== undefined
            ? finalData?.description.split("\n\n").map((line, index) => (
                <div key={index}>
                  <p>{line}</p>
                </div>
              ))
            : finalData?.description}
        </div>
        <div className="portfolio my-5">
          <h5
            className="my-3"
            style={{ fontFamily: "Kanit" }}
            data-aos="fade-left"
          >
            Expertise :
          </h5>
          <div className="d-flex">
            {finalData?.expertise !== undefined? finalData.expertise.map((element) => {
              // console.log(element); // Log each element to the console
              return (
                <div className="bubble" data-aos="fade-up">
                  {element}
                </div>
              );
            }) : ""}
          </div>
        </div>
        <div className="portfolio my-5">
          <h5
            className="my-3"
            style={{ fontFamily: "Kanit" }}
            data-aos="fade-left"
          >
            Contact :
          </h5>
          <div className="d-flex">
            <div className="d-flex mr-4">
              <img src={phone} className="mr-2"/>
              <div className="contact-details"><a href={`tel:${finalData?.contact}`}>{finalData?.contact}</a></div>
            </div>
            <div className="d-flex mx-3">
              <img src={mail} className="mr-2"/>
              <div className="contact-details"><a href={`mailto:${finalData?.mail}`}>{finalData?.mail}</a></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberPreview;
