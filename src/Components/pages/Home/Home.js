import React from 'react'
import Navbar from "../../navbar/Navbar";
import Hero from "../../Hero/Hero";
import Title from "../../Title/Title";
import AboutSec from "../../AboutSec/AboutSec";
import Testimonials from "../../Testimonials/Testimonials";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import Operations from "../../Operations/Operations";
import Services from "../../Services/Services";
import { Link } from 'react-router-dom';
import bb1 from "../../../assets/medium-shot-people-working-together.jpg";
import bb2 from "../../../assets/group-friends-planning-trip-cafe.jpg";
// import LatestProjects from '../../LatestProjects/LatestProjects';
import Reveal from "../../Reveal/Reveal";

const Home = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Reveal>
          <AboutSec />
        </Reveal>
      </div>
      <Reveal>
        <Operations />
      </Reveal>
      <div className="container">
        <Reveal>
          <Title
            subTitle="OUR SERVICES"
            title="Explore our tailored services for an elevated experience."
          />
          <button className="button-85" style={{ fontSize: "18px", fontWeight:"bold",marginLeft:"200px" }}>
              Business Development
            
          </button>
          <button className="button-85" style={{ fontSize: "18px", fontWeight:"bold",marginLeft:"350px" }}>
            
              Business Collaboration
          </button>
          <div className="two-services">
          
            <div className="two-service-card">
            
              <div>
                <img src={bb1} alt="" />
                <h2>Business Development</h2>
                <Link
                  to="/businessdevelopment"
                  className="dis-btn"
                  onClick={scrollToTop}
                >
                  Discover more
                </Link>
              </div>
              <p>
                Accelerate your business growth with our strategic business
                development services. We provide comprehensive analysis, market
                research, and strategic planning to identify new opportunities,
                expand your customer base, and maximize revenue streams. Our
                experienced team works closely with you to develop sustainable
                growth strategies aligned with your business objectives.
              </p>
            </div>
            
            <div className="two-service-card">
              <div>
                <img src={bb2} alt="" />
                <h2>Business Collaborations</h2>
                <Link
                  to="/businesscollaboration"
                  className="dis-btn"
                  onClick={scrollToTop}
                >
                  Discover more
                </Link>
              </div>
              <p>
                Forge valuable partnerships and collaborations to drive mutual
                success with our business collaborator services. We facilitate
                connections with like-minded businesses, startups, and industry
                experts to explore synergies, share resources, and unlock new
                opportunities for innovation and growth.
              </p>
            </div>
          </div>
        </Reveal>
        </div>
        <Reveal>
          <Services />
          {/* <LatestProjects/> */}
        </Reveal>
        <div className="container">
        <Reveal>
          <Title
            subTitle="TESTIMONIALS"
            title="Clients Speak: Their Experience with Us"
          />
          <Testimonials />
        </Reveal>
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Reveal>
          <Contact />
        </Reveal>
      </div>
      <Footer />
    </div>
  );
}

export default Home