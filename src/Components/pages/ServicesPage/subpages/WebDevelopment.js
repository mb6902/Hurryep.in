import React from 'react'
// import { Link } from "react-router-dom";
import ser2 from "../../../../assets/service/undraw_building_websites_i78t.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from "../../../Contact/Contact";
import Title from "../../../Title/Title";
const WebDevelopment = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Web Development"
        title="Web Development"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <img src={ser2} alt="" />
          </div>
          <div className="right">
            <h1>Web Development</h1>
            <p>
              Elevate your online presence with our comprehensive web
              development solutions tailored to your business needs. Our team of
              skilled developers combines creativity with technical expertise to
              deliver stunning, user-friendly websites that captivate audiences
              and drive results. From intuitive UI/UX design to robust backend
              development, we handle every aspect of the development process
              with precision and attention to detail. Whether you're a small
              business looking to establish an online presence or a large
              corporation in need of a complex web application, we have the
              skills and experience to bring your vision to life. With a focus
              on responsiveness, scalability, and security, we ensure that your
              website not only looks great but also performs flawlessly across
              all devices and platforms. Partner with us and take your online
              presence to new heights.
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

export default WebDevelopment