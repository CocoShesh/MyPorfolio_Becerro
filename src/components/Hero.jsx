import React, { useEffect } from "react";
import TechStack from "./TechStack";
import { CiImageOn } from "react-icons/ci";
const Hero = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="hero min-h-screen sm:px-32 font-bold font-Noto">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          {loading ? (
            <img
              src="/no-image.jpg"
              alt="profile"
              // className=" rounded-full border-black border-4 brightness-75 hover:brightness-100"
              className="sm:max-w-sm xs:max-w-auto h-[400px] animate-pulse rounded-full brightness-75 hover:brightness-100"
            />
          ) : (
            <img
              src="/profile-pic.png"
              alt="profile"
              // className=" rounded-full border-black border-4 brightness-75 hover:brightness-100"
              className="sm:max-w-sm xs:max-w-auto h-[400px]  rounded-lg  brightness-75 hover:brightness-100"
            />
          )}
          <div>
            <p className="text-3xl  font-Mono pl-3">Hi, my name is</p>
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

const Skeleton = () => {
  return (
    <div className="sm:max-w-sm  flex items-center text-gray-500 justify-center text-8xl rounded-full xs:max-w-auto h-[400px] bg-[#e4e5ea] animate-pulse  ">
      <CiImageOn />
    </div>
  );
};
