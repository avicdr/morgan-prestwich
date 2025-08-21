import React from "react";
import be from "../../static/be.svg";
import facebook from "../../static/fb_black.svg";
import twitter from "../../static/twitter.svg";
import { HashLink } from "react-router-hash-link";

function TeamCard({
  img,
  mainImg,
  name,
  role,
  setData,
  description,
  portfolio,
  expertise,
  mail,
  contact,
}) {
  return (
    <HashLink smooth to="/team#preview">
      <div
        className="mb-4 team-card"
        onClick={() => {
          setData({
            img: mainImg,
            name: name,
            role: role,
            description: description,
            portfolio: portfolio,
            expertise: expertise,
            contact: contact,
            mail: mail,
          });
          localStorage.setItem(
            "member-data",
            JSON.stringify({
              img: mainImg,
              name: name,
              role: role,
              description: description,
              portfolio: portfolio,
              expertise: expertise,
              contact: contact,
              mail: mail,
            })
          );
        }}
      >
        <img src={img} />
        <div className="text-small mt-3">{role}</div>
        <div className="member-name">{name}</div>
        <div className="d-flex">
          <img
            src={be}
            style={{ filter: "grayscale(100%)", margin: "1.5rem 0" }}
            className="mr-3"
          />
          <img
            src={facebook}
            style={{ filter: "grayscale(100%)", margin: "1.5rem 0" }}
            className="mr-3"
          />
          <img
            src={twitter}
            style={{ filter: "grayscale(100%)", margin: "1.5rem 0" }}
            className="mr-3"
          />
        </div>
      </div>
    </HashLink>
  );
}

export default TeamCard;
