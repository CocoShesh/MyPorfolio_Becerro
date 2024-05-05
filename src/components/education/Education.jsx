import useAOS from "../../hooks/UseAnimations";

const Education = () => {
  useAOS();

  const renderTimelineItem = (date, title, institution, description, index) => (
    <li
      className={index % 2 === 0 ? "timeline-item-right" : "timeline-item-left"}
    >
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
      <div
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className={
          index % 2 === 0
            ? "timeline-start md:text-end mb-10"
            : "timeline-end mb-10"
        }
      >
        <time className="italic text-[#64FFDA] ">{date}</time>
        <div className="text-[#64FFDA] text-xl font-semibold">{title}</div>
        <span className="text-[#4b9cd1]">{institution}</span>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
      <hr className="bg-primary" />
    </li>
  );

  return (
    <>
      <section className="pt-20 flex items-center justify-center w-full  ">
        <section className="flex flex-col items-start  2xl:w-[1500px] ">
          <section
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            className="flex sm:px-36 gap-3 text-3xl py-16 max-sm:pl-5 "
            id="education"
          >
            <section className="flex items-center gap-3 ">
              <span className=""> 03. </span>
              <h1 className="font-bold text-[#ccd6f6]"> Education. </h1>
              <div className="w-[300px] h-0 max-sm:hidden border border-[#233554]"></div>
            </section>
          </section>
          <section className="w-full items-center flex justify-center">
            <ul className="timeline w-1/2 timeline-snap-icon max-md:timeline-compact timeline-vertical ">
              {renderTimelineItem(
                "2008-2014",
                "Elementary",
                "Sucat Elementary School",
                "Consistent Honor Student throughout Elementary School.",
                0
              )}
              {renderTimelineItem(
                "2014-2018",
                "High School",
                "Muntinlupa Bussines High School Sucat Annex - A",
                "Maintained Consistent Honor Student status throughout High School.",
                1
              )}
              {renderTimelineItem(
                "2018-2020",
                "Senior High School",
                "Informatics College Northgate",
                "Consistent Honor Student in the Information and Communication Technology (ICT) strand. Ranked 2nd in the overall class. Participated in various seminars, including 3D printing.",
                2
              )}
              {renderTimelineItem(
                "2020 - Present",
                "College",
                "Pamantasan Lungsod ng Muntinlupa",
                "Currently pursuing a degree in Bachelor of Science Major in Information Technology.",
                3
              )}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default Education;
