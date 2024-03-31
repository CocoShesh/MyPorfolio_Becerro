import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IpAddressTracker from "./Ip_Address_Tracker";
import YoutubeClone from "./Youtube_Clone";
import SocialLinksProfile from "./Social_Links_Profile";
import MultiForm from "./Multi_Form_state";
import CornyJokeGenerator from "./Corny_Jokes_Generator";
const MoreProjects = () => {
  const [toggleViewMore, setToggleViewMore] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {toggleViewMore && (
        <>
          <IpAddressTracker />
          <YoutubeClone />
          <SocialLinksProfile />
          <MultiForm />
          <CornyJokeGenerator />
        </>
      )}
      <section className="mt-20 flex flex-col justify-center items-center">
        <button
          onClick={() => setToggleViewMore(!toggleViewMore)}
          className="w-32 h-14 border border-[#ccd6f6] rounded-md font-Mono text-[#ccd6f6]"
        >
          {toggleViewMore ? "Show Less" : "View More"}
        </button>
      </section>
    </>
  );
};

export default MoreProjects;
