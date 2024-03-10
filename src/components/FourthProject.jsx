import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const FourthProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" flex justify-center  mt-20  mx-auto  max-xl:hidden  gap-20   px-44 scroll-smooth">
        <section className="flex justify-center items-center ">
          <section
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" text-left  relative w-[600px] 2xl:w-[500px] h-auto "
          >
            <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
              Tip Calculator
            </h1>
            <section className="w-[600px] h-[170px] bg-[#112240] mt-5 p-5 absolute left-0 font-Mono  text-orange-200 text-justify text-[15px] font-bold">
              <p>
                A tip calculator helps determine the appropriate gratuity for a
                bill. Users input the total amount, select a tip percentage, and
                specify the number of people splitting the bill. The calculator
                computes the tip, adds it to the bill, and divides the total
                among the group. It simplifies fair tip calculation when dining
                out or sharing expenses.
              </p>
            </section>
            <section className="mt-56  ">
              <ul className="flex gap-5 font-Mono uppercase text-[#9ca7c6] ">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Api</li>
              </ul>
            </section>
            <section className="flex gap-5 mt-5 text-2xl">
              <a
                href="https://github.com/CocoShesh/tip-calculator-app-main"
                target="_blank"
              >
                <PiGithubLogoBold />
              </a>
              <a
                href="https://tip-calculator-app-tau.vercel.app/"
                target="_blank"
              >
                <FaRegShareFromSquare />
              </a>
            </section>
          </section>
          <section
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <a
              href="https://tip-calculator-app-tau.vercel.app/"
              target="_blank"
            >
              <img
                src="/PREVIEW-3.png"
                alt=""
                className="w-[600px] z-[-1]  h-[350px] shadow-custom rounded-md"
              />
            </a>
          </section>
        </section>
      </section>{" "}
      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10  mt-10 "
      >
        <a href="https://tip-calculator-app-tau.vercel.app/" target="_blank">
          <div className=" card mx-5 bg-[#112240] shadow-xl rounded cursor-pointer ">
            <figure>
              <img src="/PREVIEW-3.png" alt="Shoes" className=" object-cover" />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#64FFDA]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold  text-[#30d5da]">
                Tip Calculator
              </h1>
              <p className=" text-[#64FFDA]">
                A tip calculator helps determine the appropriate gratuity for a
                bill. Users input the total amount, select a tip percentage, and
                specify the number of people splitting the bill.
              </p>
              <ul className="flex  gap-5 font-Mono uppercase  mt-5 text-sm text-[#64FFDA] ">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Api</li>
              </ul>
              <section className="flex gap-5   text-2xl text-[#64FFDA]">
                <a
                  href="https://github.com/CocoShesh/tip-calculator-app-main"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://tip-calculator-app-tau.vercel.app/"
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

export default FourthProject;
