import React from "react";
import "./SideDrawer.css";
import {
  BsThreeDotsVertical,
  BsFillGridFill,
  BsFillHouseFill,
  BsChevronDoubleLeft,
  BsInfoCircleFill,
  BsFillBackspaceFill,
} from "react-icons/bs";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      <button className="go-back" onClick={props.click}>
        <BsFillBackspaceFill size="22px"></BsFillBackspaceFill>

        <hr />
      </button>
      <div className="side-nav">
        <h3>প্রান্তিক - P r a n t i k</h3>
        <ul>
          <li>
            <a href="/home">
              {" "}
              <BsFillHouseFill className="icon" />
              Home
            </a>
          </li>

          <li>
            <a href="/info">
              <BsInfoCircleFill className="icon" /> Info
            </a>
          </li>
          <li>
            <a href="/about">
              <BsFillGridFill className="icon" /> About
            </a>
          </li>
          <li>
            <a href="/more">
              <BsThreeDotsVertical className="icon" size="15px" /> More
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
