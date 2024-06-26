import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { Link, animateScroll as scroll } from "react-scroll";
import Loader from "../loader/Loader";
import useAOS from "../../hooks/UseAnimations";
import NavigationDrawer from "./Drawer/NavigationDrawer";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const scrollToTop = () => {
    setLoading(true);
    setTimeout(() => {
      scroll.scrollToTop();
      setLoading(false);
    }, 5000);
  };

  useAOS();

  return (
    <>
      {loading && <Loader />}
      <Headroom>
        <div className="navbar bg-[#0a192f] border-b  border-slate-800 h-20  ">
          <div className="navbar-start max-w-screen 2xl:w-2xl w-auto">
            <a href="/" onClick={scrollToTop}>
              <img
                src="/Images/logo2.png"
                alt=""
                className="w-[120px]  max-lg:w-20 h-16 cursor-pointer lg:pl-10"
              />
            </a>
          </div>
          <div className="navbar-end hidden lg:flex  w-full">
            <ul className="p-2 menu-horizontal gap-10 items-center text-[#56ddc0] font-bold ">
              <Link
                to="main"
                smooth={true}
                onClick={closeDrawer}
                className="hover:text-[#ccd6f6]"
              >
                <li>01. Home</li>
              </Link>
              <Link
                to="about"
                smooth={true}
                onClick={closeDrawer}
                className="hover:text-[#ccd6f6]"
              >
                <li>02. About</li>
              </Link>
              <Link
                to="education"
                smooth={true}
                onClick={closeDrawer}
                className="hover:text-[#ccd6f6]"
              >
                <li>03. Education</li>
              </Link>
              <Link
                to="Projects"
                smooth={true}
                onClick={closeDrawer}
                className="hover:text-[#ccd6f6]"
              >
                <li>04. Projects</li>
              </Link>
              <Link
                to="contact"
                smooth={true}
                onClick={closeDrawer}
                className="hover:text-[#ccd6f6]"
              >
                <li>05. Contacts</li>
              </Link>
              <li>
                <a
                  href="https://drive.google.com/file/d/1RA6v9Q784aamiljMKugciEEPJCPMQAG-/view"
                  target="_blank"
                  onClick={closeDrawer}
                >
                  <button className="border-white border h-10 w-20 ">
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
                className="btn btn-ghost px-2 -mr-3 lg:hidden"
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
      <NavigationDrawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </>
  );
};

export default Header;
