import React, { useState } from "react";
import PieChart from "./Graphs/PieChart.js";
import circle from "../static/circle-dark.png";

function LifeSciences() {
  const [title, setTitle] = useState("Life Sciences Expertise");

  const [pieChartData, setPieChartData] = useState([
    {
      label: "Diagnostics",
      color: "#FFFFFF",
      data: 44,
    },
    {
      label: "MedTech",
      color: "#ADADAD",
      data: 20,
    },
    {
      label: "Biotech & Pharmaceutical",
      color: "#828282",
      data: 50,
    },
    {
      label: "Contract Manufacturing & Development Organization (CDMO)",
      color: "#4E4E4E",
      data: 10,
    },
    {
      label: "Contract Research and Consulting",
      color: "#050505",
      data: 5,
    },
  ]);

  const data1 = [
    {
      label: "Diagnostics",
      color: "#FFFFFF",
      data: 44,
    },
    {
      label: "MedTech",
      color: "#ADADAD",
      data: 20,
    },
    {
      label: "Biotech & Pharmaceutical",
      color: "#828282",
      data: 50,
    },
    {
      label: "Contract Manufacturing & Development Organization (CDMO)",
      color: "#4E4E4E",
      data: 10,
    },
    {
      label: "Contract Research and Consulting",
      color: "#050505",
      data: 5,
    },
  ];

  const data2 = [
    {
      label: "Clinical Development",
      color: "#FFFFFF",
      data: 37,
    },
    {
      label: "Commercialisation",
      color: "#ADADAD",
      data: 36,
    },
    {
      label: "Pre-Clinical",
      color: "#828282",
      data: 16,
    },
    {
      label: "Scientific",
      color: "#4E4E4E",
      data: 11,
    },
  ];

  const data3 = [
    {
      label: "USA",
      color: "#FFF",
      data: 60,
    },
    {
      label: "EU",
      color: "#ADADAD",
      data: 30,
    },
    {
      label: "Rest Of The World",
      color: "#828282",
      data: 10,
    },
  ];

  return (
    <div
      className="d-flex align-items-center justify-content-evenly section life-section"
      style={{
        height: "auto",
        backgroundColor: "#0C2742",
        width: "100vw",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "40vw" }} className="resp-w100 mtop-2">
        <div className="small" data-aos="fade-down">
          OUR BUSINESS THRIVING
        </div>
        <h1 className="text-white heading-blue" data-aos="fade-down">
          {title}
        </h1>
        <div>
          <ul className="text-gray">
            {pieChartData &&
              pieChartData.map((item, index) => (
                <li
                  className="d-flex align-items-center"
                  data-aos="fade-right"
                  key={index}
                >
                  {index === 3 ? (
                    <img src={circle} className="mr-3"/>
                  ) : (
                    <div
                      className="mr-3 text-life"
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundColor: item.color,
                        borderRadius: "50%",
                      }}
                    ></div>
                  )}
                  <span>
                    {item.label} {item.data}%
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center my-5">
        <div className="buttons d-flex justify-content-center">
          <button
            className="data-button d-flex align-items-center"
            onClick={() => {
              setTitle("Life Sciences Expertise");
              setPieChartData(data1);
            }}
          >
            <div
              style={{
                width: "40px",
                height: "20px",
                background: "white",
                margin: "0 0.5rem",
              }}
              className="color-box"
            ></div>
            <span
              className="small"
              style={{ marginBottom: "0", color: "white", fontSize: "14px" }}
            >
              {" "}
              Data 1
            </span>
          </button>
          <button
            className="data-button d-flex align-items-center"
            onClick={() => {
              setTitle("Market Focus");
              setPieChartData(data2);
            }}
          >
            <div
              style={{
                width: "40px",
                height: "20px",
                background: "black",
                margin: "0 0.5rem",
              }}
              className="color-box"
            ></div>
            <span
              className="small"
              style={{ marginBottom: "0", color: "white", fontSize: "14px" }}
            >
              {" "}
              Data 2
            </span>
          </button>
          <button
            className="data-button d-flex align-items-center"
            onClick={() => {
              setTitle("Global Reach");
              setPieChartData(data3);
            }}
          >
            <div
              style={{
                width: "40px",
                height: "20px",
                background: "#D4D0CA",
                margin: "0 0.5rem",
              }}
              className="color-box"
            ></div>
            <span
              className="small"
              style={{ marginBottom: "0", color: "white", fontSize: "14px" }}
            >
              {" "}
              Data 3
            </span>
          </button>
          <button
            className="data-button d-flex align-items-center"
            onClick={() => {
              setTitle("Data 4");
              setPieChartData(data3);
            }}
          >
            <div
              style={{
                width: "40px",
                height: "20px",
                background: "#979797",
                margin: "0 0.5rem",
              }}
              className="color-box"
            ></div>
            <span
              className="small"
              style={{ marginBottom: "0", color: "white", fontSize: "14px" }}
            >
              {" "}
              Data 4
            </span>
          </button>
        </div>
        <div
          style={{ width: "20vw" }}
          className="resp-w100 rem3Neg"
          data-aos="fade-up-left"
        >
          {pieChartData && pieChartData.length > 0 && (
            <PieChart
              data={pieChartData.map((item) => item.data)}
              labels={pieChartData.map((item) => item.label)}
              colors={pieChartData.map((item) => item.color)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LifeSciences;
