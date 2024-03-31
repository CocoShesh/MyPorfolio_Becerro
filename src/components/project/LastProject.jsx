import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const LastProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" flex justify-center  mt-20  mx-auto  max-xl:hidden  gap-20   px-44 scroll-smooth">
        <section className="flex justify-center items-center ">
          <section
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" text-left  relative w-[600px] 2xl:w-[500px] h-auto "
          >
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Country App
            </h1>
            <section className="w-[600px] h-[170px] bg-[#112240] mt-5 p-5 absolute left-0 font-Mono  text-orange-200 text-justify text-[15px] font-bold">
              <p>
                Build a user-friendly IP Address Tracker web app using React Js,
                integrating the IP Geolocation API by IPify and LeafletJS for
                interactive map functionality, ensuring seamless user experience
                across devices.
              </p>
            </section>
            <section className="mt-56  ">
              <ul className="flex gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>React JS</li>
                <li>Lazy Loading</li>
                <li>Tailwind css</li>
              </ul>
            </section>
            <section className="flex gap-5 mt-5 text-2xl">
              <a
                href="https://github.com/CocoShesh/Country-App"
                target="_blank"
              >
                <PiGithubLogoBold />
              </a>
              <a
                href="https://country-app-v1-nard.netlify.app/"
                target="_blank"
              >
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
          <section
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <a href="https://country-app-v1-nard.netlify.app/" target="_blank">
              <img
                src="County_App_Preview.png"
                alt=""
                className="w-[600px] z-[-1]  h-[350px] shadow-custom rounded-md"
              />
            </a>
          </section>
        </section>
      </section>{" "}
      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10  mt-10 "
      >
        <a href="https://country-app-v1-nard.netlify.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl rounded cursor-pointer ">
            <figure>
              <img
                src="County_App_Preview.png"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#64FFDA]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold  text-[#30d5da]">
                Country App
              </h1>
              <p className=" text-[#64FFDA]">
                Build a user-friendly IP Address Tracker web app using React Js,
                integrating the IP Geolocation API by IPify and LeafletJS for
                interactive map functionality, ensuring seamless user experience
                across devices.
              </p>
              <ul className="flex  gap-5 font-Mono uppercase  mt-5 text-sm text-[#64FFDA] ">
                <li>React JS</li>
                <li>Lazy Loading</li>
                <li>Tailwind css</li>
              </ul>
              <section className="flex gap-5   text-2xl text-[#64FFDA]">
                <a
                  href="https://github.com/CocoShesh/Country-App"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://country-app-v1-nard.netlify.app/"
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

export default LastProject;
