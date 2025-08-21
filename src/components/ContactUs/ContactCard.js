import React from "react";

function ContactCard({name, contact, address}) {
  return (
    <div style={{width: "50%"}} className="resp-w100p resp-mx-1" data-aos="zoom-out-up">
      <div style={{ margin: "2rem 0rem" }}>
        <div className="small m-0 font-weight-bold">
          STEP IN THE RIGHT DIRECTION
        </div>
        <h1 className="heading-blue m-0 resp-w90p" style={{ color: "black" }}>
          {name}
        </h1>
        <div
          className="my-2"
          style={{ color: "black", fontWeight: 500, fontFamily: "Poppins" }}
        >
          info@morganprestwich.com
        </div>
        <div
          className="my-2"
          style={{
            width: "80%",
            color: "#878787",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "25.6px",
          }}
        >
          {address}
        </div>
        <div
          className="my-2"
          style={{
            width: "90%",
            color: "#575757",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            // fontWeight: 400,
            lineHeight: "25.6px",
            fontWeight: "bold",
          }}
        >
          {contact}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
