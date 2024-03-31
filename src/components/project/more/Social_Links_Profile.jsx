import React, { useEffect } from "react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const SocialLinksProfile = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="flex justify-center max-xl:hidden items-center  px-44  mt-10">
        <a
          href="https://social-links-profile-becerro.netlify.app"
          target="_blank"
        >
          <img
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            src="/social-links-preview.png"
            alt=""
            className="w-[600px] h-[350px]  object-fill   shadow-custom rounded-lg"
          />
        </a>
        <section
          data-aos="fade-left"
          className=" text-right relative w-[600px] 2xl:w-[500px] h-auto "
        >
          <p className="font-Mono text-[#9ca7c6]">Featured Project</p>
          <h1 className=" font-Noto text-3xl font-bold text-[#64ffda]">
            Social Links Profile
          </h1>
          <section className="w-[600px] h-[100px] bg-[#112240] mt-10 px-4 py-5 absolute right-0 font-Mono font-bold  text-justify text-orange-200 text-[15px]">
            <p>
              I created the 'Social_Links_Profile' feature to make it easy for
              users to find and connect with me on social media platforms
            </p>
          </section>
          <section className="mt-52  ">
            <ul className="flex justify-end gap-5 font-Mono uppercase text-[#9ca7c6] ">
              <li>React Js</li>
              <li>Tailwind Css</li>
            </ul>
          </section>
          <section className="flex gap-5 justify-end mt-5 text-2xl">
            <a
              href=" https://github.com/CocoShesh/Social_Links_Profile"
              target="_blank"
            >
              <PiGithubLogoBold />
            </a>
            <a
              href="https://social-links-profile-becerro.netlify.app"
              target="_blank"
            >
              <FaRegShareFromSquare />
            </a>
          </section>
        </section>
      </section>

      <section
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="xl:hidden  sm:px-36 sm:pt-10 mt-10"
      >
        <a
          href="https://social-links-profile-becerro.netlify.app"
          target="_blank"
        >
          <div className=" card mx-5 bg-[#112240] shadow-xl  rounded cursor-pointer">
            <figure>
              <img
                src="/social-links-preview.png"
                alt="Shoes"
                className=" object-cover"
              />
            </figure>
            <div className="card-body  ">
              <p className="font-Mono  text-[#30d5da]">Featured Project</p>
              <h1 className=" font-Noto text-3xl font-bold text-[#64FFDA] ">
                Social Links Profile
              </h1>
              <p className=" text-[#64FFDA]">
                I created the 'Social_Links_Profile' feature to make it easy for
                users to find and connect with me on social media platforms
              </p>
              <ul className="flex gap-3 flex-wrap mb-3 font-Mono uppercase text-[#9ca7c6] ">
                <li>React Js</li>
                <li>Tailwind Css</li>
              </ul>
              <section className="flex gap-5   text-2xl  text-[#82b2d1]">
                <a
                  href=" https://github.com/CocoShesh/Social_Links_Profile"
                  target="_blank"
                >
                  <PiGithubLogoBold />
                </a>
                <a
                  href="https://social-links-profile-becerro.netlify.app"
                  target="_blank"
                >
                  <FaRegShareFromSquare />
                </a>
              </section>
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default SocialLinksProfile;
