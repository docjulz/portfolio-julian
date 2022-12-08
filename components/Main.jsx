import React from "react";
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

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600 pb-4">
            Creative solutions through Web Development and Design
          </p>
          <div>
            <h1 className="text-[#2D92FA]  flex justify-center items-center">
              Julian Miller
            </h1>
          </div>
          <h1>A Developer and Web Designer</h1>
          <p className=" py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Web Developer, Digital Engagement Manager, and Content
            Designer with experience developing websites and web applications
            using multiple frameworks and programming languages.
            <span className="text-[#c2649a] text-[0.6rem] px-1">
              /* I also like cats */.
            </span>
          </p>
          <div className=" flex items-center justify-between max-w-sm m-auto py-4">
            <a
              href="https://www.linkedin.com/in/julianemiller/"
              target="_blank"
            >
              <div className=" rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <AiOutlineLinkedin size="1.5rem" />
              </div>
            </a>

            <a href="https://github.com/docjulz" target="_blank">
              <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <AiOutlineGithub size="1.5rem" />
              </div>
            </a>

            <a href="https://codepen.io/jmillerlbc" target="_blank">
              <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <AiOutlineCodepen size="1.5rem" />
              </div>
            </a>

            <a href="https://www.figma.com/@julianmiller" target="_blank">
              <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <FaFigma size="1.5rem" />
              </div>
            </a>

            <a href="mailto:julian.miller949@gmail.com" target="_blank">
              <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <AiOutlineMail size="1.5rem" />
              </div>
            </a>

            {/* <a href="tel:9495330622" target="_blank">
              <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a]">
                <RiKakaoTalkLine size="1.5rem" />
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
