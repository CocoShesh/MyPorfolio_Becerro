import React from "react";
import { FiGithub, FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
const SocialMediaAccounts = () => {
  const email = "glenardrefamonte1@gmail.com";
  return (
    <>
      <section className="flex max-sm:hidden flex-col fixed bottom-1  left-16 gap-7 items-center text-3xl text-[#8892b0]">
        <a
          href="https://github.com/CocoShesh"
          target="_blank"
          className="hover:scale-110 tooltip tooltip-info"
          data-tip="Github"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.instagram.com/itsmenardskie/ "
          target="_blank"
          className="hover:scale-110 tooltip tooltip-info"
          data-tip="Instagram"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.facebook.com/your.nard/"
          target="_blank"
          className="hover:scale-110 tooltip tooltip-info"
          data-tip="Facebook"
        >
          <FiFacebook />
        </a>
        <a
          href=" https://www.linkedin.com/in/glenard-refamonte-875328282/"
          className="hover:scale-110 tooltip tooltip-info"
          target="_blank"
          data-tip="Linkedin"
        >
          <FiLinkedin />
        </a>
        <div className="h-20  border-[1px] border-[#378c84]"></div>
      </section>
      <section className=" flex  max-sm:hidden flex-col items-center fixed -right-12 bottom-1 gap-28 text-[#8892b0]">
        <a
          href={`mailto:${email}`}
          className=" rotate-90  text-sm font-Mono  font-bold"
        >
          {email}
        </a>
        <div className="h-20  border-[1px] border-[#378c84]"></div>
      </section>
    </>
  );
};

export default SocialMediaAccounts;
