import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const EightProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        data-aos="fade-right"
        className="flex items-center max-xl:hidden  sm:px-36 gap-3 text-3xl py-16 max-sm:pl-5 "
        id="Projects"
      >
        <section className=" flex gap-3 2xl:mx-auto">
          <span className=" font-Mono"> 03. </span>
          <h1 className=" font-Noto font-bold text-[#ccd6f6]">
            Some Things I’ve Built
          </h1>
        </section>
      </section>

      <section className="flex justify-center max-xl:hidden items-center  px-44 ">
        <a href="https://simple-timer-by-nard.netlify.app/" target="_blank">
          <img
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src="/timer.png"
            alt=""
            className="w-[600px] h-[350px] shadow-custom rounded-md"
          />
        </a>
        <section
          data-aos="fade-left"
          className=" text-right relative w-[600px] 2xl:w-[500px] h-auto "
        >
          <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
          <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
            Timer App
          </h1>
          <section className="w-[600px] h-[150px] bg-[#112240] mt-5 px-4 py-5 absolute right-0 font-Mono font-bold  text-justify text-orange-200 text-[15px]">
            <p>
              This sleek Timer app allows users to efficiently manage their time
              by providing essential timing features. Users can start, stop, and
              reset the timer, making it a handy tool for various activities.
              Whether you're working, studying, or simply keeping track of
              tasks, this Timer App has you covered.
            </p>
          </section>
          <section className="mt-52  ">
            <ul className="flex justify-end gap-5 font-Mono uppercase text-[#9ca7c6] ">
              <li>React Js,</li>
              <li>Tailwind Css,</li>
              <li>Visual Studio Code</li>
            </ul>
          </section>
          <section className="flex gap-5 justify-end mt-5 text-2xl">
            <a href="https://github.com/CocoShesh/Timer-App" target="_blank">
              <PiGithubLogoBold />
            </a>
            <a href="https://simple-timer-by-nard.netlify.app/" target="_blank">
              <FaRegShareFromSquare />
            </a>
          </section>
        </section>
      </section>
      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10  mt-10 "
      >
        <a href="https://simple-timer-by-nard.netlify.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl rounded cursor-pointer ">
            <figure>
              <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src="/timer.png"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#64FFDA]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold  text-[#30d5da]">
                Todo App
              </h1>
              <p className=" text-[#64FFDA]">
                This Todo app allows users to manage their tasks efficiently.
                Users can add, complete, and delete todos, filter them based on
                status, toggle between light and dark modes, and more.
              </p>
              <ul className="flex  gap-5 font-Mono uppercase  mt-5 text-sm text-[#64FFDA] ">
                <li>React Js</li>
                <li>Tailwind Css</li>

                <li>Visual Studio Code</li>
              </ul>
              <section className="flex gap-5   text-2xl text-[#64FFDA]">
                <a
                  href="https://github.com/CocoShesh/Timer-App"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://simple-timer-by-nard.netlify.app/"
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

export default EightProject;
