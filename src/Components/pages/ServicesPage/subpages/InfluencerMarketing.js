import React from 'react'
// import { Link } from "react-router-dom";
import ser7 from "../../../../assets/service/undraw_Social_influencer_re_beim.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const InfluencerMarketing = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services /Influencer Marketing"
        title="Influencer Marketing"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <h1>Influencer Marketing</h1>
            <p>
              Amplify your brand's reach and engagement with our expert
              influencer marketing services. We specialize in connecting brands
              with top influencers to create authentic and impactful campaigns
              that resonate with your target audience. Our team of influencer
              marketing experts will work closely with you to identify the
              perfect influencers for your brand, ensuring that their values
              align with yours and their audience matches your target
              demographic. From strategy development to campaign execution and
              measurement, we'll handle every aspect of your influencer
              marketing campaign with precision and professionalism. Whether
              you're looking to increase brand awareness, drive traffic to your
              website, or boost sales, we'll help you harness the power of
              influencer marketing to achieve your business goals. Partner with
              us and let's create buzzworthy campaigns that leave a lasting
              impression on your audience.
            </p>
          </div>
          <div className="right">
            <img src={ser7} alt="" />
          </div>
        </div>
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default InfluencerMarketing