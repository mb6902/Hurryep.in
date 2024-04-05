import React from 'react'
import "./Services.css"
// import smm from "../../assets/ssmm.jpeg"

import { Link } from 'react-router-dom'
import webdev from "../../assets/service-icons/Frame 20.svg";
import appdev from "../../assets/service-icons/Frame 21.svg";
import digital from "../../assets/service-icons/Frame 18.svg";
import finance from "../../assets/service-icons/Frame 22.svg";
import legal from "../../assets/service-icons/Frame 23.svg";
import social from "../../assets/service-icons/Frame 24.svg";
import seo from "../../assets/service-icons/SEO.svg";
import analyst from "../../assets/service-icons/Frame 26.svg";
import affiliate from "../../assets/service-icons/Frame 28.svg";
import email from "../../assets/service-icons/Frame 27.svg";
import branding from "../../assets/service-icons/Frame 29.svg";
import uiux from "../../assets/service-icons/Frame 30.svg";

const Services = () => {
  // Function to scroll to top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const servicesList = [
    {
      imageUrl: webdev,
      title: "Web Development",
      description: "Crafted tailored, responsive websites.",
    },
    {
      imageUrl: appdev,
      title: "App Development",
      description: "Customized mobile applications for all platforms.",
    },
    {
      imageUrl: digital,
      title: "Digital Marketing",
      description: "Targeted campaigns for online visibility",
    },
    {
      imageUrl: social,
      title: "Social Media Marketing",
      description: "Engage audiences and boost brand presence.",
    },
    {
      imageUrl: seo,
      title: "SEO Service",
      description: "Improve search engine rankings and visibility.",
    },
    {
      imageUrl: analyst,
      title: "Business Analysis & Strategies",
      description:
        "Data-driven insights for process optimization.Consulting for winning business strategies.",
    },
    {
      imageUrl: affiliate,
      title: "Affiliate & Influencer Marketing",
      description:
        "Amplifying Brand Reach and Conversions through Affiliate & Influencer Marketing",
    },
    {
      imageUrl: email,
      title: "Email & Content Marketing",
      description:
        "Driving Engagement and Conversion through Targeted Email and Content Marketing",
    },
    {
      imageUrl: branding,
      title: "Branding & Promotion",
      description: "Memorable brand experiences for audience engagement.",
    },
    {
      imageUrl: uiux,
      title: "UI UX Design",
      description: "Elevate User Experiences through Intuitive Design",
    },
    {
      imageUrl: finance,
      title: "Finance and Auditing",
      description: "Financial clarity and regulatory compliance.",
    },
    {
      imageUrl: legal,
      title: "Legal Assistance",
      description: "Expert guidance for legal compliance.",
    },
  ];

  return (
    <div className="services">
      {servicesList.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.imageUrl} alt="Service" />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <button
            className="outline-btn  green"
            style={{
              textAlign: "center",
              padding: "4px 8px",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            <Link to="/servicespage" onClick={scrollToTop}>Discover More</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Services