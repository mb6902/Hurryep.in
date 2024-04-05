import React from 'react'
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import ser3 from "../../../../assets/service/undraw_Business_plan_re_0v81.png";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const Legal = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Legal Assistance"
        title="Legal Assistance"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <h1>Legal Assistance</h1>
            <p>
              Elevate your brand's online presence and engagement with our
              expert social media marketing services. We specialize in crafting
              targeted and impactful campaigns tailored to your unique business
              objectives. From strategic content creation to community
              management and analytics, our team of social media experts will
              guide you through every step of the process. Whether you're
              looking to increase brand awareness, drive website traffic, or
              boost conversions, we'll develop a customized strategy to help you
              achieve your goals.
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

export default Legal