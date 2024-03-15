import React, { useState } from "react";
import TechStack from "./TechStack";

// Placeholder image URL
const placeholderImage = "https://fakeimg.pl/600x400?text=Nard&font=bebas";

const Hero = () => {
  // State to track whether the image has loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  // Function to handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="hero min-h-screen sm:px-32 font-bold font-Noto">
        <div className="hero-content flex-col lg:gap-28 lg:flex-row-reverse  ">
          {/* Conditional rendering based on image load status */}
          {!imageLoaded && (
            <img
              src={placeholderImage}
              alt="placeholder"
              className="sm:max-w-sm xs:max-w-auto rounded-lg brightness-75"
            />
          )}
          <img
            src="/profile-pic.png"
            alt="profile"
            className={`sm:max-w-sm xs:max-w-auto rounded-lg brightness-75 hover:brightness-100 ${
              imageLoaded ? "visible" : "hidden"
            }`}
            onLoad={handleImageLoad}
          />
          <div>
            <p className="text-3xl font-Mono pl-3">Hi, my name is</p>
            <h1 className="text-6xl leading-normal text-[#ccd6f6]">
              Glenard Becerro
            </h1>
            <p className="py-6 text-[#7992b0] pt-7 ">
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
