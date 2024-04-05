import React from 'react'
import "./AboutSec.css"
// import about_img from "../../assets/dev.png"
import about_img2 from "../../assets/About Us small.jpg"
import {Link} from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion";



const About = () => {
   function scrollToTop() {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   }
  return (
    <div className="about">
      <div className="left">
        <img src={about_img2} alt="" className="about-img" />
      </div>
      <div className="right">
        <h3>
          ABOUT US
        </h3>
        <h2>Transform Your Business with Our Dynamic Solutions</h2>
        <p>
          Step into the fast lane of digital success with Hurryep Technologies!
          Here, innovation meets expertise as we tailor solutions to supercharge
          your online growth. Count on us to not only enhance your website but
          also to sculpt your brand's digital persona and magnetize your target
          audience. With our holistic approach, expect nothing less than a
          seamless journey towards unparalleled digital triumph
        </p>
        <button className="bn632-hover bn22" style={{ fontSize: "18px" }} onClick={scrollToTop}>
          <Link to="/aboutpage">Discover More</Link>
        </button>
      </div>
    </div>
  );
}

export default About