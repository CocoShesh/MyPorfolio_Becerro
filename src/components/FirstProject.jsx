import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
const FirstProject = () => {
  return (
    <>
      <section
        className=" flex  flex-col mx-auto max-xl:hidden  gap-20   h-screen  px-44 scroll-smooth"
        id="Projects"
      >
        <section className="text-2xl w-[700px]  pt-32 ">
          <section className="flex items-center  gap-3 ">
            <span className=" font-Mono"> 03. </span>
            <h1 className=" font-Noto font-bold text-[#ccd6f6]">
              Some Things I’ve Built
            </h1>
            <div className="border-[1px] border-[#233554] w-72 h-0 "></div>
          </section>
        </section>
        <section className="flex justify-center items-center">
          <img
            src="/public/first.png"
            alt=""
            className="w-[600px] h-[350px] object-cover shadow-lg shadow-fuchsia-300 rounded-md"
          />
          <section className=" text-right relative w-[500px] h-auto">
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Furniture Shop
            </h1>
            <section className="w-[600px] h-[150px] bg-[#112240] mt-5 px-4 py-5 absolute -left-44  font-Mono font-bold  text-justify text-orange-200 text-[15px]">
              <p>
                A virtual furniture shop providing an extensive collection of
                handcrafted furniture pieces, blending modern aesthetics with
                timeless craftsmanship. Immerse yourself in a world of quality
                and comfort, where each piece reflects our commitment to
                exceptional design and functionality.
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex justify-end gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
            </section>
            <section className="flex gap-5 justify-end mt-5 text-2xl">
              <a
                href=" https://github.com/CocoShesh/Furniture-shop"
                target="_blank"
              >
                <PiGithubLogoBold />
              </a>
              <a href="https://furniture-shop-hbae.vercel.app/" target="_blank">
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
        </section>
      </section>
      {/* 
      <div className="hero min-h-screen sm:px-36">
        <div className="hero-content flex-col lg:flex-row relative">
          <img
            src="/public/first.png"
            alt=""
            className=" w-[600px] sm:w-full rounded-lg shadow-2xl  max-sm:brightness-110"
          />
          <div className="text-right">
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda] mb-44">
              Furniture Shop
            </h1>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <section className="w-[600px] h-[150px] bg-[#112240a9] max-sm:bg-transparent mt-5 px-4 py-5 absolute  right-4 top-16 font-Mono font-bold  text-justify text-orange-200 text-[15px]">
              <p>
                A virtual furniture shop providing an extensive collection of
                handcrafted furniture pieces, blending modern aesthetics with
                timeless craftsmanship. Immerse yourself in a world of quality
                and comfort, where each piece reflects our commitment to
                exceptional design and functionality.
              </p>
            </section>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

      <section className="xl:hidden  sm:px-44 sm:pt-44  mt-20">
        <section
          className="max-sm:pl-5 flex items-center  text-2xl gap-3  mb-10  pt-20"
          id="projects"
        >
          <span className=" font-Mono"> 03. </span>{" "}
          <h1 className=" font-Noto font-bold text-[#ccd6f6] ">
            {" "}
            Some Things I’ve Built{" "}
          </h1>{" "}
        </section>
        <div className=" card w-full bg-base-100 shadow-xl ">
          <figure>
            <img
              src="/public/first.png"
              alt="Shoes"
              className=" object-cover"
            />
          </figure>
          <div className="card-body  ">
            <p className="font-Mono  text-white">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold  text-white ">
              Furniture Shop
            </h1>
            <p className=" text-white">
              A virtual furniture shop providing an extensive collection of
              handcrafted furniture pieces, blending modern aesthetics with
              timeless craftsmanship. Immerse yourself in a world of quality and
              comfort, where each piece reflects our commitment to exceptional
              design and functionality.
            </p>
            <ul className="flex justify-end gap-5 font-Mono uppercase  text-white ">
              <li>React Js</li>
              <li>Tailwind Css</li>
            </ul>
            <section className="flex gap-5 justify-end mt-5 text-2xl">
              <a
                href=" https://github.com/CocoShesh/Furniture-shop"
                target="_blank"
              >
                <PiGithubLogoBold />
              </a>
              <a href="https://furniture-shop-hbae.vercel.app/" target="_blank">
                <FaRegShareFromSquare />
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstProject;
