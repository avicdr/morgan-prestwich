import React from "react";
import consultant from "../static/noun-consultant-services-3538746 1.svg";
import fundRaise from "../static/noun-fund-raising-5810260 1.svg";
import leadership from "../static/noun-leadership-5424086 1.svg";
import onlineReq from "../static/noun-online-recruitment-4539027 1.svg";
import { Link } from "react-router-dom";

function Expertise() {
  return (
    <div
      className="d-flex flex-column justify-content-center section expertise-section"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        marginBottom: "5rem",
      }}
    >
      <div className="expertise">
        <div style={{ position: "relative" }}>
          <h1
            className="heading-blue p-4 expertise-heading"
            style={{ marginLeft: "4rem", fontSize: "4.094rem" }}
            data-aos="fade-up"
          >
            Expertise
          </h1>
          <hr className="expertise_hr" data-aos="fade-up" />
          <Link className="itemExpertise"  to={"/solutions"}data-aos="fade-up">
            <div className="d-flex align-items-center">
              <img src={onlineReq} />
              <div className="colon">:</div>
              <div className="text-big">Executive Search</div>
            </div>
            <img
              src={"https://img.icons8.com/?size=512&id=355&format=png"}
              style={{ height: "50px", width: "40px", opacity: "0.5" }}
            />
          </Link>
          <hr className="expertise_hr" data-aos="fade-up" />
          <Link className="itemExpertise"  to={"/solutions"}data-aos="fade-up">
            <div className="d-flex align-items-center">
              <img src={leadership} />
              <div className="colon">:</div>
              <div className="text-big">Board Advisory</div>
            </div>
            <img
              src={"https://img.icons8.com/?size=512&id=355&format=png"}
              style={{ height: "50px", width: "40px", opacity: "0.5" }}
            />
          </Link>
          <hr className="expertise_hr" data-aos="fade-up" />
          <Link className="itemExpertise"  to={"/solutions"}data-aos="fade-up">
            <div className="d-flex align-items-center">
              <img src={consultant} />
              <div className="colon">:</div>
              <div className="text-big">Leadership Consulting</div>
            </div>
            <img
              src={"https://img.icons8.com/?size=512&id=355&format=png"}
              style={{ height: "50px", width: "40px", opacity: "0.5" }}
            />
          </Link>
          <hr className="expertise_hr" data-aos="fade-up" />
          <Link className="itemExpertise"  to={"/solutions"}data-aos="fade-up">
            <div className="d-flex align-items-center">
              <img src={fundRaise} />
              <div className="colon">:</div>
              <div className="text-big">Fund Raising</div>
            </div>
            <img
              src={"https://img.icons8.com/?size=512&id=355&format=png"}
              style={{ height: "50px", width: "40px", opacity: "0.5" }}
            />
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}

export default Expertise;
