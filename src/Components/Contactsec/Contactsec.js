import React from "react";
import "./Contactsec.css";
// import Reveal from "../Reveal/Reveal"
import {motion,AnimatePresence} from "framer-motion"


const Contactsec = ({ subTitle, title }) => {
  return (
    <div className="contact-title">
      <div className="text">
         <AnimatePresence>
          <motion.h1
            initial={{x:100, opacity: 0 }}
            animate={{x:0, opacity: 1 }}
            transition={{ duration: 3 }}>
        <p>{subTitle}</p>
        <h2>{title}</h2>
       </motion.h1>
      </AnimatePresence>
      </div>
    </div>
  );
};

export default Contactsec;
