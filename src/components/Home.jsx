import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import SocialMediaAccounts from "./social_media/SocialMediaAccounts";
import About from "./about/About";
import Education from "./education/Education";
import MyRepository from "./repository/MyRepository";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { FloatButton } from "antd";
import Projects from "./project/Projects.jsx";

const Home = () => {
  return (
    <>
      <main className=" text-white " id="main">
        <Header />
        <Hero />
        <SocialMediaAccounts />
        <About />
        <Education />
        <Projects />
        <MyRepository />
        <Contact />
        <Footer />
      </main>
      <FloatButton.BackTop className="mr-14  max-sm:mr-0" />
    </>
  );
};

export default Home;
