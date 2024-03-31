import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const CornyJokeGenerator = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="flex justify-center max-xl:hidden items-center  px-44  mt-14 ">
        <a href="https://corny-joke-generator.vercel.app/" target="_blank">
          <img
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            src="Corny-Jokes-Preview.png"
            alt=""
            className="w-[600px] h-[350px]  object-fill   shadow-custom rounded-lg"
          />
        </a>
        <section
          data-aos="fade-left"
          className=" text-right relative w-[600px] 2xl:w-[500px] h-auto "
        >
          <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
          <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
            Corny Jokes Generator
          </h1>
          <section className="w-[600px] h-[130px] bg-[#112240] mt-5 px-4 py-5 absolute right-0 font-Mono font-bold  text-justify text-orange-200 text-[15px]">
            <p>
              Corny-Jokes-Generator is a whimsical project designed to bring
              laughter to users with its quirky algorithm that generates an
              endless array of light-hearted and amusing jokes. From puns to
              playful one-liners, it promises to be a delightful source of
              entertainment for all ages.
            </p>
          </section>
          <section className="mt-52  ">
            <ul className="flex justify-end  gap-5 font-Mono uppercase text-[#9ca7c6] ">
              <li>React Js</li>
              <li>Tailwind Css</li>
            </ul>
          </section>
          <section className="flex gap-5 justify-end mt-5 text-2xl">
            <a
              href="https://github.com/CocoShesh/Corny-Jokes-Generator/tree/main"
              target="_blank"
            >
              <PiGithubLogoBold />
            </a>
            <a href="https://corny-joke-generator.vercel.app/" target="_blank">
              <FaRegShareFromSquare />
            </a>
          </section>
        </section>
      </section>

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10 mt-10  "
      >
        <a href="https://corny-joke-generator.vercel.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl  rounded cursor-pointer">
            <figure>
              <img
                src="Corny-Jokes-Preview.png"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#30d5da]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold  text-[#64FFDA] ">
                Corny Jokes Generator
              </h1>
              <p className=" text-[#64FFDA]">
                Corny-Jokes-Generator is a whimsical project designed to bring
                laughter to users with its quirky algorithm that generates an
                endless array of light-hearted and amusing jokes. From puns to
                playful one-liners, it promises to be a delightful source of
                entertainment for all ages.
              </p>
              <ul className="flex gap-3 mb-3 font-Mono uppercase flex-wrap   text-sm mt-5 text-[#82b2d1] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
              <section className="flex gap-5 text-2xl  text-[#82b2d1]">
                <a
                  href="https://github.com/CocoShesh/Corny-Jokes-Generator/tree/main"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://corny-joke-generator.vercel.app/"
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

export default CornyJokeGenerator;
