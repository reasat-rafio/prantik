import React, { useEffect } from "react";
import { FaUsers, FaHandsHelping } from "react-icons/fa";
import { GiIceSpellCast, GiThreeFriends } from "react-icons/gi";
import "./Intorduction.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Introduction">
      <div className="Introduction-box">
        <div data-aos="fade-right" className="box first-box">
          <FaUsers size="100px" />

          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            earum ut maxime eius dignissimos?
          </p>
          <button>READ OUR STORY</button>
        </div>

        <div data-aos="flip-left" className="box second-box">
          <GiIceSpellCast size="100px" />

          <h3>What We Do</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            earum ut maxime eius dignissimos?
          </p>
          <button>BROWSE THE ISSUES</button>
        </div>

        <div data-aos="zoom-in" className="box third-box">
          <FaHandsHelping size="100px" />

          <h3>Get Involved</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            earum ut maxime eius dignissimos?
          </p>
          <button>TAKE ACTION</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
