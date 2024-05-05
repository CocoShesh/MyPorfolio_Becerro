import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { BiLogoSpotify } from "react-icons/bi";
import { SiExpertsexchange } from "react-icons/si";
import useAOS from "../../hooks/UseAnimations";
const MyRepository = () => {
  useAOS();
  return (
    <>
      <section className=" mt-20 pt-10 grid gap-20 xl:grid-cols-2 lg:grid-cols-1 w-full 2xl:grid-cols-3 2xl:px-[20rem] max-sm:px-5 px-44  2xl:gap-10 ">
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          className="h-[200px]  p-10 bg-[#112240] rounded-2xl   uppercase text-sm"
        >
          <Link to="/repository">
            <h1 className=" leading-[4rem] font-bold  tracking-widest text-xl">
              Repositories
            </h1>
          </Link>
          <p className="text-[#76849c] font-bold">
            {" "}
            Peek under the hood! Here's where the code magic happens.
          </p>
          <section className="flex  h-20 mr-auto">
            <FiGithub className="text-[#ccd6f6]" />
          </section>
        </div>

        <Link to="/songs">
          <h1 className=" leading-[4rem] font-bold  tracking-widest text-xl">
            Songs
          </h1>
        </Link>
        <p className="text-[#76849c] font-bold">
          {" "}
          Let's get down! See If our musical tastes are a match mace in audio
        </p>
        <section className="flex  h-20 mr-auto">
          <BiLogoSpotify className="text-[#ccd6f6]" />
        </section>
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          className="h-[200px]  p-10 bg-[#112240] rounded-2xl   uppercase text-sm"
        >
          {/* <Link to="/job-exposure"> */}
          <h1 className=" leading-[4rem] font-bold  tracking-widest text-xl">
            Work Exposure
          </h1>
          {/* </Link> */}
          <p className="text-[#76849c] font-bold">
            Peek under the hood! Here's where the code magic happens.
          </p>
          <section className="flex  h-20 mr-auto">
            <SiExpertsexchange className="text-[#ccd6f6]" />
          </section>
        </div>
      </section>
    </>
  );
};

export default MyRepository;
