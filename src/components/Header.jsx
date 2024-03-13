import React, { useState } from "react";
import Headroom from "react-headroom";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Headroom>
        <div className="navbar bg-[#0a192f] border-b  border-slate-800 h-20  ">
          <div className="navbar-start max-w-screen 2xl:w-2xl">
            <Link to="main" smooth={true} onClick={scrollToTop}>
              <img
                src="/logo2.png"
                alt=""
                className="w-50 h-16 cursor-pointer lg:pl-10"
              />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex  w-full">
            <ul className="p-2 menu-horizontal gap-10 items-center text-[#56ddc0] font-bold font-Mono">
              <Link to="main" smooth={true} onClick={closeDrawer}>
                <li>01. Home</li>
              </Link>
              <Link to="about" smooth={true} onClick={closeDrawer}>
                <li>02. About</li>
              </Link>
              <Link to="education" smooth={true} onClick={closeDrawer}>
                <li>03. Education</li>
              </Link>
              <Link to="Projects" smooth={true} onClick={closeDrawer}>
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
                  <button className="border-white border-2 h-10 w-20 ">
                    Resume
                  </button>
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="lg:flex pr-5 items-center ml-auto">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost pr-0 lg:hidden"
                onClick={toggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Headroom>
      {isDrawerOpen && (
        <div className="drawer z-20">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
          />
          <div className="drawer-side overflow-hidden ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay "
              onClick={closeDrawer}
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-[#0a192f] pl-24  text-[#56ddc0] font-bold font-Mono  text-xl pt-32 gap-5 ">
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

export default Header;
