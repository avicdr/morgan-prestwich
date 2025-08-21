import React, { useState, useRef } from "react";
import TeamCard from "../Team/TeamCard";
import team1 from "../../static/team_1.png";
import team2 from "../../static/team_2.png";
import team3 from "../../static/team_3.png";
import team4 from "../../static/team_4.png";
import mainImage from "../../static/main_team.png"

const SolutionAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const panelRef = useRef(null);

  const toggleSolutionAccordion = () => {
    setIsActive(!isActive);
    setPanelHeight(isActive ? 0 : panelRef.current.scrollHeight);
  };

  const contentLines = content.split("\n");

  const [data, setData] = useState(null)

  return (
    <div style={{ width: "80%" }} id={title} className="SolutionAccordion-item mx-auto">
      <div
        className="d-flex justify-content-between align-items-center py-2"
        style={{ width: "100%" }}
        data-aos="fade-up-left"
      >
        <div
        className="resp-fZ-1_2r"
          style={{
            width: "80%",
            color: "black",
            fontFamily: "Poppins",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "34px",
          }}
        >
          {title}
        </div>
        <button
          className={`accordion ${
            isActive ? "active" : ""
          } d-flex align-items-center`}
          style={{
            color: "#484848",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "43.92px",
          }}
          onClick={toggleSolutionAccordion}
        >
          {" "}
          <div className="mx-4">Know more</div>
          <img
            src={
              isActive
                ? "https://www.svgrepo.com/download/93813/up-arrow.svg"
                : "https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
            }
            style={{ height: "20px", filter: "grayscale(100%)" }}
            alt="Toggle"
          />
        </button>
      </div>
      <div
        className="panel color-g"
        ref={panelRef}
        style={{
          height: panelHeight,
          transition: "height 0.4s",
          visibility: isActive ? "visible" : "hidden",
        }}
        data-aos="fade-up-left"
      >
        <div>
          {contentLines.map((line, index) => (
            <div key={index}>
              <p>{line}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <h6 className="text-black">Speak to a member of our team</h6>
          <div className="d-flex flex-direction-column">
          <TeamCard
        img={team1}
        mainImg={mainImage}
        name={"Hellen Harison"}
        role={"Account Manager"}
        description={`Jassica Oliver is known for her ability to take a creative brief and run with it,
coming back with fresh ideas and a perfectly built design file every time. From
digital design to long-format layouts, she blends beautiful and intuitive with
each project she touches. She also happens to be the queen of deadline-
crushing, all while maintaining a can-do, Zen attitude that keeps the whole
Statement team centered.\n\nWhen he’s not building strong alliances with other creatives, project managers
and stakeholders alike, you’ll find him giving voice to client strategies with
fresh, compelling concepts and delightfully clever messaging.`}
        setData={setData}
        expertise={["Advisory", "Board, C-suite, Leadership"]}
        contact={"+44 (0) 1737 22 66 44"}
        mail={"greg.bell@morganprestwich.com"}
      />
      <TeamCard
        img={team2}
        mainImg={mainImage}
        name={"Cole Thompson"}
        role={"Developer"}
        description={`Jassica Oliver is known for her ability to take a creative brief and run with it,
coming back with fresh ideas and a perfectly built design file every time. From
digital design to long-format layouts, she blends beautiful and intuitive with
each project she touches. She also happens to be the queen of deadline-
crushing, all while maintaining a can-do, Zen attitude that keeps the whole
Statement team centered.\n\nWhen he’s not building strong alliances with other creatives, project managers
and stakeholders alike, you’ll find him giving voice to client strategies with
fresh, compelling concepts and delightfully clever messaging.`}
        setData={setData}
        expertise={["Advisory", "Board, C-suite, Leadership"]}
        contact={"+44 (0) 1737 22 66 44"}
        mail={"greg.bell@morganprestwich.com"}
      />
      <TeamCard
        img={team3}
        mainImg={mainImage}
        name={"Hellen Harison"}
        role={"Account Manager"}
        description={`Jassica Oliver is known for her ability to take a creative brief and run with it,
coming back with fresh ideas and a perfectly built design file every time. From
digital design to long-format layouts, she blends beautiful and intuitive with
each project she touches. She also happens to be the queen of deadline-
crushing, all while maintaining a can-do, Zen attitude that keeps the whole
Statement team centered.\n\nWhen he’s not building strong alliances with other creatives, project managers
and stakeholders alike, you’ll find him giving voice to client strategies with
fresh, compelling concepts and delightfully clever messaging.`}
        setData={setData}
        expertise={["Advisory", "Board, C-suite, Leadership"]}
        contact={"+44 (0) 1737 22 66 44"}
        mail={"greg.bell@morganprestwich.com"}
      />
      <TeamCard
        img={team4}
        mainImg={mainImage}
        name={"Jim Olsen"}
        role={"Ux Designer"}
        description={`Jassica Oliver is known for her ability to take a creative brief and run with it,
coming back with fresh ideas and a perfectly built design file every time. From
digital design to long-format layouts, she blends beautiful and intuitive with
each project she touches. She also happens to be the queen of deadline-
crushing, all while maintaining a can-do, Zen attitude that keeps the whole
Statement team centered.\n\nWhen he’s not building strong alliances with other creatives, project managers
and stakeholders alike, you’ll find him giving voice to client strategies with
fresh, compelling concepts and delightfully clever messaging.`}
        setData={setData}
        expertise={["Advisory", "Board, C-suite, Leadership"]}
        contact={"+44 (0) 1737 22 66 44"}
        mail={"greg.bell@morganprestwich.com"}
      />
          </div>
        </div>
      </div>
      <hr
        style={{ borderTop: "1px solid black", width: "100%" }}
        data-aos="fade-up-left"
      />
    </div>
  );
};

export default SolutionAccordion;
