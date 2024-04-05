import React from "react";
import{Routes,Route}from "react-router-dom"
import Home from "./Components/pages/Home/Home";
import AboutPage from "./Components/pages/AboutPage/AboutPage";
import ServicesPage from "./Components/pages/ServicesPage/ServicesPage";
import ContactPage from "./Components/pages/ContactPage/ContactPage";
import Finance from "./Components/pages/ServicesPage/subpages/Finance"
import Legal from "./Components/pages/ServicesPage/subpages/Legal"
import "./App.css"
import AppDevelopment from "./Components/pages/ServicesPage/subpages/AppDevelopment";
import WebDevelopment from "./Components/pages/ServicesPage/subpages/WebDevelopment";
import BusinessDevelopment from "./Components/pages/ServicesPage/subpages/BusinessDevelopment";
import BusinessAnalysis from "./Components/pages/ServicesPage/subpages/BusinessAnalysis";
import DigitalMarketing from "./Components/pages/ServicesPage/subpages/DigitalMarketing";
import EmailMarketing from "./Components/pages/ServicesPage/subpages/EmailMarketing";
import Design from "./Components/pages/ServicesPage/subpages/Design";
import Graphic from "./Components/pages/ServicesPage/subpages/Graphic";
import InfluencerMarketing from "./Components/pages/ServicesPage/subpages/InfluencerMarketing";
import SeoService from "./Components/pages/ServicesPage/subpages/SeoService";
import VideoEditing from "./Components/pages/ServicesPage/subpages/VideoEditing";
import Branding from "./Components/pages/ServicesPage/subpages/Branding";
import Terms from "./Components/terms/Terms";
import BusinessCollaboration from "./Components/pages/ServicesPage/subpages/BusinessCollaboration"
import SocialMedia from "./Components/pages/ServicesPage/subpages/SocialMedia";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/servicespage" element={<ServicesPage />} />
        {/* sub pages */}
        <Route path="/appdevelopment" element={<AppDevelopment/>} />
        <Route path="/webdevelopment" element={<WebDevelopment/>} />
        <Route path="/businessdevelopment" element={<BusinessDevelopment/>} />
        <Route path="/businesscollaboration" element={<BusinessCollaboration/>} />
        <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="/design" element={<Design />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/socialmedia" element={<SocialMedia/>} />
        {/* <Route path="/socialmarketing" element={<ServicesPage />} /> */}
        <Route path="/seoservice" element={<SeoService />} />
        <Route path="/influencermarketing" element={<InfluencerMarketing />} />
        <Route path="/finance" element={<Finance/>} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/emailmarketing" element={<EmailMarketing />} />
        <Route path="/businessanalysis" element={<BusinessAnalysis />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/videoediting" element={<VideoEditing/>} />

        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>
    </div>
  );
};

export default App;
