import React from 'react'

import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import ser3 from "../../../../assets/service/undraw_Business_plan_re_0v81.png";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const Finance = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Finance and Auditing"
        title="Finance and Auditing"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <h1>Finance and Auditing</h1>
            <p>
              Streamline your financial operations and ensure regulatory
              compliance with our comprehensive finance and auditing services.
              Our team of seasoned professionals combines expertise with
              meticulous attention to detail to deliver tailored solutions that
              meet your business needs. From financial analysis and reporting to
              internal controls and risk management, we provide a full spectrum
              of services to support your financial health and growth.
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

export default Finance