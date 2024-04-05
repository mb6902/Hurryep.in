import React from 'react'
import "./Hero.css"
import {Link} from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
// import Reveal from '../Reveal/Reveal';

const Hero = () => {
  // Function to scroll to top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="hero container">
      <div className="hero-text">
        <AnimatePresence>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: -100, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h1>Empower Business with Trending Technologies</h1>
            <p className="green">
              One-stop solution for all your digital needs
            </p>
            <button className="bn632-hover bn22" style={{fontSize:"18px"}}>
              <Link
                to="about"
                onClick={scrollToTop}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Discover more
              </Link>
            </button>
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Hero