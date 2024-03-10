import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const FifthProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" flex  flex-col mx-auto max-xl:hidden   gap-20  mt-20  px-44 justify-center items-center scroll-smooth">
        <section className="flex ">
          <a href="https://game-app-cocoshesh.vercel.app/" target="_blank">
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src="/games-preview.png"
              alt=""
              className="w-[600px] h-[350px]   shadow-custom rounded-md "
            />
          </a>
          <section
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" text-right relative w-[600px] 2xl:w-[500px] h-auto"
          >
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Games Store
            </h1>
            <section className="w-[600px] h-[130px] bg-[#112240] mt-5 p-5 absolute right-0 font-Mono">
              <p className="text-justify font-bold font-Mono  text-orange-300">
                Discover the latest releases and timeless classics. Get ready to
                embark on thrilling journeys and experience gaming like never
                before. Start exploring and elevate your gaming experience
                today!
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex justify-end gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
            </section>
            <section className="flex gap-5 justify-end mt-5 text-2xl">
              <a href=" https://github.com/CocoShesh/Game-App" target="_blank">
                {" "}
                <PiGithubLogoBold />
              </a>

              <a href="https://game-app-cocoshesh.vercel.app/" target="_blank">
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
        </section>
      </section>

      {/* responsive */}

      <section className="xl:hidden  sm:px-36 sm:pt-10 mt-10">
        <a href="https://game-app-cocoshesh.vercel.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl rounded  cursor-pointer">
            <figure>
              <img
                src="/games-preview.png"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#64FFDA]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold  text-[#30d5da] ">
                Games Store
              </h1>
              <p className=" text-[#64FFDA]">
                Discover the latest releases and timeless classics. Get ready to
                embark on thrilling journeys and experience gaming like never
                before.
              </p>
              <ul className="flex  gap-5 font-Mono uppercase  mt-5 text-sm text-[#64FFDA] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
              <section className="flex gap-5   text-2xl text-[#82b2d1]">
                <a
                  href=" https://github.com/CocoShesh/Game-App"
                  target="_blank"
                >
                  {" "}
                  <PiGithubLogoBold />
                </a>

                <a
                  href="https://game-app-cocoshesh.vercel.app/"
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

export default FifthProject;
