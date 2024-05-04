import React from "react";
import { projects } from "../Data";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
const Mobile = ({ toggleViewMore }) => {
  const projectsToDisplay = toggleViewMore
    ? projects.slice(0, 15)
    : projects.slice(0, 10);
  return (
    <>
      {projectsToDisplay.map((project, index) => {
        return (
          <section
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            key={index}
            className="xl:hidden  sm:px-36   mt-10"
          >
            <a href={project.liveLink} target="_blank">
              <div className=" card mx-5 bg-[#112240] shadow-xl  rounded cursor-pointer">
                <figure>
                  <img
                    src={project.src}
                    alt="Shoes"
                    className=" object-cover"
                  />
                </figure>
                <div className="card-body  ">
                  <p className="  text-[#30d5da]">Featured Project</p>
                  <h1 className=" font-Noto text-3xl font-bold  text-[#64FFDA] ">
                    {project.title}
                  </h1>
                  <p className=" text-[#64FFDA]">{project.descriptions}</p>
                  <ul className="flex gap-5  uppercase flex-wrap max-sm:gap-y-3 max-xl:pb-5 text-sm mt-5 text-[#82b2d1] ">
                    {project.techStack.map((stack, index) => {
                      return <li key={index}>{stack}</li>;
                    })}
                  </ul>
                  <section className="flex gap-5 text-2xl  text-[#82b2d1]">
                    <a href={project.githubLink} target="_blank">
                      <PiGithubLogoBold />
                    </a>
                    <a href={project.liveLink} target="_blank">
                      <FaRegShareFromSquare />
                    </a>
                  </section>
                </div>
              </div>
            </a>
          </section>
        );
      })}
    </>
  );
};

export default Mobile;
