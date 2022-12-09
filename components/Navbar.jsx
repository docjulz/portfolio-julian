import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCodepen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";
import { useRouter } from "next/router";
import jmLogo from "../public/assets/jm-logo-initial.png";

const Navbar = () => {
  //State
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#f0f8ff");
  const [linkColor, setLinkColor] = useState("#0e2f44");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/weather" ||
      router.asPath === "/weather" ||
      router.asPath === "/menu" ||
      router.asPath === "/websiteOne" ||
      router.asPath === "/websiteTwo" ||
      router.asPath === "/reviewApp" ||
      router.asPath === "/FAQapp"
    ) {
      setNavBg("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNavBg("#f0f8ff");
      setLinkColor("#0e2f44");
    }
  }, [router]);

  // Function to control Nav Menu on small devices
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleshadow = () => {
      if (window.scrollY >= 212) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      console.log(scrollY);
    };
    window.addEventListener("scroll", handleshadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg z-[999]"
          : "fixed w-full h20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* Lazy load image */}
        <Link href="/">
          <Image src={jmLogo} alt="Julian Miller Logo" className=" w-20 h-20" />
        </Link>
        <div className="">
          <ul style={{ color: `${linkColor}` }} className=" hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#c2649a]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#c2649a] ">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#c2649a]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#c2649a]">
                Project
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#c2649a]">
                Contact
              </li>
            </Link>
          </ul>
          {/* React Icon Menu */}
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer hover:text-[#c2649a]"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Menu Background Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F2F9FF] p-10 ease-in duration-500"
              : "fixed left-[-110%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className=" flex w-full items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <Image src={jmLogo} alt="/" className=" w-20 h-20" />
              </Link>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:text-[#c2649a]"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className=" w-[85%] md:w-[95%] py-4">
                Let's take your idea and make something awesome!
              </p>
            </div>
            <div className=" py-4 flex flex-col">
              <ul className=" uppercase  font-bold">
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#c2649a]"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#c2649a]"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#c2649a]"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#c2649a]"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#c2649a]"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className=" pt-28 ">
                <p className=" uppercase tracking-widest text-[#c2649a] font-bold">
                  Check me out...
                </p>
                {/* Social Icons */}
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%] text-[#1D293E]  ">
                  <a
                    href="https://www.linkedin.com/in/julianemiller/"
                    target="blank"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a]">
                      <AiOutlineLinkedin />
                    </div>
                  </a>
                  <a href="https://github.com/docjulz" target="blank">
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a]">
                      <AiOutlineGithub />
                    </div>
                  </a>
                  <a href="https://codepen.io/jmillerlbc" target="blank">
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a]">
                      <AiOutlineCodepen />
                    </div>
                  </a>
                  <a href="https://www.figma.com/@julianmiller" target="blank">
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a]">
                      <FaFigma />
                    </div>
                  </a>
                  <a href="mailto:julian.miller949@gmail.com" target="blank">
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a]">
                      <AiOutlineMail />
                    </div>
                  </a>
                  {/* <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a]">
                    <RiKakaoTalkLine />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
