import React from "react";

const About = () => {
  return (
    <>
      {/* <section className="text-3xl w-[550px] "> */}
      {/* <section className="flex items-center  gap-3  mb-10">
            <span className=" font-Mono"> 02. </span>{" "}
            <h1 className=" font-Noto font-bold text-[#ccd6f6]"> About Me </h1>{" "}
            <div className="border-[1px] border-[#233554] w-72 h-0 "></div>
          </section>
          <p className="text-lg font-Noto text-[#67738e]  ">
            As a fourth-year student with a foundational understanding of web
            development, seeking an internship opportunity where I can apply my
            current skills and gain hands-on experience in a professional
            setting, my knowledge, which I've acquired from various YouTube
            videos, tutorials, and documentation, has significantly contributed
            to my ability to understand and apply web development concepts. I am
            motivated to contribute to real-world projects, learn from
            experienced professionals, and enhance my web development
            capabilities while making a meaningful impact within the company.
          </p>
        </section>
        <section className=" h-fit relative ">
          <img
            src="/public/second_pic.jpg"
            alt=""
            className="h-[300px] w-[300px] object-fill  brightness-75 hover:scale-110  hover:brightness-100 border-4 border-black  "
          />
          <div className="w-[300px] absolute border-2 -z-10 border-white -right-10  h-[300px] top-10 ">
            {" "}
          </div>
        </section> */}

      <section
        className="flex items-center sm:px-36 gap-3 text-3xl py-16 max-sm:pl-5 "
        id="about"
      >
        <span className=" font-Mono"> 02. </span>{" "}
        <h1 className=" font-Noto font-bold text-[#ccd6f6]"> About Me. </h1>{" "}
      </section>
      <div className="hero  sm:px-32 font-bold font-Noto">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img
            src="/second_pic.jpg"
            alt=""
            className="max-w-xs rounded-lg  brightness-75 hover:brightness-100"
          />

          <div>
            <p className="text-lg font-Noto text-justify text-[#67738e]  ">
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
