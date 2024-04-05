import React from "react";
// import Faq from "react-faq-component";
import Navbar from "../../../navbar/Navbar";
import SecTitle from "../../../SecTitle/SecTitle";
// import { Link } from "react-router-dom";
import ser1 from "../../../../assets/service/undraw_Mobile_application_re_13u3.png";
import Contact from "../../../Contact/Contact"
import Title from "../../../Title/Title"
const AppDevelopment = () => {

  return (
    <div>
      <Navbar />
      <SecTitle
        subTitle="Home / Services / App Development"
        title="App Development"
      />
      <div className="container">
        <div className="service-row">
          <div className="left">
            <h1>App Development</h1>
            <p>
              Crafting a compelling paragraph for app development requires
              highlighting the expertise, innovation, and value proposition of
              your services. Here's a sample: Embark on your digital journey
              with our premier app development services designed to bring your
              ideas to life. Our experienced team of developers leverages the
              latest technologies and industry best practices to create
              customized mobile applications for all platforms. From concept to
              deployment, we collaborate closely with you to understand your
              vision and deliver innovative solutions that exceed your
              expectations. With a focus on user experience and performance, we
              ensure that your app not only looks great but also provides
              seamless functionality and usability. Whether you're launching a
              new product, streamlining business processes, or engaging with
              customers, our app development services empower you to reach your
              goals and stand out in the competitive app market. Partner with us
              and unleash the full potential of your mobile app idea.
            </p>
          </div>
          <div className="right">
            <img src={ser1} alt="" />
          </div>
        </div>
        {/* <div>
          <div className="container extra">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div> */}
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default AppDevelopment;
