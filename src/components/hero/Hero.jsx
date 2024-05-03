import React, { useState } from "react";
import TechStack from "../techstack/TechStack";

const placeholderImage =
  "https://fakeimg.pl/600x400/ccd6f6/0a192f?text=Nard&font=bebas";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="hero min-h-screen sm:px-32 font-bold ">
        <div className="hero-content flex-col lg:gap-28 lg:flex-row-reverse  ">
          {!imageLoaded && (
            <img
              src={placeholderImage}
              alt="placeholder"
              className="sm:max-w-sm xs:max-w-auto animate-pulse h-[400px] w-[400px] rounded-full brightness-75"
            />
          )}
          <img
            src="/Images/profile-pic.png"
            alt="profile"
            className={`sm:max-w-sm xs:max-w-auto rounded-lg brightness-75 hover:brightness-100 ${
              imageLoaded ? "visible" : "hidden"
            }`}
            onLoad={handleImageLoad}
          />
          <div>
            <p className="text-3xl max-sm:pt-5 max-sm:pb-5  ">Hi, my name is</p>
            <h1 className="text-6xl max-sm:text-5xl leading-normal text-[#ccd6f6]">
              Glenard Becerro
            </h1>
            <p className="py-6 text-[#7992b0] pt-5 max-sm:text-lg ">
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
