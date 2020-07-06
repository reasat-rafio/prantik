import React, { useEffect } from "react";
import "./RunningProject.css";
import img from "../../img/2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const RunningProject = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="RunningProject">
      <div data-aos="fade-right" className="RunningProject-box">
        <h1>Our Running Project</h1>
        <div className="RunningProject-box_main">
          <img src={img} alt="asddddddd" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            dignissimos optio recusandae reiciendis alias accusantium modi
            suscipit dolore quas nemo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta facere deleniti doloremque accusantium ea
            totam ipsum reiciendis iusto eius ad ab error, enim temporibus
            quisquam molestiae architecto assumenda perspiciatis est!
          </p>
        </div>
        <div className="button-section">
          <button>Learn More</button>
          <button>Help Us</button>
        </div>
      </div>
    </div>
  );
};

export default RunningProject;
