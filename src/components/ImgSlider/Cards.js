import React, { useState } from "react";
import { BsInfoSquareFill } from "react-icons/bs";

const Cards = ({ moreInfo, property: { picture, index, hovered } }) => {
  // const [moreInfo, setInfo] = useState("")

  return (
    <div className="Cards">
      <div className="card-box">
        <img key={index} src={picture} alt="asda" />
      </div>

      <a href="/" className="card-icon">
        <BsInfoSquareFill color="rgb(1, 77, 121)" size="30px" />
      </a>
    </div>
  );
};

export default Cards;
