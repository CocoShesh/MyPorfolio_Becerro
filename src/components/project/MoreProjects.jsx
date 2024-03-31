import React from "react";
import Folder from "./UiComponents/Folder";
const MoreProjects = () => {
  return (
    <>
      <section className=" mt-20 flex flex-col justify-center items-center  ">
        <button className="w-32 h-14 border-[1px] rounded-md font-Mono border-[#ccd6f6]  text-[#ccd6f6]  ">
          View More
        </button>
      </section>
      <section
        className=" h-screen grid grid-cols-3 justify-center items-center border-2 border-black gap-5 px-44 "
        id="Contact"
      >
        <Folder>
          <h1 className="  font-Noto text-3xl font-bold text-[#64ffda] mt-8">
            News homepage{" "}
          </h1>
          <p className=" font-Mono mt-2 text-sm ">
            This website was created as a dedicated space for practicing and
            refining my CSS Grid skills.
          </p>
          <ul className="  font-Mono  font-bold flex gap-3 mt-12">
            <li>HTML</li>
            <li>CSS</li>
            <li>VsCode</li>
          </ul>
        </Folder>
        <Folder>
          <h1 className="  font-Noto text-2xl font-bold text-[#64ffda] mt-8">
            Testimonials grid section
          </h1>
          <p className=" font-Mono mt-2 text-sm ">
            This website was created as a dedicated space for practicing and
            refining my CSS Grid skills.
          </p>
          <ul className="  font-Mono  font-bold flex gap-3 mt-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>VsCode</li>
          </ul>
        </Folder>
        <Folder> </Folder>
      </section>
    </>
  );
};

export default MoreProjects;
