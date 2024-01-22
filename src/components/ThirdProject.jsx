import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
const ThirdProject = () => {
  return (
    <>
      <section className=" flex  flex-col mx-auto max-xl:hidden  gap-20  mt-20  px-44 justify-center items-center scroll-smooth">
        <section className="flex ">
          <img
            src="/preview-2.png"
            alt=""
            className="w-[600px] h-[350px]  shadow-lg shadow-fuchsia-300 rounded-md "
          />
          <section className=" text-right relative w-[500px] h-auto">
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Corny Jokes Generator
            </h1>
            <section className="w-[500px] h-[130px] bg-[#112240] mt-5 p-5 absolute -left-24 font-Mono">
              <p className="text-justify font-bold font-Mono  text-orange-300">
                This app creates light-hearted, cheesy jokes to brighten your
                day. Simply click a button and get a dose of laughter!
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

      <section className="xl:hidden  sm:px-44 sm:pt-10 mt-10 ">
        <div className=" card w-full bg-base-100 shadow-xl ">
          <figure>
            <img src="/preview-2.png" alt="Shoes" className=" object-cover" />
          </figure>
          <div className="card-body  ">
            <p className="font-Mono  text-white">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold  text-white ">
              Corny Jokes Generator
            </h1>
            <p className=" text-white">
              This app creates light-hearted, cheesy jokes to brighten your day.
              Simply click a button and get a dose of laughter!
            </p>
            <ul className="flex justify-end gap-5 font-Mono uppercase  text-white ">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Api</li>
            </ul>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdProject;
