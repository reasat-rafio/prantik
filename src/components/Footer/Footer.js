import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="main">
        <div className="Footer-box">
          <div className="footerBox-1">
            <div>
              <h1>About Us</h1>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Why we work</a>
                </li>
                <li>
                  <a href="">What is our goal</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBox-2">
            <div>
              <h1>Work with us</h1>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Join as Volunteer</a>
                </li>
                <li>
                  <a href="">Take action</a>
                </li>
                <li>
                  <a href="">Join</a>
                </li>
                <li>
                  <a href="">Join</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBox-3">
            <div>
              <h1>Information</h1>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Latest</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Members</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-icon">
          <FaFacebook className="icn" size="80px" />
          <FiMail className="icn" size="100px" />
          <AiFillTwitterCircle className="icn" size="80px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
