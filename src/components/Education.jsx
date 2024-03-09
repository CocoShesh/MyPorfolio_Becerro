import React from "react";

const Education = () => {
  return (
    <>
      <section className="pt-20" id="education flex  ">
        <section className="max-w-screen  flex flex-col  justify-center">
          <section
            className="flex  sm:px-36 gap-3 text-3xl py-16 max-sm:pl-5 "
            id="education"
          >
            <section className=" flex gap-3 2xl:mx-auto">
              <span className=" font-Mono"> 02. </span>
              <h1 className=" font-Noto font-bold text-[#ccd6f6]">
                {" "}
                Educations.{" "}
              </h1>
            </section>
          </section>
          <section className="w-full items-center  flex justify-center">
            <ul className="timeline w-1/2 timeline-snap-icon max-md:timeline-compact timeline-vertical font-Mono">
              <li>
                <div className="timeline-middle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic text-[#64FFDA] ">
                    2008-2014
                  </time>
                  <div className=" text-[#64FFDA]  text-xl  font-semibold">
                    Elementary
                  </div>
                  <span className="text-[#4b9cd1]">
                    Sucat Elementary School
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    Consistent Honor Student throughout Elementary School.
                  </p>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic text-[#64FFDA] ">
                    2014-2018{" "}
                  </time>
                  <h1 className=" text-[#64FFDA] font-black  text-xl   ">
                    High School
                  </h1>
                  <span className="text-[#4b9cd1]">
                    Muntinlupa Bussines High School Sucat Annex - A
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    Maintained Consistent Honor Student status throughout High
                    School.
                  </p>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic text-[#64FFDA] ">
                    2018-2020
                  </time>
                  <h1 className=" text-[#64FFDA] font-black  text-xl   ">
                    Senior High School
                  </h1>
                  <span className="text-[#4b9cd1]">
                    Informatics College Northgate{" "}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    Consistent Honor Student in the Information and
                    Communication Technology (ICT) strand.
                    <br />
                    Ranked 2nd in the overall class.
                    <br />
                    Participated in various seminars, including 3D printing.
                  </p>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic text-[#64FFDA] ">
                    2020 - Present
                  </time>
                  <h1 className=" text-[#64FFDA] font-black  text-xl   ">
                    College
                  </h1>
                  <span className="text-[#4b9cd1]">
                    {" "}
                    Pamantasan Lungsod ng Muntinlupa{" "}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    Currently pursuing a degree in Bachelor of Science Major in
                    Information Technology.
                  </p>
                </div>
                <hr className="bg-primary" />
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default Education;
