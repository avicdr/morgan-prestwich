import React from "react";
import contactFormRight from "../../static/contactFormRight.png";
import rightArrow from "../../static/right_arrow.svg";

function ContactForm() {
  return (
    <div className="d-flex flex-direction-column-reverse p-relative">
      <div className="left m-0 form-bg">
        <div className="p-5 d-flex flex-column align-items-center">
        <div className="small font-weight-bold">
          STEP IN THE RIGHT DIRECTION
        </div>
        <h1
          className="heading-blue m-0 resp-w100p"
          style={{ color: "black", width: "70%" }}
        >
          Don't be shy, please don't hesitate to say hi
        </h1>
        <div className="contact-form d-flex flex-column resp-w100p">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea rows={10} cols={30} />
        </div>
        <button
          className="blue-btn mt-4 bg-black font-weight-bold"
          data-aos="flip-left"
        >
          Read More{" "}
          <img
            src={rightArrow}
            style={{ height: "25px", width: "32px", marginLeft: "10px" }}
          />
        </button>
        </div>
      </div>
      <div className="right">
        <img src={contactFormRight} />
      </div>
    </div>
  );
}

export default ContactForm;
