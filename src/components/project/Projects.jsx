import React, { useState } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { projects } from "./Data";
import Mobile from "./mobile/Mobile";
import MoreProjects from "./more/MoreProjects";
import useAOS from "../../hooks/UseAnimations";

const Projects = () => {
  useAOS();
  const [toggleViewMore, setToggleViewMore] = useState(false);
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center max-xl:items-start ">
        <section className="flex items-start flex-col">
          <section
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex sm:px-40 gap-3 text-3xl pt-16   "
            id="Projects"
          >
            <section className="flex  items-center gap-3 pl-3">
              <span className=""> 04. </span>
              <h1 className="font-bold text-[#ccd6f6]"> Projects. </h1>
              <div className="w-[300px] max-sm:hidden border border-[#233554]"></div>
            </section>
          </section>
          {projects.slice(0, 10).map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={index}
                className={`flex flex-col mx-auto max-xl:hidden gap-20 mt-20   px-44 justify-center items-center scroll-smooth `}
              >
                <section className={`flex  ${isEven && "flex-row-reverse"}`}>
                  <a href={project.liveLink} target="_blank">
                    <img
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      src={project.src}
                      alt=""
                      className="w-[600px] h-[350px]  shadow-custom rounded-md"
                    />
                  </a>
                  <section
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className={` relative   ${
                      isEven ? "text-left" : "text-right"
                    }  relative w-[600px] 2xl:w-[500px] h-auto`}
                  >
                    <p className=" text-[#9ca7c6]">Featured Project</p>
                    <h1 className=" text-3xl font-bold text-[#64ffda]">
                      {project.title}
                    </h1>
                    <section
                      className={`w-[600px] h-fit bg-[#112240] mt-5 p-5 absolute ${
                        isEven ? "left-0" : "right-0"
                      } `}
                    >
                      <p
                        className={` font-bold text-sm  text-[#64ffda] tracking-wider leading-6 brightness-75  ${
                          isEven ? "text-left" : "text-right"
                        }`}
                      >
                        {project.descriptions}
                      </p>
                    </section>
                    <section className="mt-52">
                      <ul
                        className={`flex  ${
                          isEven ? "justify-start" : "justify-end"
                        } gap-5  uppercase text-[#9ca7c6]`}
                      >
                        {project.techStack.map((stack, index) => {
                          return <li key={index}>{stack}</li>;
                        })}
                      </ul>
                    </section>
                    <section
                      className={`flex gap-5 ${
                        isEven ? "justify-start" : "justify-end"
                      }  mt-5 text-2xl`}
                    >
                      <a href={project.githubLink} target="_blank">
                        <PiGithubLogoBold />
                      </a>
                      <a href={project.liveLink} target="_blank">
                        <FaRegShareFromSquare />
                      </a>
                    </section>
                  </section>
                </section>
              </section>
            );
          })}
        </section>
      </section>

      <Mobile toggleViewMore={toggleViewMore} />
      <MoreProjects
        setToggleViewMore={setToggleViewMore}
        toggleViewMore={toggleViewMore}
      />
    </>
  );
};

export default Projects;
