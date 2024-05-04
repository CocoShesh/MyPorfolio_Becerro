import useAOS from "../../hooks/UseAnimations";
const About = () => {
  useAOS();
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center ">
        <section className="flex items-start flex-col">
          <section
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex items-center sm:px-36 gap-3 text-3xl py-16 max-sm:pl-5 "
            id="about"
          >
            <section className="flex gap-3">
              <span> 02. </span>
              <h1 className="font-bold text-[#ccd6f6]"> About Me. </h1>
            </section>
          </section>

          <div className="hero sm:px-32 font-bold">
            <div className="hero-content flex-col lg:flex-row gap-20">
              <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src="/Images/second_pic.jpg"
                alt=""
                className="sm:max-w-sm xs:max-w-auto rounded-lg brightness-75 hover:brightness-100"
              />

              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p className="text-[16px] 2xl:text-lg indent-10 text-justify text-[#67738e]">
                  As a fourth-year student deeply passionate about web
                  development, I am currently seeking a job opportunity to apply
                  and further develop my skills in a professional environment.
                  With a solid foundation nurtured through academic coursework
                  and self-directed learning from diverse resources, such as
                  YouTube videos, tutorials, and documentation, I am equipped
                  with a versatile toolkit to tackle challenges in the field.
                </p>
                <br />
                <p className="text-[16px] 2xl:text-lg indent-10 text-justify text-[#67738e]">
                  Driven by curiosity and a hunger for hands-on experience, I am
                  enthusiastic about applying my knowledge to real-world
                  projects and collaborating with experienced professionals. My
                  goal is not only to enhance my technical proficiency but also
                  to make a tangible impact within the organization, leveraging
                  creativity and problem-solving skills to deliver innovative
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
