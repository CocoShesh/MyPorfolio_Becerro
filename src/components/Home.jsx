import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import SocialMediaAccounts from "./SocialMediaAccounts";
import About from "./About";
import Education from "./Education";
import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";
import FourthProject from "./FourthProject";
import FifthProject from "./FifthProject";
import SixthProject from "./SixthProject";
import SeventhProject from "./SeventhProject";
import EightProject from "./EightProject";
import MyRepository from "./MyRepository";
import Contact from "./Contact";
import Footer from "./Footer";
import { FloatButton } from "antd";
import NinethProject from "./NinethProject";
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
        <ThirdProject />
        <FourthProject />
        <FifthProject />
        <SixthProject />
        <SeventhProject />
        <EightProject />
        <MyRepository />
        <Contact />
        <Footer />
      </main>
      <FloatButton.BackTop className="mr-14 " />
    </>
  );
};

export default Home;
