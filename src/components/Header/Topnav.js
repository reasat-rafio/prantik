import React, { Component } from "react";
import "./Topnav.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import img from "../../img/prantik_png.png";

class Topnav extends Component {
  componentDidMount() {
    const position = document.querySelector("#nav");
    const bottomPosition = position.getBoundingClientRect();
    window.addEventListener("scroll", () => {
      const fix = document.querySelector(".fix");
      if (window.scrollY >= bottomPosition.bottom) {
        document.body.style.paddingTop = position.offsetHeight + "px";
        fix.classList.add("active");
      } else {
        fix.classList.remove("active");
        document.body.style.paddingTop = 0;
      }
    });
  }
  render(props) {
    return (
      <div>
        <div className="fix">
          <ul id="nav">
            <div className="toolbar_navigator">
              <div>
                <DrawerToggleButton
                  drawerToggleClickHandler={this.props.drawerToggleClickHandler}
                />
              </div>
            </div>
            <div className="toolbar_navigation">
              <img src={img} alt="" />
              <li className="logo">P r a n t i k</li>
              <div className="navigation">
                <li className="option">
                  <a href="/home"> Home</a>
                </li>
                <li className="option">
                  <a href="/info"> Info</a>
                </li>
                <li className="option">
                  <a href="/about"> About</a>
                </li>
                <li className="option">
                  <a href="/more"> More</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Topnav;
