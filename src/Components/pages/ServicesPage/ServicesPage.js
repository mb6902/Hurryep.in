import React from 'react'
import Navbar from '../../navbar/Navbar';
// import Title from '../../Title/Title';
// import seo from "../../../assets/analyst.png";
// import analyst from "../../../assets/analyst.png";
// import affiliate from "../../../assets/afli.png";
// import webdev from "../../../assets/web.png";
// import appdev from "../../../assets/app-development.png";
// import email from "../../../assets/email-marketing.png";
// import awareness from "../../../assets/awareness.png";
// import ui from "../../../assets/ui ux.png";
import Contact from '../../Contact/Contact';
import "../ServicesPage/ServicesPage.css";
// import { FaBiohazard } from "react-icons/fa6";
import Footer from '../../Footer/Footer';
import ser1 from "../../../assets/service/undraw_Mobile_application_re_13u3.png"
import ser2 from "../../../assets/service/undraw_building_websites_i78t.png"
import ser3 from "../../../assets/service/undraw_Business_plan_re_0v81.png"
import ser4 from "../../../assets/service/undraw_mobile_prototyping_grmd.png"
import ser5 from "../../../assets/service/undraw_design_tools_42tf.png"
import ser6 from "../../../assets/service/undraw_Mobile_marketing_re_p77p.png"
import ser7 from "../../../assets/service/undraw_Social_influencer_re_beim.png"
import ser8 from "../../../assets/service/undraw_Email_campaign_re_m6k5.png"
import ser9 from "../../../assets/service/undraw_Social_dashboard_re_ocbd.png"
import ser10 from "../../../assets/service/undraw_video_files_fu10.png"
import ser11 from "../../../assets/service/undraw_Web_development_0l6v.png"
import ser12 from "../../../assets/service/faq.svg"
import { Link } from 'react-router-dom';
import Reveal from "../../Reveal/Reveal"
import Title from '../../Title/Title';
import Servicesec from "../../servicesec/Servicesec";
// import digital from "../../../assets/ssmm.jpeg";
const ServicesPage = () => {

  //  const servicesList = [
  //    {
  //      imageUrl: webdev,
  //      title: "Web Development",
  //      description: "Crafted tailored, responsive websites.",
  //    },
  //    {
  //      imageUrl: appdev,
  //      title: "App Development",
  //      description: "Customized mobile applications for all platforms.",
  //    },
  //    {
  //      imageUrl: seo,
  //      title: "SEO Service",
  //      description: "Improve search engine rankings and visibility.",
  //    },
  //    {
  //      imageUrl: ui,
  //      title: "UI UX Design",
  //      description:
  //        "Elevate User Experiences through Intuitive Design services.",
  //    },
  //    {
  //      imageUrl: analyst,
  //      title: "Graphic Designing",
  //      description:
  //        " Revitalize your brand image with our top-notch graphic design.",
  //    },
  //    {
  //      imageUrl: affiliate,
  //      title: "Affiliate & Influencer Marketing",
  //      description:
  //        "Amplifying Brand Reach and Conversions through Affiliate & Influencer Marketing",
  //    },
  //    {
  //      imageUrl: email,
  //      title: "Email & Content Marketing",
  //      description:
  //        "Driving Engagement and Conversion through Targeted Email and Content Marketing",
  //    },
  //    {
  //      imageUrl: awareness,
  //      title: "Branding & Promotion",
  //      description: "Memorable brand experiences for audience engagement.",
  //    },

  //    {
  //      imageUrl: ui,
  //      title: "Video Editing",
  //      description:
  //        " Transform your vision into captivating visual stories with our professional video editing services.",
  //    },
  //    {
  //      imageUrl: affiliate,
  //      title: "Social Media Marketing",
  //      description: "Engage audiences and boost brand presence.",
  //    },
  //    {
  //      imageUrl: analyst,
  //      title: "Finance and Auditing",
  //      description: "Financial clarity and regulatory compliance.",
  //    },

  //    {
  //      imageUrl: awareness,
  //      title: "Legal Assistance",
  //      description: "Expert guidance for legal compliance.",
  //    },
  //    {
  //      imageUrl: digital,
  //      title: "Digital Marketing",
  //      description: "Targeted campaigns for online visibility",
  //    },
  //    {
  //      imageUrl: analyst,
  //      title: "Business Analysis & Strategies",
  //      description:
  //        "Data-driven insights for process optimization.Consulting for winning business strategies.",
  //    },
  //  ];
  // Function to scroll to top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Navbar />
      <Servicesec subTitle="Home / Services" title="Our Services" />
      <div className="container">
        <Reveal>
          <Title
            className="mb"
            subTitle="Take Your Business To The Next Level With Our Services"
            title="  Every Business Is Unique ,Your Brands Service are Tailored
          Specifically To your needs giving you an ultra premium experience"
          />
        </Reveal>
        {/* </Reveal> */}
        {/* <div className="service-row">
          <div className="left">
            <h1>Social Marketing</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat provident reiciendis aperiam vero, voluptates debitis
              velit veritatis atque temporibus nihil rem repudiandae totam!
              Corporis natus saepe consequuntur error ea!In today's
              mobile-focused world, having a dedicated app for your business is
              a game-changer. Our skilled app developers will bring your ideas
              to life, creating a seamless and engaging app that fulfills the
              needs of your target audience.
            </p>
            <button class="bn632-hover bn22" onclick="contact()">
              <Link to="/socialmarketing"> Discover More</Link>
            </button>
          </div>
          <div className="right">
            <img src={ser1} alt="" />
          </div>
        </div> */}
        {/* <Reveal> */}
        <Reveal>
          <div className="service-row">
            <div className="left">
              <img src={ser3} alt="" />
            </div>
            <div className="right">
              <h1>Business Development</h1>
              <p>
                Accelerate your business growth with our strategic business
                development services. We provide comprehensive analysis, market
                research, and strategic planning to identify new opportunities,
                expand your customer base, and maximize revenue streams. Our
                experienced team works closely with you to develop sustainable
                growth strategies aligned with your business objectives.
              </p>

              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/businessdevelopment" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row">
            <div className="left">
              <h1>Business Collaborations</h1>
              <p>
                Forge valuable partnerships and collaborations to drive mutual
                success with our business collaborator services. We facilitate
                connections with like-minded businesses, startups, and industry
                experts to explore synergies, share resources, and unlock new
                opportunities for innovation and growth.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/businessdevelopment" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser3} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-0">
            <div className="left">
              <img src={ser2} alt="" />
            </div>
            <div className="right">
              <h1>Web Development</h1>
              <p>
                Elevate your online presence with our comprehensive web
                development solutions tailored to your business needs. Our team
                of skilled developers combines creativity with technical
                expertise to deliver stunning, user-friendly websites that
                captivate audiences and drive results. From intuitive UI/UX
                design to robust backend development, we handle every aspect of
                the development process with precision and attention to detail.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/webdevelopment" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-1">
            <div className="left">
              <h1>App Development</h1>
              <p>
                Crafting a compelling paragraph for app development requires
                highlighting the expertise, innovation, and value proposition of
                your services. Here's a sample: Embark on your digital journey
                with our premier app development services designed to bring your
                ideas to life. Our experienced team of developers leverages the
                latest technologies and industry best practices to create
                customized mobile applications for all platforms.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/appdevelopment" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser1} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-12">
            <div className="left">
              <img src={ser6} alt="" />
            </div>
            <div className="right">
              <h1>Digital Marketing</h1>
              <p>
                Elevate your online presence and reach your target audience
                effectively through our comprehensive digital marketing
                strategies. From search engine optimization (SEO) and
                pay-per-click (PPC) advertising to email marketing and content
                creation, we devise tailored campaigns to boost your brand
                visibility, engagement, and conversion rates across various
                digital channels.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/digitalmarketing" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-11">
            <div className="left">
              <h1>Business Analysis & Strategies</h1>
              <p>
                we specialize in providing tailored business analysis and
                strategic planning services. Our expert team conducts thorough
                assessments to uncover growth opportunities and develop robust
                strategies aligned with your goals. With a focus on data-driven
                insights and collaborative planning, we empower businesses to
                navigate challenges and achieve sustainable success in today's
                dynamic market.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/businessanalysis" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser9} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-2">
            <div className="left">
              <img src={ser11} alt="" />
            </div>
            <div className="right">
              <h1>SEO Service</h1>
              <p>
                Transform your online presence with our cutting-edge SEO
                services tailored to your unique business needs. Our team of
                experts will work closely with you to develop customized
                strategies aimed at boosting your website's visibility, driving
                organic traffic, and maximizing conversions. With transparent
                reporting and continuous analysis, you'll have full visibility
                into the performance of your SEO campaigns, allowing you to make
                informed decisions and stay ahead of the competition.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/seoservice" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-3">
            <div className="left">
              <h1>UI/UX Designing</h1>
              <p>
                Transform your digital experience with our expert UI/UX design
                services. We specialize in creating intuitive and visually
                stunning interfaces that engage users and elevate your brand.
                Our team of designers combines creativity with strategic
                thinking to craft user-centric designs that drive conversions
                and enhance user satisfaction. From wireframing to prototyping,
                we guide you through every step of the design process, ensuring
                that your vision is brought to life with precision and attention
                to detail.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/design" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser4} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-4">
            <div className="left">
              <img src={ser5} alt="" />
            </div>
            <div className="right">
              <h1>Graphic Designing</h1>
              <p>
                Revitalize your brand image with our top-notch graphic design
                services. We specialize in creating visually stunning and
                impactful designs that captivate audiences and leave a lasting
                impression. From logos and branding materials to marketing
                collateral and digital assets, our team of skilled designers
                will work closely with you to bring your vision to life. With a
                keen eye for detail and a passion for creativity, we'll craft
                designs that reflect your brand identity and resonate with your
                target audience.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/graphic" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-5">
            <div className="left">
              <h1>Influencer Marketing</h1>
              <p>
                Amplify your brand's reach and engagement with our expert
                influencer marketing services. We specialize in connecting
                brands with top influencers to create authentic and impactful
                campaigns that resonate with your target audience. Our team of
                influencer marketing experts will work closely with you to
                identify the perfect influencers for your brand, ensuring that
                their values align with yours and their audience matches your
                target demographic. From strategy development to campaign
                execution and measurement, we'll handle every aspect of your
                influencer marketing campaign with precision and
                professionalism.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/influencermarketing" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser7} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-6">
            <div className="left">
              <img src={ser8} alt="" />
            </div>
            <div className="right">
              <h1>Email Marketing</h1>
              <p>
                Maximize your reach and engagement with our comprehensive email
                marketing services. We specialize in crafting personalized and
                targeted email campaigns that drive results. From designing
                eye-catching templates to crafting compelling content and
                analyzing performance metrics, our team of email marketing
                experts will guide you through every step of the process.
                Whether you're looking to nurture leads, promote your products
                or services, or engage with your audience, we'll help you create
                campaigns that resonate with your subscribers and drive action.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/emailmarketing" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-7">
            <div className="left">
              <h1>Brand Promotion</h1>
              <p>
                Elevate your brand's presence and drive engagement with our
                dynamic branding and promotion services. We specialize in
                creating memorable brand experiences that captivate audiences
                and foster lasting connections. From crafting compelling brand
                identities to developing strategic promotional campaigns, our
                team of experts will work tirelessly to ensure that your brand
                stands out in today's competitive landscape. With a focus on
                creativity, authenticity, and innovation, we'll help you tell
                your brand story in a way that resonates with your target
                audience and sets you apart from the competition.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/branding" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser9} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-8">
            <div className="left">
              <img src={ser10} alt="" />
            </div>
            <div className="right">
              <h1>Video Editing</h1>
              <p>
                Transform your vision into captivating visual stories with our
                professional video editing services. Our team of skilled editors
                specializes in bringing footage to life through seamless
                editing, stunning visuals, and immersive storytelling. From
                corporate videos and promotional content to social media clips
                and event highlights, we'll work closely with you to understand
                your goals and create videos that exceed your expectations. With
                state-of-the-art editing software and a keen eye for detail,
                we'll enhance your footage with dynamic transitions, compelling
                graphics, and professional-grade effects.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/videoediting" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-9">
            <div className="left">
              <h1>Social Media Marketing</h1>
              <p>
                Elevate your brand's online presence and engagement with our
                expert social media marketing services. We specialize in
                crafting targeted and impactful campaigns tailored to your
                unique business objectives. From strategic content creation to
                community management and analytics, our team of social media
                experts will guide you through every step of the process.
                Whether you're looking to increase brand awareness, drive
                website traffic, or boost conversions, we'll develop a
                customized strategy to help you achieve your goals.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/socialmedia" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser9} alt="" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-10">
            <div className="left">
              <img src={ser12} alt="" />
            </div>
            <div className="right">
              <h1>Finance and Auditing</h1>
              <p>
                Streamline your financial operations and ensure regulatory
                compliance with our comprehensive finance and auditing services.
                Our team of seasoned professionals combines expertise with
                meticulous attention to detail to deliver tailored solutions
                that meet your business needs. From financial analysis and
                reporting to internal controls and risk management, we provide a
                full spectrum of services to support your financial health and
                growth.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/finance" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="service-row" id="service-row-11">
            <div className="left">
              <h1>Legal Assistance</h1>
              <p>
                Navigate the legal landscape with confidence with our expert
                legal assistance services. Our team of seasoned attorneys
                provides comprehensive guidance and support to businesses of all
                sizes, ensuring compliance with laws and regulations while
                mitigating risks. From contract review and drafting to dispute
                resolution and compliance audits, we offer a full range of legal
                services tailored to your specific needs.
              </p>
              <button class="bn632-hover bn22" onclick={scrollToTop}>
                <Link to="/legal" onclick={scrollToTop}>
                  Discover More
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={ser9} alt="" />
            </div>
          </div>
        </Reveal>
        <hr className="hr" />
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Reveal>
          <Contact />
        </Reveal>
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage