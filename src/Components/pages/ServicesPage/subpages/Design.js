import React from 'react'
// import { Link } from "react-router-dom";
import ser4 from "../../../../assets/service/undraw_mobile_prototyping_grmd.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const Design = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / UI UX Design"
        title="UI UX Design"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <img src={ser4} alt="" />
          </div>
          <div className="right">
            <h1>UI/UX Designing</h1>
            <p>
              Transform your digital experience with our expert UI/UX design
              services. We specialize in creating intuitive and visually
              stunning interfaces that engage users and elevate your brand. Our
              team of designers combines creativity with strategic thinking to
              craft user-centric designs that drive conversions and enhance user
              satisfaction. From wireframing to prototyping, we guide you
              through every step of the design process, ensuring that your
              vision is brought to life with precision and attention to detail.
              Whether you're launching a new product or revamping an existing
              platform, we're committed to delivering designs that not only look
              great but also deliver exceptional usability and functionality.
              Partner with us and unlock the full potential of your digital
              presence.
            </p>
          </div>
        </div>
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Design