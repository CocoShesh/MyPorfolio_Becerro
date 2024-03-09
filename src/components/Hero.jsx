import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <>
      {/* <section
        id="hero"
        className="flex mx-auto items-center justify-center gap-10 my-20 px-20 font-Noto font-bold"
      >
        <section>
          <p className="text-lg font-Mono pl-3">Hi, my name is</p>
          <h1 className="text-7xl leading-normal text-[#ccd6f6]">
            Glenard Becerro
          </h1>g
          <h1 className="text-7xl text-[#8892b0]">Front-End Developer</h1>
          <p className="w-[550px]  text-[#7992b0] pt-7">
            Passion-driven and dedicated to creating websites. I am eager to
            apply my extensive knowledge in web development to craft innovative
            and user-friendly online experiences.
          </p>
          <TechStack />
        </section>
        <section>
          <img
            src="./public/profile-pic.png"
            alt="profile"
            className="h-[300px] w-[300px] rounded-full border-black border-4 brightness-75 hover:brightness-100"
          />
        </section>
      </section> */}
      <div className="hero min-h-screen sm:px-32 font-bold font-Noto">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <img
            src="/profile-pic.png"
            alt="profile"
            // className=" rounded-full border-black border-4 brightness-75 hover:brightness-100"
            className="sm:max-w-sm xs:max-w-auto  rounded-lg  brightness-75 hover:brightness-100"
          />
          <div>
            <p className="text-3xl  font-Mono pl-3">Hi, my name is</p>
            <h1 className="text-6xl leading-normal text-[#ccd6f6]">
              Glenard Becerro
            </h1>
            <p className="py-6 text-[#7992b0] pt-7 ">
              {" "}
              Passion-driven and dedicated to creating websites. I am eager to
              apply my extensive knowledge in web development to craft
              innovative and user-friendly online experiences.
            </p>
            <TechStack />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
