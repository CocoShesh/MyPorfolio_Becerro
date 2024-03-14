import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
const NinethProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" flex  flex-col mx-auto max-xl:hidden   gap-20  mt-20  px-44 justify-center items-center scroll-smooth">
        <section className="flex ">
          <a
            href="https://dictionary-app-created-nard.netlify.app"
            target="_blank"
          >
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src="/car-rental.jpg"
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
              Dictionary App
            </h1>
            <section className="w-[600px] h-[130px] bg-[#112240] mt-5 p-5 absolute right-0 font-Mono">
              <p className="text-justify font-bold font-Mono  text-orange-300">
                "Dictionary" is a project where I practice working with APIs.
                Users can explore words, customize fonts and themes to their
                liking, and listen to word pronunciations, making it a
                comprehensive tool for language enthusiasts and learners alike.
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex justify-end gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
                <li> Axios</li>
              </ul>
            </section>
            <section className="flex gap-5 justify-end mt-5 text-2xl">
              <a
                href=" https://github.com/CocoShesh/Dictionary-app"
                target="_blank"
              >
                {" "}
                <PiGithubLogoBold />
              </a>

              <a
                href="https://dictionary-app-created-nard.netlify.app"
                target="_blank"
              >
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
        </section>
      </section>

      {/* responsive */}

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10 mt-10"
      >
        <a
          href="https://dictionary-app-created-nard.netlify.app"
          target="_blank"
        >
          <div className=" card mx-5 bg-[#112240] shadow-xl rounded  cursor-pointer">
            <figure>
              <img
                src="/car-rental.jpg"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#64FFDA]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold  text-[#30d5da] ">
                Dictionary App
              </h1>
              <p className=" text-[#64FFDA]">
                "Dictionary" is a project where I practice working with APIs.
                Users can explore words, customize fonts and themes to their
                liking, and listen to word pronunciations, making it a
                comprehensive tool for language enthusiasts and learners alike.
              </p>
              <ul className="flex  gap-5 font-Mono uppercase  mt-5 text-sm text-[#64FFDA] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
                <li> Axios</li>
              </ul>
              <section className="flex gap-5   text-2xl text-[#82b2d1]">
                <a
                  href=" https://github.com/CocoShesh/Dictionary-app"
                  target="_blank"
                >
                  {" "}
                  <PiGithubLogoBold />
                </a>

                <a
                  href="https://dictionary-app-created-nard.netlify.app"
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

export default NinethProject;
