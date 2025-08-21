import React, { useState } from "react";
import logo from "../static/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);

  const toggleSearchBar = () => {
    setActive(!active);
    const search = document.getElementById("search-icon");
    if (search.style.filter === "invert(1)") {
      search.style.filter = "invert(0)";
    } else {
      search.style.filter = "invert(1)";
    }
  };
  return (
    <div>
      <div className="navbar" data-aos="fade-down">
        <Link to={"/"}>
          <img src={logo} className="logo" />
        </Link>
        <ul>
          <Link to={"/story"}>
            <li>Our Story</li>
          </Link>
          <Link to={"/solutions"}>
            <li>Solutions</li>
          </Link>
          <Link to={"/team"}>
            <li>Team</li>
          </Link>
          <li>Clients</li>
          <Link to={"/candidates"}>
            <li>Candidates</li>
          </Link>
          <Link to={"/insights"}>
            <li>Insights</li>
          </Link>
          <Link to={"/contact-us"}>
            <li>Contact Us</li>
          </Link>
          <li style={{ position: "relative" }}>
            <div className="d-flex" style={{ position: "relative" }}>
              <button
                className="search-button"
                onClick={toggleSearchBar}
                style={{
                  position: "absolute",
                  top: 0,
                  marginTop: "-5px",
                  right: 0,
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                  style={{ height: "30px", filter: "invert(1)" }}
                  id="search-icon"
                />
              </button>
              <div className={`search-container ${active ? "active" : ""}`}>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to={"/"}>
              <img
                src={logo}
                className="logo m-all-0"
                style={{ filter: "invert(1)" }}
              />
            </Link>
            <a href="#">
              <Link to={"/story"}>
                <li>Our Story</li>
              </Link>
            </a>
            <a href="#">
              <li>Solutions</li>
            </a>
            <a href="#">
              <Link to={"/team"}>
                <li>Team</li>
              </Link>
            </a>
            <a href="#">
              <li>Clients</li>
            </a>
            <a href="#">
              <Link to={"/candidates"}>
                <li>Candidates</li>
              </Link>
            </a>
            <Link to={"/insights"}>
              <li>Insights</li>
            </Link>
            <Link to={"/contact-us"}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
