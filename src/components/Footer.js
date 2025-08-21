import React from "react";
import logo from "../static/logo.png";
import whiteCircle from "../static/white-circle.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: "#0C2742", width: "100vw" }}
      className="page-footer font-small stylish-color-dark pt-4"
    >
      <div className="text-center text-md-left">
        <div className="row d-flex flex-column">
          <div
            className="d-flex align-items-center flex-direction-column"
            style={{
              justifyContent: "space-between",
              width: "90%",
              margin: "auto",
            }}
          >
            <div
              className="text-uppercase font-weight-bold mt-3 mb-4"
              data-aos="fade-right"
            >
              <img src={logo} />
              <h5
                style={{ fontFamily: "Michroma", color: "white" }}
                className="mt-4"
              >
                
                <br />
                
              </h5>
            </div>
            <div className="email-box" data-aos="fade-left">
              <input type="text" className="email_input" placeholder="Email" />
              <button className="circle_btn">
                <img src={whiteCircle} />
              </button>
            </div>
          </div>
          <div
            className="d-flex mt-5 w-100 flex-direction-column"
            style={{
              justifyContent: "space-around",
              width: "100vw !important",
              margin: "auto",
            }}
          >
            <div id="link10" className="mb-4" data-aos="fae-up">
              <h6
                className="text-uppercase font-weight-bold small"
                style={{ margin: 0 }}
              >
                OUR OFFICES
              </h6>
              <hr
                className="deep-purple accent-2 mt-0 d-inline-block mx-auto"
                style={{ width: "70px" }}
              />
              <p>
                <Link
                  to="/contact-us"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  London
                </Link>
              </p>
              <p>
                <Link
                  to="/contact-us"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Dublin
                </Link>
              </p>
              <p>
                <Link
                  to="/contact-us"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Milan
                </Link>
              </p>
              <p>
                <Link
                  to="/contact-us"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Zug
                </Link>
              </p>
              <p>
                <Link
                  to="/contact-us"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Boston
                </Link>
              </p>
            </div>

            <div id="link10" className="mb-4" data-aos="fae-up">
              <h6
                className="text-uppercase font-weight-bold small"
                style={{ margin: 0 }}
              >
                HELP CENTER
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "70px" }}
              />
              <p>
                <a
                  href="#!"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  FAQs
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Call Center
                </a>
              </p>
              <p>
                <Link
                  to="/data-protection-policy"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Data Protection
                </Link>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Blog Posts
                </a>
              </p>
            </div>

            <div id="link10" className="mb-4" data-aos="fae-up">
              <h6
                className="text-uppercase font-weight-bold small"
                style={{ margin: 0 }}
              >
                FOLLOW US
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "70px" }}
              />
              <p>
                <a
                  href="https://www.linkedin.com/company/morgan-prestwich-pharmaceutical-recruitment-ltd"
                  target="_blank"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  FaceBook
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/MorganPrestwich"
                  target="_blank"
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Twitter
                </a>
              </p>
            </div>
            <div className="mb-4 text-white" data-aos="fae-up">
              <h6
                className="text-uppercase font-weight-bold small"
                style={{ margin: 0 }}
              >
                CONTACT
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="mailto:info@morganprestwich.com" className="mail-a">
                  info@morganprestwich.com
                </a>
              </p>
              <p>
                UK: <a href="dailto:+44 (0) 1737 22 66 44" className="hover-yellow">+44 (0) 1737 22 66 44</a>
                <br />
                Ireland: <a href="dailto:+44 (0) 208 144 6778" className="hover-yellow">+44 (0) 208 144 6778</a>
                <br />
                USA: <a href="dailto:+001 857 343 8096" className="hover-yellow">+001 857 343 8096</a>
              </p>
              <p>
                Morgan Prestwich (HQ)
                <br />
                43 Reigate Place London Road,
                <br />
                Reigate Surrey RH2 9PW (UK)
              </p>
            </div>
          </div>
          <hr
            style={{
              borderTop: "1px solid white",
              width: "95%",
              margin: "1rem auto",
            }}
          />
          <div className="copyright">&copy; 2023 All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
