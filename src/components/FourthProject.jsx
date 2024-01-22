import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
const FourthProject = () => {
  return (
    <>
      <section className=" flex  mt-20  mx-auto  max-xl:hidden  gap-20   px-44 scroll-smooth">
        <section className=" text-left relative w-[500px] h-auto">
          <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
          <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
            Tip Calculator
          </h1>
          <section className="w-[550px] h-[170px] bg-[#112240] mt-5 p-5 absolute -right-26 font-Mono  text-orange-200 text-justify text-[15px] font-bold">
            <p>
              A tip calculator helps determine the appropriate gratuity for a
              bill. Users input the total amount, select a tip percentage, and
              specify the number of people splitting the bill. The calculator
              computes the tip, adds it to the bill, and divides the total among
              the group. It simplifies fair tip calculation when dining out or
              sharing expenses.
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
            className="w-[700px] h-[350px] shadow-lg shadow-fuchsia-300 rounded-md"
          />
        </section>
      </section>{" "}
      <section className="xl:hidden  sm:px-44 sm:pt-10  ">
        <div className=" card w-full bg-base-100 shadow-xl ">
          <figure>
            <img src="/PREVIEW-3.png" alt="Shoes" className=" object-cover" />
          </figure>
          <div className="card-body  ">
            <p className="font-Mono  text-white">Featured Project</p>
            <h1 className=" font-Noto text-3xl font-bold  text-white ">
              Tip Calculator
            </h1>
            <p className=" text-white">
              A tip calculator helps determine the appropriate gratuity for a
              bill. Users input the total amount, select a tip percentage, and
              specify the number of people splitting the bill. The calculator
              computes the tip, adds it to the bill, and divides the total among
              the group. It simplifies fair tip calculation when dining out or
              sharing expenses.
            </p>
            <ul className="flex justify-end gap-5 font-Mono uppercase  text-white ">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Api</li>
            </ul>
            <section className="flex gap-5 justify-end mt-5 text-2xl">
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
