import React from 'react'
// import { Link } from "react-router-dom";
import ser6 from "../../../../assets/service/undraw_Mobile_marketing_re_p77p.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const DigitalMarketing = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Digital Marketing"
        title="Digital Marketing"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <img src={ser6} alt="" />
          </div>
          <div className="right">
            <h1>Digital Marketing</h1>
            <p>
              Elevate your online presence and reach your target audience
              effectively through our comprehensive digital marketing
              strategies. From search engine optimization (SEO) and
              pay-per-click (PPC) advertising to email marketing and content
              creation, we devise tailored campaigns to boost your brand
              visibility, engagement, and conversion rates across various
              digital channels.
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

export default DigitalMarketing