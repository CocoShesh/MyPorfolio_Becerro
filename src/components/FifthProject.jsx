import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
const FifthProject = () => {
  return (
    <>
      <section className=" flex  flex-col mx-auto max-xl:hidden   gap-20  mt-20  px-44 justify-center items-center scroll-smooth">
        <section className="flex ">
          <img
            src="/public/games-preview.png"
            alt=""
            className="w-[600px] h-[350px]  shadow-lg shadow-fuchsia-300 rounded-md "
          />
          <section className=" text-right relative w-[500px] h-auto">
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Games Store
            </h1>
            <section className="w-[500px] h-[130px] bg-[#112240] mt-5 p-5 absolute -left-24 font-Mono">
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

      <section className="xl:hidden  sm:px-44 sm:pt-44  mt-20">
        <div className=" card w-full bg-base-100 shadow-xl ">
          <figure>
            <img
              src="/public/games-preview.png"
              alt="Shoes"
              className=" object-cover"
            />
          </figure>
          <div className="card-body  ">
            <p className="font-Mono  text-white">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold  text-white ">
              Games Store
            </h1>
            <p className=" text-white">
              Discover the latest releases and timeless classics. Get ready to
              embark on thrilling journeys and experience gaming like never
              before. Start exploring and elevate your gaming experience today!
            </p>
            <ul className="flex justify-end gap-5 font-Mono uppercase  text-white ">
              <li>React Js</li>
              <li>Tailwind Css</li>
            </ul>
            <section className="flex gap-5 justify-end mt-5 text-2xl">
              <a href=" https://github.com/CocoShesh/Game-App" target="_blank">
                {" "}
                <PiGithubLogoBold />
              </a>

              <a href="https://game-app-cocoshesh.vercel.app/" target="_blank">
                <FaRegShareFromSquare />
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default FifthProject;
