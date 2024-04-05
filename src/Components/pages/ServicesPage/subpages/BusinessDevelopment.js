import React from 'react'
// import { Link } from "react-router-dom";
import ser3 from "../../../../assets/service/undraw_Business_plan_re_0v81.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const BusinessDevelopment = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Business Development"
        title="Business Development"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <h1>Business Development</h1>
            <p>
              Accelerate your business growth with our strategic business
              development services. We provide comprehensive analysis, market
              research, and strategic planning to identify new opportunities,
              expand your customer base, and maximize revenue streams. Our
              experienced team works closely with you to develop sustainable
              growth strategies aligned with your business objectives.
            </p>
          </div>
          <div className="right">
            <img src={ser3} alt="" />
          </div>
        </div>
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default BusinessDevelopment