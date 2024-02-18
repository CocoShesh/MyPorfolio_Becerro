import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
const ThirdProject = () => {
  return (
    <>
      <section className=" flex  flex-col mx-auto max-xl:hidden  gap-20  mt-20  px-44 justify-center items-center scroll-smooth">
        <section className="flex justify-center items-center  ">
          <img
            src="/preview-2.png"
            alt=""
            className="w-[600px] h-[350px] object-cover  shadow-lg shadow-fuchsia-300 rounded-md "
          />
          <section className=" text-right relative  w-[600px] 2xl:w-[500px] h-auto">
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Corny Jokes Generator
            </h1>
            <section className="w-[600px] h-[130px] bg-[#112240] mt-5 p-5 absolute right-0 font-Mono">
              <p className="text-justify font-bold font-Mono  text-orange-300">
                Elevate your mood with a burst of joy! This app delivers
                delightful, cheesy jokes at the click of a button. Let the
                laughter begin!
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex justify-end gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Api</li>
              </ul>
            </section>
            <section className="flex gap-5 justify-end mt-5 text-2xl">
              <a
                href=" https://github.com/CocoShesh/Corny-Jokes-Generator"
                target="_blank"
              >
                {" "}
                <PiGithubLogoBold />
              </a>

              <a
                href="https://corny-joke-generator.vercel.app/"
                target="_blank"
              >
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
        </section>
      </section>

      <section className="xl:hidden  sm:px-36 sm:pt-10 mt-10  ">
        <div className=" card bg-[#112240] mx-5 shadow-xl  rounded">
          <figure>
            <img src="/preview-2.png" alt="Shoes" className=" object-cover" />
          </figure>
          <div className="card-body  ">
            <p className="font-Mono  text-[#30d5da]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold  text-[#64FFDA] ">
              Corny Jokes Generator
            </h1>
            <p className=" text-[#64FFDA]">
              This app creates light-hearted, cheesy jokes to brighten your day.
              Simply click a button and get a dose of laughter!
            </p>
            <ul className="flex gap-5 font-Mono uppercase  text-sm mt-5 text-[#64FFDA] ">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Api</li>
            </ul>
            <section className="flex gap-5  text-2xl text-[#82b2d1]">
              <a
                href=" https://github.com/CocoShesh/Corny-Jokes-Generator"
                target="_blank"
              >
                {" "}
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
      </section>
    </>
  );
};

export default ThirdProject;
