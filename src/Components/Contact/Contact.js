import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from "react-scroll"
const Contact = () => {
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
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <ul>
        <li>
            <IoLocationSharp className="icons" />
            <Link to="map">

              <p style={{lineHeight:"30px",}}>
              No  2/3 Hurryep Technologies,
              <br /> Uchaparambumedu Rd, <br />  near Devi Medical Shop, <br/>
              Iyer Bungalow, Madurai,<br/>
              Tamil Nadu 625017 </p>
            </Link>
          </li>
          <li>
            <IoIosMail className="icons" />
            <a href="mailto:hurryeptech@gmail.com">hurryeptech@gmail.com</a>
          </li>
          <li>
            <FaPhoneAlt className="icons" />
            <a href="tel:+918675651401 ">+91 8675651401  </a> &nbsp;|&nbsp;
            <a href="tel: +917806936906 ">+91 7806936906  </a>
          </li>
         
        </ul>
        <p className="contact-para">
          We value your feedback and inquiries. Please feel free to reach out to
          us using the form below. Whether you have questions about our
          services, need assistance, or want to share your thoughts, we're here
          to help. Our team will get back to you as soon as possible.
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
  );
}

export default Contact