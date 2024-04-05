import React from 'react'
// import { Link } from "react-router-dom";
import ser5 from "../../../../assets/service/undraw_design_tools_42tf.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const Graphic = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Graphic Designing"
        title="Graphic Designing"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <h1>Graphic Designing</h1>
            <p>
              Revitalize your brand image with our top-notch graphic design
              services. We specialize in creating visually stunning and
              impactful designs that captivate audiences and leave a lasting
              impression. From logos and branding materials to marketing
              collateral and digital assets, our team of skilled designers will
              work closely with you to bring your vision to life. With a keen
              eye for detail and a passion for creativity, we'll craft designs
              that reflect your brand identity and resonate with your target
              audience. Whether you're looking to refresh your brand image or
              create eye-catching marketing materials, we're here to help you
              stand out from the crowd. Partner with us and let's take your
              brand to new heights with exceptional graphic design.
            </p>
          </div>
          <div className="right">
            <img src={ser5} alt="" />
          </div>
        </div>
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Graphic