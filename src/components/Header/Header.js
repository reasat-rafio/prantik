import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./Header.css";
import { useState } from "react";
import Topnav from "./Topnav";
import { useEffect } from "react";

const Header = (props) => {
  const [state, setState] = useState(true);
  const [time, setTime] = useState(4000);
  let interval;

  useEffect(() => {
    if (state) {
      interval = setInterval(nextBtn, time);
    }
  }, []);

  // nextBtn

  const nextBtn = () => {
    const allImg = document.querySelectorAll(".slide");
    const active = document.querySelector(".active");
    active.classList.remove("active");
    if (active.nextElementSibling) {
      active.nextElementSibling.classList.add("active");
    } else {
      allImg[0].classList.add("active");
    }
    if (state) {
      clearInterval(interval);
      interval = setInterval(nextBtn, time);
    }
  };

  // prevBtn

  const prevBtn = () => {
    const allImg = document.querySelectorAll(".slide");
    const active = document.querySelector(".active");
    active.classList.remove("active");
    if (active.previousElementSibling) {
      active.previousElementSibling.classList.add("active");
    } else {
      allImg[allImg.length - 1].classList.add("active");
    }
  };

  // autoChange

  return (
    <div className="mainHeader">
      <div className="slider">
        <div className="slide active">
          <h2 className="text">
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            amet.
          </h2>
          <p className="p" href="#">
            more
          </p>
        </div>
        <div className="slide ">
          <h2 className="text">
            2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            laborum!
          </h2>
          <p className="p" href="#">
            more
          </p>
        </div>
        <p className="slide ">
          <h2 className="text">
            3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
            iste!
          </h2>
          <p className="p" href="#">
            more
          </p>
        </p>
      </div>

      <button className="btn" id="prevBtn">
        <GoArrowLeft
          onClick={(e) => prevBtn()}
          size="25px"
          color="rgb(30, 126, 251)"
        />
      </button>
      <button className="btn" id="nextBtn">
        <GoArrowRight
          onClick={(e) => nextBtn()}
          size="25px"
          color="rgb(30, 126, 251)"
        />
      </button>
    </div>
  );
};

export default Header;
