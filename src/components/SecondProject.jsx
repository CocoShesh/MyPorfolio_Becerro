import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const SecondProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" flex  items-center justify-center mt-10  mx-auto  max-xl:hidden   gap-20   px-44 scroll-smooth">
        <section className="flex justify-center items-center ">
          <section
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" text-left relative w-[600px] 2xl:w-[500px] h-auto "
          >
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Cinema
            </h1>
            <section className="w-[600px] h-[160px] z-10 bg-[#112240] mt-5 p-5  absolute left-0 font-Mono  text-orange-200 text-justify text-[15px] font-bold">
              <p>
                Welcome to Cinema! Immerse yourself in a world of cinematic
                wonders, where stories come alive and emotions unfold on the big
                screen. Join us for an unforgettable experience filled with
                laughter, tears, and edge-of-your-seat moments.
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
            </section>
            <section className="flex gap-5 mt-5 text-2xl">
              <a
                href="https://github.com/CocoShesh/MovieCinema"
                target="_blank"
              >
                <PiGithubLogoBold />
              </a>
              <a href="https://movie-cinema-liart.vercel.app/" target="_blank">
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
          <a href="https://movie-cinema-liart.vercel.app/" target="_blank">
            <img
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src="/preview.jpg"
              alt=""
              className="w-[600px] h-[350px] shadow-custom rounded-md"
            />
          </a>
        </section>
      </section>

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10 mt-10"
      >
        <a href="https://movie-cinema-liart.vercel.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl  rounded cursor-pointer">
            <figure>
              <img src="/preview.jpg" alt="Shoes" className=" object-cover" />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#30d5da]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold text-[#64FFDA] ">
                Cinema
              </h1>
              <p className=" text-[#64FFDA]">
                Welcome to Cinema! Immerse yourself in a world of cinematic
                wonders, where stories come alive and emotions unfold on the big
                screen.
              </p>
              <ul className="flex  gap-5 font-Mono uppercase text-sm  mt-5 text-[#64FFDA] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
              <section className="flex gap-5   text-2xl  text-[#82b2d1]">
                <a
                  href="https://github.com/CocoShesh/MovieCinema"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://movie-cinema-liart.vercel.app/"
                  target="_blank"
                >
                  <FaRegShareFromSquare />
                </a>
              </section>
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default SecondProject;
