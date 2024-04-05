import React from 'react'
// import { Link } from "react-router-dom";
import ser10 from "../../../../assets/service/undraw_video_files_fu10.png";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../Footer/Footer";
import SecTitle from "../../../SecTitle/SecTitle";
import Contact from '../../../Contact/Contact';
import Title from "../../../Title/Title";
const VideoEditing = () => {
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / Video Editing"
        title=" Video Editing"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <img src={ser10} alt="" />
          </div>
          <div className="right">
            <h1>Video Editing</h1>
            <p>
              Transform your vision into captivating visual stories with our
              professional video editing services. Our team of skilled editors
              specializes in bringing footage to life through seamless editing,
              stunning visuals, and immersive storytelling. From corporate
              videos and promotional content to social media clips and event
              highlights, we'll work closely with you to understand your goals
              and create videos that exceed your expectations. With
              state-of-the-art editing software and a keen eye for detail, we'll
              enhance your footage with dynamic transitions, compelling
              graphics, and professional-grade effects. Whether you're looking
              to showcase your brand, share your message, or entertain your
              audience, we'll deliver high-quality videos that leave a lasting
              impression. Partner with us and let's bring your vision to life
              through the power of video editing.
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

export default VideoEditing