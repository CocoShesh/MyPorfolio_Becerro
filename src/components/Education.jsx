import React from "react";

const Education = () => {
  return (
    <>
      <section className="pt-20" id="education">
        <section className="sm:mx-[10rem] max-sm:pl-5 flex items-center  text-3xl gap-3  mb-10 ">
          <span className=" font-Mono"> 03. </span>{" "}
          <h1 className=" font-Noto font-bold text-[#ccd6f6] "> Education </h1>{" "}
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
                <time className="font-mono italic">2008-2014</time>
                <div className="text-lg font-black ">Elementary</div> Sucat
                Elementary School
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
                <time className="font-mono italic">2014-2018 </time>
                <div className="text-lg font-black">High School</div>
                Muntinlupa Bussines High School Sucat Annex - A
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
                <time className="font-mono italic">2018-2020</time>
                <div className="text-lg font-black">Senior High School</div>
                Informatics College Northgate
                <p className="text-sm text-gray-500 mt-2">
                  Consistent Honor Student in the Information and Communication
                  Technology (ICT) strand.
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
                <time className="font-mono italic">2020 - Present</time>
                <div className="text-lg font-black">College</div>
                Pamantasan Lungsod ng Muntinlupa
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
    </>
  );
};

export default Education;
