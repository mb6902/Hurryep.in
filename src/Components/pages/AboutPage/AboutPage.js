import React from 'react'
// import about_img2 from "../../../assets/about.jpg";
import Navbar from '../../navbar/Navbar';
import SecTitle from '../../SecTitle/SecTitle';
import "../AboutPage/AboutPage.css"
// import { FaBiohazard } from "react-icons/fa6";

import role1 from "../../../assets/aboutpage-images/undraw_term_sheet_re_ju7s.png"
import role2 from "../../../assets/aboutpage-images/undraw_Investing_re_bov7.png";
import role3 from "../../../assets/aboutpage-images/undraw_Shared_goals_re_jvqd.png";
import user1 from "../../../assets/aboutpage-images/user1.jpg"
import user2 from "../../../assets/aboutpage-images/user2.jpg"
import user3 from "../../../assets/aboutpage-images/user3.jpg"
import user4 from "../../../assets/aboutpage-images/user4.jpg"
import user5 from "../../../assets/aboutpage-images/user5.jpg"
import user6 from "../../../assets/aboutpage-images/user6.jpg"
import user7 from "../../../assets/aboutpage-images/user7.jpg"
import user8 from "../../../assets/aboutpage-images/user8.jpg"
import user9 from "../../../assets/aboutpage-images/user9.jpg"
import user10 from "../../../assets/aboutpage-images/user10.jpg"
import user11 from "../../../assets/aboutpage-images/user11.jpg"
// import AboutSec from "../../AboutSec/AboutSec"
import Title from '../../Title/Title';
import about_logo from "../../../assets/Image/serviceimg.png";
// import { Link } from "react-router-dom";
import Footer from '../../Footer/Footer';
import Contact from '../../Contact/Contact';
import Reveal from "../../Reveal/Reveal";

const AboutPage = () => {
      const teamsList = [
        {
          imageUrl: user4,
          title: "Jeeva Kumar",
          description: "Founder & CEO",
        },
        {
          imageUrl: user3,
          title: "Ashok Kumar",
          description: "Founder & CTO",
        },
        {
          imageUrl: user9,
          title: "Ravi Kumar",
          description: "Founder & COO",
        },
        
        {
          imageUrl: user1,
          title: "Devika",
          description: "Frontend Developer",
        },
        {
          imageUrl: user2,
          title: "Manoj Balan",
          description: "Frontend Developer",
        },
        {
          imageUrl: user5,
          title: "Jannath Marha",
          description: "Frontend Developer",
        },
        {
          imageUrl: user6,
          title: "Surendhar",
          description: "Full Stack Developer",
        },
        {
          imageUrl: user8,
          title: "Subash",
          description: "Graphic Designer",
        },
        {
          imageUrl: user7,
          title: "Revanth",
          description: "Digital Marketing",
        },
        {
          imageUrl: user10,
          title: "RajKumar",
          description: "Full Stack Developer",
        },
        {
          imageUrl: user11,
          title: "Ajith Kumar",
          description: "Graphic Designer",
        },
      ];

  return (
    <div>
      <Navbar />
      <SecTitle  subTitle="Home / About" title="About Us" />
      <div className="container">
        <Reveal>
          <div className="about">
            <div className="left">
              <img src={about_logo} alt="" className="about2-img"/>
            </div>
            <div className="right">
              <h3>
                DISCOVER OUR STORY
              </h3>
              <h2>Delve into Our Origins: A Tale of Passion and Purpose</h2>
              <p>
                Our story is one of relentless dedication and unwavering
                commitment to our clients' success. From humble beginnings,
                we've expanded our offerings to encompass a wide range of
                digital services, including digital marketing, social media
                management, website and app development, SEO services UI/UX
                design, business strategy, and advertising campaigns. Fueled by
                a shared passion for innovation and excellence, our team stays
                at the forefront of emerging technologies and trends, delivering
                measurable results and tangible outcomes for our clients. As we
                continue to grow, our vision remains clear: to create the
                biggest tech platform, leveraging the latest innovations and
                trending technologies.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="about-three">
        <Reveal>
          <h1 className="green">
            Defining Our Purpose: Mission, Vision, and Values
          </h1>
          <div className="three-box">
            <div className="box">
              <img src={role1} alt="" />
              <h2>Our Mission</h2>
              <p>
                At Hurryep Technologies, we pride ourselves on our expertise in
                digital marketing, social media handling, website development,
                app development, SEO services, competitor analysis, UI/UX
                design, business strategy, and ads campaigns. With years of
                industry experience, our dedicated team is committed to
                providing innovative solutions tailored to meet your specific
                goals and objectives.
              </p>
            </div>
            <div className="box">
              <img src={role2} alt="" />
              <h2>Our Vision</h2>
              <p>
                Our vision is to create the biggest tech platform on the floor
                with innovations & trending technologies . We are in the future
                path of Hi-tech E-commerce , gamings , education & payment
                gateways. Aspiring to build technology solutions with a global
                reach, making a difference across borders and cultures.
                Committing to sustainable practices in technology development
                and operations, ensuring a positive environmental impact.
              </p>
            </div>
            <div className="box">
              <img src={role3} alt="" />
              <h2>Our Values</h2>
              <p>
                At Hurryep Technologies, we pride ourselves on our expertise in
                digital marketing, social media handling, website development,
                app development, SEO services, competitor analysis, UI/UX
                design, business strategy, and ads campaigns. With years of
                industry experience, our dedicated team is committed to
                providing innovative solutions tailored to meet your specific
                goals and objectives.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <Title
        title="Explore the Talented Individuals Who Make Our Mission Possible"
        subTitle="Meet Out Team"
      />
      <div className="container">
        <Reveal>
          <div className="teams">
            {teamsList.map((team, index) => (
              <div className="teams-card" key={index}>
                <img src={team.imageUrl} alt="Service" />
                <h2>{team.title}</h2>
                <p>{team.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <hr className="hr" />
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Reveal>
          <Contact />
        </Reveal>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage