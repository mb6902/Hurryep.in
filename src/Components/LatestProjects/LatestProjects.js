import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tech1 from "../../assets/deploy.jpg"
import tech2 from "../../assets/design.avif"
import tech3 from "../../assets/develop.jpg"
import tech4 from "../../assets/afli.png"
import tech5 from "../../assets/awareness.png"
import tech6 from "../../assets/email-marketing.png"


const LatestProjects = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={tech1} alt="" width="100" height="100" />
        </div>
        <div>
          <img src={tech2} alt="" width="100" height="100" />
        </div>
        <div>
          <img src={tech3} alt="" width="100" height="100" />
        </div>
        <div>
          <img src={tech4} alt="" width="100" height="100" />
        </div>
        <div>
          <img src={tech5} alt="" width="100" height="100" />
        </div>
        <div>
          <img src={tech6} alt="" width="100" height="100" />
        </div>
      </Slider>
    </div>
  );
};

export default LatestProjects;
