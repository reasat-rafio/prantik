import React, { useEffect } from "react";
import "./OurProject.css";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/20200501_063922.jpg";
import img4 from "../../img/20200501_072209 (1).jpg";
import img5 from "../../img/3.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Aos from "aos";
import "aos/dist/aos.css";

const OurProject = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="card-box">
      <h1>OUR PROJECT</h1>
      <div className="container-fluid d-flex justify-content-center ">
        <div className="row">
          <div data-aos="zoom-in-down" className="col-md-3 col-sm-1">
            <div className="card text-center shadow">
              <div className="overflow">
                <img className="card-img-top" src={img1} alt="" />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus minima distinctio placeat dicta quibusdam maiores
                  quae iure ea alias eligendi?
                </p>
                <a href="/" className="btn btn-outline-info">
                  GO Anyhere{" "}
                </a>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-down" className="col-md-3  col-sm-1">
            <div className="card text-center shadow">
              <div className="overflow">
                <img className="card-img-top" src={img4} alt="" />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus minima distinctio placeat dicta quibusdam maiores
                  quae iure ea alias eligendi?
                </p>
                <a href="/" className="btn btn-outline-info">
                  GO Anyhere{" "}
                </a>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-down" className="col-md-3  col-sm-1">
            <div className="card text-center shadow">
              <div className="overflow">
                <img className="card-img-top" src={img5} alt="" />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus minima distinctio placeat dicta quibusdam maiores
                  quae iure ea alias eligendi?
                </p>
                <a href="/" className="btn btn-outline-info">
                  GO Anyhere{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
