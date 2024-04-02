import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazyload";
const YoutubeClone = () => {
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
              Youtube Clone
            </h1>
            <section className="w-[600px] h-[130px] z-10 bg-[#112240] mt-5 p-5  absolute left-0 font-Mono  text-orange-200 text-justify text-[15px] font-bold">
              <p>
                I built this platform to hone my skills, particularly tackling
                the challenge of designing a responsive sidebar that adapts to
                various screen sizes. Despite the initial hurdles, I
                successfully completed the project, refining my abilities along
                the way.
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex gap-3 flex-wrap mb-3 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
                <li>Node Js</li>
                <li>Express Js</li>
                <li>MongoDB</li>
              </ul>
            </section>
            <section className="flex gap-5 mt-5 text-2xl">
              <a
                href="https://github.com/CocoShesh/youtube-client"
                target="_blank"
              >
                <PiGithubLogoBold />
              </a>
              <a
                href="https://youtube-clone-created-nard.netlify.app"
                target="_blank"
              >
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
          <a
            href="https://youtube-clone-created-nard.netlify.app"
            target="_blank"
          >
            <LazyLoad height={350} threshold={0.88}>
              <img
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src="/youtube-preview.png"
                alt=""
                className="w-[600px] h-[350px] shadow-custom rounded-md"
              />
            </LazyLoad>
          </a>
        </section>
      </section>

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10 mt-10"
      >
        <a
          href="https://youtube-clone-created-nard.netlify.app"
          target="_blank"
        >
          <div className=" card mx-5 bg-[#112240] shadow-xl  rounded cursor-pointer">
            <figure>
              <img
                src="/youtube-preview.png"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#30d5da]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold text-[#64FFDA] ">
                Youtube Clone
              </h1>
              <p className=" text-[#64FFDA]">
                I built this platform to hone my skills, particularly tackling
                the challenge of designing a responsive sidebar that adapts to
                various screen sizes. Despite the initial hurdles, I
                successfully completed the project, refining my abilities along
                the way.
              </p>
              <ul className="flex gap-3 flex-wrap mb-3 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
                <li>Node Js</li>
                <li>Express Js</li>
                <li>MongoDB</li>
              </ul>
              <section className="flex gap-5   text-2xl  text-[#82b2d1]">
                <a
                  href="https://github.com/CocoShesh/youtube-client"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://youtube-clone-created-nard.netlify.app"
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

export default YoutubeClone;
