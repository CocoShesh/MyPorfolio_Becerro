import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
const FourthProject = () => {
  return (
    <>
      <section className=" flex justify-center  mt-20  mx-auto  max-xl:hidden  gap-20   px-44 scroll-smooth">
        <section className="flex justify-center items-center ">
          <section className=" text-left relative w-[600px] 2xl:w-[550px] h-auto ">
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
          <section>
            <img
              src="/PREVIEW-3.png"
              alt=""
              className="w-[600px] h-[350px] shadow-lg shadow-fuchsia-300 rounded-md"
            />
          </section>
        </section>
      </section>{" "}
      <section className="xl:hidden  sm:px-44 sm:pt-10  mt-10 ">
        <div className=" card mx-5 bg-[#112240] shadow-xl ">
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
      </section>
    </>
  );
};

export default FourthProject;
