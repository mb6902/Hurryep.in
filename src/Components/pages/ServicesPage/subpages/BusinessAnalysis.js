import React from 'react'

import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import ser3 from "../../../../assets/service/undraw_Business_plan_re_0v81.png";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";

const BusinessAnalysis = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Business Analysis & Strategies"
        title="Business Analysis & Strategies"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <h1>Business Analysis & Strategies</h1>
            <p>
              Forge valuable partnerships and collaborations to drive mutual
              success with our business collaborator services. We facilitate
              connections with like-minded businesses, startups, and industry
              experts to explore synergies, share resources, and unlock new
              opportunities for innovation and growth.
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

export default BusinessAnalysis