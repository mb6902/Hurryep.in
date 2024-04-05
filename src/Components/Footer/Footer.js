import React from 'react'
import "./Footer.css"
// import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
// import { Rating } from "flowbite-react";


const Footer = () => {
   function scrollToTop() {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   }
  return (
    // <div className="footer">
    //   <footer>
    //     <p>&copy; 2024 Hurryep Technologies. All rights reserved.</p>
    //     <ul>
    //       <li>Terms of Services</li>
    //       <li>Privacy Policy</li>
    //     </ul>
    //   </footer>
    //   <a
    //     className="whats"
    //     href="https://www.whatsapp.com"
    //     target="_blank"
    //     rel="noreferrer"
    //     title="what"
    //   >
    //     <FaWhatsapp className="my float" />
    //   </a>
    // </div>
    <footer class="container-fluid">
      <div class="custom-shape-divider-top-1709616390">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="row">
        <div class="col-2">
          <a href="/" onClick={scrollToTop}>
            <img src={logo} alt="" className="logo" />
          </a>

          <ul className="ht">
            <li>
              <Link to="/aboutpage" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <h3>Services</h3>
         
          <ul className='link'>
            <li>
              <Link to="/businessdevelopment" onClick={scrollToTop}>
                Business Development
              </Link>
            </li>
            <li>
              <Link to="/BusinessCollaboration" onClick={scrollToTop}>
                Business Collaborators
              </Link>
            </li>

            <li>
              <Link to="/finance" onClick={scrollToTop}>
                Finance and Auditing
              </Link>
            </li>
            <li>
              <Link to="/legal" onClick={scrollToTop}>
                Legal Assistance
              </Link>
            </li>
            {/* <li>Social Media Marketing</li>
            <li>SEO Services</li>
            <li>Business Analysis & Strategies</li> */}
            <li>
              <Link to="/branding" onClick={scrollToTop}>
                Branding and Promotions
              </Link>
            </li>
            <li>
              <Link to="/design" onClick={scrollToTop}>
                UI UX Design
              </Link>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <h3>Legal</h3>
       
          <ul className='link'>
            <li>
              <Link to="/terms" onClick={scrollToTop}>privacy policy</Link>
            </li>
            <li>
              <Link to="/terms" onClick={scrollToTop}>Refund policy</Link>
            </li>
            <li>
              <Link to="/terms" onClick={scrollToTop}>Terms and Condition</Link>
            </li>
            <li>
              <Link to="/terms" onClick={scrollToTop}>Disclaimer</Link>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <h3>Contact us</h3>
  
          <ul className='link'>
            <li>
              <a href="tel:+917806936909" target="_blank" rel="noreferrer">
                <FaPhoneAlt className="ft" />
                7806936909
              </a><br/>
              <a href="tel:+918675651401" target="_blank" rel="noreferrer">
              <FaPhoneAlt className="ft" />

                8675651401
              </a>
            </li>
            <li>
              <a
                href="mailto:hurryeptech@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoGmail className="ft" />
                hurryeptech@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/hurryep-technologies/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="ft" />
                Hurryep Technologies
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/hurryep.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare className="ft" />
                hurryep.tech 
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a
        className="whats"
        href="https:/wa.me/8675651401"
        target="_blank"
        rel="noreferrer"
        title="what"
      >
        <FaWhatsapp className="my float" />
      </a>
    </footer>
  );
}

export default Footer