import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const MultiFormState = () => {
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
              Multi Step Form
            </h1>
            <section className="w-[600px] h-[130px] z-10 bg-[#112240] mt-5 p-5  absolute left-0 font-Mono  text-orange-200 text-justify text-[15px] font-bold">
              <p>
                Build a multi-step form, closely matching the provided design,
                allowing users to progress through each step, review and edit
                their selections, and confirm their order
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex gap-3 flex-wrap mb-3 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
                <li>Zod</li>
                <li>Context Api</li>
              </ul>
            </section>
            <section className="flex gap-5 mt-5 text-2xl">
              <a
                href="https://github.com/CocoShesh/Multi-Step-Form"
                target="_blank"
              >
                <PiGithubLogoBold />
              </a>
              <a
                href="https://multi-step-form-sample.netlify.app/"
                target="_blank"
              >
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
          <a href="https://multi-step-form-sample.netlify.app/" target="_blank">
            <img
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src="/multi-step-preview.png"
              alt=""
              className="w-[600px] h-[350px] shadow-custom rounded-md"
            />
          </a>
        </section>
      </section>

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10 mt-10"
      >
        <a href="https://multi-step-form-sample.netlify.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl  rounded cursor-pointer">
            <figure>
              <img
                src="/multi-step-preview.png"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#30d5da]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold text-[#64FFDA] ">
                Multi Step Form
              </h1>
              <p className=" text-[#64FFDA]">
                Build a multi-step form, closely matching the provided design,
                allowing users to progress through each step, review and edit
                their selections, and confirm their order
              </p>
              <ul className="flex gap-3 flex-wrap mb-3 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
                <li>Zod</li>
                <li>Context Api</li>
              </ul>
              <section className="flex gap-5   text-2xl  text-[#82b2d1]">
                <a
                  href="https://github.com/CocoShesh/Multi-Step-Form"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://multi-step-form-sample.netlify.app/"
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

export default MultiFormState;
