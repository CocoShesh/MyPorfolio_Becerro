import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
const CarRentalProject = () => {
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
              Car Rental
            </h1>
            <section className="w-[600px] h-[120px] z-10 bg-[#112240] mt-5 p-5  absolute left-0 font-Mono  text-orange-200 text-justify text-[15px] font-bold">
              <p className="text-justify font-bold font-Mono  text-orange-300">
                Discover the latest releases and timeless classics. Get ready to
                embark on thrilling journeys and experience gaming like never
                before. Start exploring and elevate your gaming experience
                today!
              </p>
            </section>
            <section className="mt-52  ">
              <ul className="flex gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
            </section>
            <section className="flex gap-5 mt-5 text-2xl">
              <a
                href=" https://github.com/CocoShesh/Car-Rental-App"
                target="_blank"
              >
                {" "}
                <PiGithubLogoBold />
              </a>

              <a href="https://luxury-cars-rental.netlify.app/" target="_blank">
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
          <a href="https://luxury-cars-rental.netlify.app/" target="_blank">
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src="/car-rental.jpg"
              alt=""
              className="w-[600px] h-[350px]   shadow-custom rounded-md "
            />
          </a>
        </section>
      </section>

      {/* responsive */}

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10 mt-10"
      >
        <a href="https://luxury-cars-rental.netlify.app/" target="_blank">
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
                Car Rental
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
                  href=" https://github.com/CocoShesh/Car-Rental-App"
                  target="_blank"
                >
                  {" "}
                  <PiGithubLogoBold />
                </a>

                <a
                  href="https://luxury-cars-rental.netlify.app/"
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

export default CarRentalProject;
