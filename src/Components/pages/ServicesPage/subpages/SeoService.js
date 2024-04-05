import React from 'react'
// import { Link } from "react-router-dom";
import ser11 from "../../../../assets/service/undraw_Web_development_0l6v.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const SeoService = () => {
  return (
    <div>
      <Navbar />
      <SecTitle subTitle="Home / Services /SEO Service" title="SEO Service" />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <img src={ser11} alt="" />
          </div>
          <div className="right">
            <h1>SEO Service</h1>
            <p>
              Transform your online presence with our cutting-edge SEO services
              tailored to your unique business needs. Our team of experts will
              work closely with you to develop customized strategies aimed at
              boosting your website's visibility, driving organic traffic, and
              maximizing conversions. With transparent reporting and continuous
              analysis, you'll have full visibility into the performance of your
              SEO campaigns, allowing you to make informed decisions and stay
              ahead of the competition. Stay on top of the latest trends and
              techniques with our team of SEO specialists, ensuring that your
              website remains optimized for success in today's ever-changing
              digital landscape. Partner with us and unlock the full potential
              of your online presence.
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

export default SeoService