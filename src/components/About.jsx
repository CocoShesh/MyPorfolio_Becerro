import React from "react";

const About = () => {
  return (
    <>
      <section
        className="flex items-center sm:px-36 gap-3 text-3xl py-16 max-sm:pl-5 "
        id="about"
      >
        <section className=" flex gap-3 2xl:mx-auto">
          <span className=" font-Mono"> 02. </span>
          <h1 className=" font-Noto font-bold text-[#ccd6f6]"> About Me. </h1>
        </section>
      </section>
      <div className="hero  sm:px-32  font-bold font-Noto">
        <div className="hero-content flex-col lg:flex-row gap-20 ">
          <img
            src="/second_pic.jpg"
            alt=""
            className=" sm:max-w-sm xs:max-w-auto  rounded-lg  brightness-75 hover:brightness-100"
          />

          <div>
            <p className="text-lg font-Noto text-justify text-[#67738e]">
              As a fourth-year student with a foundational understanding of web
              development, seeking an internship opportunity where I can apply
              my current skills and gain hands-on experience in a professional
              setting, my knowledge, which I've acquired from various YouTube
              videos, tutorials, and documentation, has significantly
              contributed to my ability to understand and apply web development
              concepts. I am motivated to contribute to real-world projects,
              learn from experienced professionals, and enhance my web
              development capabilities while making a meaningful impact within
              the company.
            </p>
            {/* <TechStack /> */}
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default About;
