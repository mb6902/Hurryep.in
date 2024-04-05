import React from 'react'
import Navbar from '../../navbar/Navbar'
// import SecTitle from '../../SecTitle/SecTitle'
import Title from '../../Title/Title'
import Footer from '../../Footer/Footer'
import msg_icon from "../../../assets/msg-icon.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import Reveal from "../../Reveal/Reveal"
import Contactsec from '../../Contactsec/Contactsec' ;

const ContactPage = () => {
   const [result, setResult] = React.useState("");

   const onSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);

     formData.append("access_key", "e98875c5-1f84-40da-9eec-52f09ad04492");

     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData,
     });

     const data = await response.json();

     if (data.success) {
       setResult("Form Submitted Successfully");
       event.target.reset();
     } else {
       console.log("Error", data);
       setResult(data.message);
     }
   };
  return (
    <div>
      <Navbar />
      <Contactsec subTitle="Home / Contact" title="Contact Us" />
      <Title subTitle="CONTACT US" title="Get In Touch" />
      <div className="container">
        {/* <Contact /> */}
        <Reveal>
          <div className="contact">
            <div className="contact-col">
              <h3>
                Send us a message <img src={msg_icon} alt="" />
              </h3>
              <ul>
              <li>
                  <IoLocationSharp className="icons" />
                  {/* <strong>Address:</strong> */}
                  <Link to="loc" smooth={true} offset={-70} duration={500}>
                  <p style={{lineHeight:"30px",}}>
               no 2/3 Hurryep Technologies,
              <br /> Uchaparambumedu Rd,<br />  near Devi Medical Shop,<br/>
              Iyer Bungalow, Madurai,<br/>
              Tamil Nadu 625017 </p>
                  </Link>
                </li>
                <li>
                  <IoIosMail className="icons" />
                  {/* <strong>Email:</strong> */}
                  <a href="mailto:hurryeptech@gmail.com ">
                    hurryeptech@gmail.com
                  </a>
                </li>
                <li>
                  <FaPhoneAlt className="icons" />
                  {/* <strong>Phone:</strong> */}
                  <a href="tel:+918675651401 ">+91 8675651401</a> &nbsp;|&nbsp;
            <a href="tel: +917806936906 ">+91 7806936906  </a>
                </li>
               
              </ul>
              <p className="contact-para">
                We value your feedback and inquiries. Please feel free to reach
                out to us using the form below. Whether you have questions about
                our services, need assistance, or want to share your thoughts,
                we're here to help. Our team will get back to you as soon as
                possible.
              </p>
            </div>
            <div className="contact-col">
              <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  required
                />
                <label>Write your message here</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                ></textarea>
                <button type="submit" className="bn632-hover bn22">
                  Submit now
                </button>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </Reveal>
        <div className="loc">
          <Reveal>
            <Title title="Find Us Here" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5541625808078!2d78.12968277487104!3d9.971001590132945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c776ccc69fe7%3A0xfe8043a5dcabd4d3!2sHurryep%20Technologies!5e0!3m2!1sen!2sin!4v1711526520681!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, marginBottom: 50 }}
              title="map"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Reveal>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;