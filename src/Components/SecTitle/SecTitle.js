import React from "react";
import "./SecTitle.css";
// import Reveal from "../Reveal/Reveal"
import {motion,AnimatePresence} from "framer-motion"


const SecTitle = ({ subTitle, title }) => {
  return (
    <div className="Sec-title">
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

export default SecTitle;
