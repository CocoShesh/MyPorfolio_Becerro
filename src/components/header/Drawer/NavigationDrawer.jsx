import React, { useEffect } from "react";
import { Link } from "react-scroll";
const NavigationDrawer = ({ isDrawerOpen, closeDrawer }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isDrawerOpen ? "hidden" : "auto";
      return () => {
        body.style.overflow = "auto";
      };
    }
  }, [isDrawerOpen]);
  return (
    <>
      {isDrawerOpen && (
        <div className="drawer z-20 xl:hidden">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
          />
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="drawer-side overflow-hidden "
          >
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay "
              onClick={closeDrawer}
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-[#0a192f] pl-24  text-[#56ddc0] font-bold   text-xl pt-32 gap-5 ">
              <Link to="main" smooth={true} onClick={closeDrawer}>
                <li>01. Home</li>
              </Link>
              <Link to="about" smooth={true} onClick={closeDrawer}>
                <li>02. About</li>
              </Link>
              <Link to="education" smooth={true} onClick={closeDrawer}>
                <li>03. Education</li>
              </Link>
              <Link to="projects" smooth={true} onClick={closeDrawer}>
                <li>04. Projects</li>
              </Link>
              <Link to="contact" smooth={true} onClick={closeDrawer}>
                <li>05. Contacts</li>
              </Link>
              <li>
                <a
                  href="https://drive.google.com/file/d/1RA6v9Q784aamiljMKugciEEPJCPMQAG-/view"
                  target="_blank"
                  onClick={closeDrawer}
                >
                  <button className="border-white border-2 h-10 w-32 ">
                    Resume
                  </button>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationDrawer;
