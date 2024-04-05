import React from 'react'
import Navbar from '../navbar/Navbar'
import SecTitle from '../SecTitle/SecTitle'
import Footer from '../Footer/Footer';
import "./Terms.css"
import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";
import i1 from "./image/tandc.jpg"
import i2 from "./image/changestoagreement.jpg"
import i3 from "./image/cookies.jpg"
// import tandc from "./image/front-view-commission-still-life-composition.jpg"
import i4 from "./image/governinglaw.jpg"
// import i5 from "./image/thirdpartylink.jpg"
import i6 from "./image/usercontant.jpg"
import i7 from "./image/usercontent.jpg"
import i8 from "./image/userrestrictiom.jpg"
import i9 from "./image/privacy.jpg"
import i10 from "./image/start.jpg"
import i11 from "./image/yellow.jpg"
import i12 from "./image/thirdpartylink.jpg"
import i13 from "./image/p.jpg"
import i14 from "./image/customer (1).jpg"
import i15 from "./image/women.jpg"

// import userrestrictiom from "./image/.jpg"
// import tandc from "./image/users-agreement-terms-conditions-rule-policy-regulation-concept.jpg"


const Terms = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Terms & Conditions"
        title="Terms & Conditions"
      />
      <div className="container">
        <Reveal>
          <div className="service-row" id="service-row-0">
            <div className="left">
              <img src={i1} alt="" />
            </div>
            <div className="right">
              <h1>Terms & Conditions</h1>
              <p>
                Welcome to (Our Website Name) These Terms & Conditions outline
                the rules and regulations for the use of our website. By
                accessing this website, we assume you accept these Terms &
                Conditions in full. Do not continue to use (Our Website Name) if
                you do not accept all of the Terms & Conditions stated on this
                page.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>License to Use the Website:</h1>
              <p>
                Unless otherwise stated, Hurryep Technologies and/or its
                licensors own the intellectual property rights for all material
                on (Our Website Name). All intellectual property rights are
                reserved.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={i8} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-0">
            <div className="left">
              <img src={i9} alt="" />
            </div>
            <div className="right">
              <h1>User Restrictions:</h1>
              <p>
                Republish material from (Our Website Name). Sell, rent, or
                sub-license material from (Our Website Name). Reproduce,
                duplicate, or copy material from (Our Website Name).
                Redistribute content from (Our Website Name) (unless content is
                specifically made for redistribution).
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>User Content:</h1>
              <p>
                In these Terms & Conditions, “Your Content” shall mean any
                audio, video, text, images, or other material you choose to
                display on (Our Website Name). By displaying Your Content, you
                grant Hurryep Technologies a non-exclusive, worldwide
                irrevocable, sub-licensable license to use, reproduce, adapt,
                publish, translate, and distribute it in any and all media.
                Limitation of Liability: In no event shall Hurryep Technologies
                be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the
                materials on (Our Website Name), even if Hurryep Technologies or
                a Hurryep Technologies authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={i7} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-0">
            <div className="left">
              <img src={i4} alt="" />
            </div>
            <div className="right">
              <h1>Governing Law:</h1>
              <p>
                These Terms & Conditions are governed by and construed in
                accordance with the laws of India, and you irrevocably submit to
                the exclusive jurisdiction of the courts in that State or
                location.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>Changes to This Agreement:</h1>
              <p>
                Hurryep Technologies, reserves the right to modify these Terms &
                Conditions at any time. We will notify you of any changes by
                posting the new Terms & Conditions on this page. Your continued
                use of (Our Website Name) after any such modifications
                constitutes your acceptance of the new Terms & Conditions.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={i15} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-0">
            <div className="left">
              <img src={i14} alt="" />
            </div>
            <div className="right">
              <h1>Contact Us:</h1>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us via [contact method]. By using (Our Website Name),
                you signify your acceptance of these Terms & Conditions. If you
                do not agree to these Terms & Conditions, please do not use (Our
                Website Name).
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>Privacy Policy:</h1>
              <p>
                Thank you for visiting (Our Website) and for your interest in
                our privacy practices. This Privacy Policy outlines how we
                collect, use, disclose, and safeguard your personal information.
                <b>Information We Collect:</b> We may collect personal
                information such as your name, email address, postal address,
                phone number, and other similar data when voluntarily submitted
                by you.<b> How We Use Your Information:</b> We may use the
                information collected to: Provide and maintain our services.
                Respond to inquiries and customer service requests. Personalize
                user experience and improve our services. Send periodic emails
                regarding your order or other products and services.
                <b> How We Protect Your Information: </b>We implement
                appropriate security measures to protect against unauthorized
                access, alteration, disclosure, or destruction of your personal
                information.<b> Disclosure of Your Information:</b> We do not
                sell, trade, or otherwise transfer your personal information to
                outside parties without your consent, except as required by law.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={i13} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-0">
            <div className="left">
              <img src={i12} alt="" />
            </div>
            <div className="right">
              <h1>Third-Party Links:</h1>
              <p>
                Our website may contain links to third-party websites. These
                third-party sites have separate and independent privacy
                policies. We have no responsibility or liability for the content
                and activities of these linked sites.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>Cookies:</h1>
              <p>
                We may use cookies to enhance your experience on our website.
                You have the option to disable cookies through your browser
                settings, although this may affect your ability to access
                certain features of the site.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={i3} alt="" />
            </div>
          </div>
        </Reveal>
        
        
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>Your Consent:</h1>
              <p>
                By using our website, you consent to our Privacy Policy and
                agree to its terms. Contact Us: If you have any questions or
                concerns about our Privacy Policy, please contact us via
                (contact method). Please review this Privacy Policy periodically
                for any changes. Your continued use of our website after any
                modifications indicates your acceptance of the updated Privacy
                Policy.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={i6} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>Disclaimer:</h1>
              <p>
                {" "}
                The information provided by Hurryep Technologies on
                (Platform/Website) is for general informational purposes only.
                All information on the site is provided in good faith, however,
                we make no representation or warranty of any kind, express or
                implied, regarding the accuracy, adequacy, validity,
                reliability, availability, or completeness of any information on
                the site. Under no circumstance shall we have any liability to
                you for any loss or damage of any kind incurred as a result of
                the use of the site or reliance on any information provided on
                the site. Your use of the site and your reliance on any
                information on the site is solely at your own risk. The site may
                contain (or you may be sent through the site) links to other
                websites or content belonging to or originating from third
                parties or links to websites and features in banners or other
                advertising. Such external links are not investigated,
                monitored, or checked for accuracy, adequacy, validity,
                reliability, availability, or completeness by us. We do not
                warrant, endorse, guarantee, or assume responsibility for the
                accuracy or reliability of any information offered by
                third-party websites linked through the site or any website or
                feature linked in any banner or other advertising. We will not
                be a party to or in any way be responsible for monitoring any
                transaction between you and third-party providers of products or
                services. If you have any concerns or questions about this
                disclaimer, please feel free to contact us.
              </p>
              <button class="bn632-hover bn22">
                <Link to="/contactpage" onclick={scrollToTop}>
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={i11} alt="" />
            </div>
          </div>
        </Reveal>
      </div>
      <Footer />
    </div>
  );
}

export default Terms