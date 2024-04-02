import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazyload";
const FurnitureProject = () => {
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
        <a href="https://ecoshope.netlify.app/" target="_blank">
          <LazyLoad height={350} threshold={0.88}>
            <img
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              src="/first.jpg"
              alt=""
              className="w-[600px] h-[350px]  object-fill shadow-custom   rounded-md"
            />
          </LazyLoad>
        </a>
        <section
          data-aos="fade-left"
          className=" text-right relative w-[600px] 2xl:w-[500px] h-auto "
        >
          <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
          <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
            Furniture Shop
          </h1>
          <section className="w-[600px] h-[150px] bg-[#112240] mt-5 px-4 py-5 absolute right-0 font-Mono font-bold  text-justify text-orange-200 text-[15px]">
            <p>
              A virtual furniture shop providing an extensive collection of
              handcrafted furniture pieces, blending modern aesthetics with
              timeless craftsmanship. Immerse yourself in a world of quality and
              comfort, where each piece reflects our commitment to exceptional
              design and functionality.
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
            <a href="https://ecoshope.netlify.app/" target="_blank">
              <FaRegShareFromSquare />
            </a>
          </section>
        </section>
      </section>

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-32  mt-20"
      >
        <section
          className="max-sm:pl-5 flex items-center  text-2xl gap-3   mb-10  pt-20 "
          id="projects"
        >
          <span className=" font-Mono"> 03. </span>
          <h1 className=" font-Noto font-bold text-[#ccd6f6] ">
            Some Things I’ve Built
          </h1>
        </section>
        <a href="https://ecoshope.netlify.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl  rounded cursor-pointer">
            <figure>
              <img src="/first.jpg" alt="Shoes" className=" object-cover" />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#30d5da]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold  text-[#64FFDA] ">
                Furniture Shop
              </h1>
              <p className=" text-[#64FFDA]">
                A virtual furniture shop providing an extensive collection of
                handcrafted furniture pieces, blending modern aesthetics with
                timeless craftsmanship.
              </p>
              <ul className="flex gap-5 font-Mono uppercase  text-sm mt-5 text-[#82b2d1] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
              <section className="flex gap-5 text-2xl  text-[#82b2d1]">
                <a
                  href=" https://github.com/CocoShesh/Furniture-shop"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a href="https://ecoshope.netlify.app/" target="_blank">
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

export default FurnitureProject;
