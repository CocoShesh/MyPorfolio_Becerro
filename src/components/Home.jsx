import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import SocialMediaAccounts from "./social_media/SocialMediaAccounts";
import About from "./about/About";
import Education from "./education/Education";
import FirstProject from "./project/FirstProject";
import SecondProject from "./project/SecondProject";
import ThirdProject from "./project/ThirdProject";
import FourthProject from "./project/FourthProject";
import FifthProject from "./project/FifthProject";
import SixthProject from "./project/SixthProject";
import SeventhProject from "./project/SeventhProject";
import EightProject from "./project/EightProject";
import MyRepository from "./repository/MyRepository";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { FloatButton } from "antd";
import NinethProject from "./project/NinethProject";
const Home = () => {
  return (
    <>
      <main className=" text-white " id="main">
        <Header />
        <Hero />
        <SocialMediaAccounts />
        <About />
        <Education />
        <FirstProject />
        <SecondProject />
        <NinethProject />
        <SixthProject />
        <EightProject />
        <SeventhProject />
        <ThirdProject />
        <FourthProject />
        <FifthProject />

        <MyRepository />
        <Contact />
        <Footer />
      </main>
      <FloatButton.BackTop className="mr-14  max-sm:mr-0" />
    </>
  );
};

export default Home;
