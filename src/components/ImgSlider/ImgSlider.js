import React, { Component } from "react";
import data from "./Data/Data";
import "./ImgSlider.css";
import Cards from "./Cards";
import { GrNext, GrPrevious } from "react-icons/gr";

class ImgSlider extends Component {
  state = {
    properties: data.properties,
    property: data.properties[0],
  };

  nextImg = () => {
    const newIndx = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndx],
    });
  };

  prevImg = () => {
    const prevIndx = this.state.property.index - 1;
    this.setState({
      property: data.properties[prevIndx],
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="ImgSlider">
        <h1>Our Project</h1>
        <button
          className="next"
          disabled={property.index === properties.length - 1}
          onClick={() => this.nextImg()}
        >
          <GrNext />
        </button>
        <button
          className="prev"
          disabled={property.index === 0}
          onClick={() => this.prevImg()}
        >
          <GrPrevious />
        </button>

        <div className="cards-slider">
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${
                property.index * (100 / properties.length)
              }%)`,
            }}
          >
            {properties.map((property) => (
              <Cards
                // onMouseEnter={handleHover}
                // onMouseLeave={handleHover}
                key={property._id}
                property={property}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ImgSlider;
