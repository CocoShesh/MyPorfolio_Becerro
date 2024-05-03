import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import SocialMediaAccounts from "./social_media/SocialMediaAccounts";
import About from "./about/About";
import Education from "./education/Education";
import FurnitureProject from "./project/Furniture_Shop.jsx";
import CinemaProject from "./project/Cinema.jsx";
import WeatherAppProject from "./project/Weather_App";
import TipCalculatorProject from "./project/Tip_Calculator";
import GameStoreProject from "./project/Game_Store";
import TodoAppProject from "./project/Todo_App";
import CarRentalProject from "./project/Car_Rental.jsx";
import TimerAppProject from "./project/Timer_App";
import DictionaryAppProject from "./project/Dictionary_App.jsx";
import CountryAppProject from "./project/Country_Appt.jsx";
import MoreProjects from "./project/more/MoreProjects.jsx";
import MyRepository from "./repository/MyRepository";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { FloatButton } from "antd";
import Sample from "./project/Sample.jsx";

const Home = () => {
  return (
    <>
      <main className=" text-white " id="main">
        <Header />
        <Hero />
        <SocialMediaAccounts />
        <About />
        <Education />
        {/* <FurnitureProject />
        <CinemaProject />
        <DictionaryAppProject />
        <TodoAppProject />
        <TimerAppProject />
        <CarRentalProject />
        <WeatherAppProject />
        <TipCalculatorProject />
        <GameStoreProject />
        <CountryAppProject />
        <MoreProjects /> */}
        <Sample />
        <MyRepository />
        <Contact />
        <Footer />
      </main>
      <FloatButton.BackTop className="mr-14  max-sm:mr-0" />
    </>
  );
};

export default Home;
