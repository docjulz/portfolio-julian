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
import Image from "next/image";
// import heroImg from "../public/assets/joel-filipe-Wc8k-KryEPM-unsplash.jpg";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-gradient-to-r from-slate-900 to-slate-700"
    >
      {/* <Image src={heroImg} /> */}
      <div className=" max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center">
        {/* <div className="object-cover ">
          <Image src={heroImg} alt="Geometric Shapes" />
        </div> */}
        <div className=" bg-slate-50/10 px-5 py-2 rounded-2xl mx-4">
          <p className=" uppercase text-sm tracking-widest text-gray-100 pb-4">
            Creative solutions through Web Development and Design
          </p>
          <div>
            <h1 className="text-[#2D92FA]  flex justify-center items-center">
              Julian Miller
            </h1>
          </div>
          <h1 className="text-gray-50">Web and Application Developer</h1>
          <p className=" py-4 text-gray-100 max-w-[70%] m-auto">
            I am a Web Developer, Digital Engagement Manager, and Content
            Designer with experience developing websites and applications using
            multiple frameworks and programming languages.
            <span className="text-[#feaddb] text-[0.6rem] px-1">
              /* I also like cats */.
            </span>
          </p>
          {/* Project Icons */}
          <div className=" flex items-center justify-between max-w-sm m-auto py-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/julianemiller/"
              target="_blank"
            >
              <div className=" rounded-2xl shadow-sm shadow-gray-400 p-3 bg-white cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <AiOutlineLinkedin size="1.5rem" />
              </div>
            </a>

            {/* Github */}
            <a href="https://github.com/docjulz" target="_blank">
              <div className="rounded-2xl shadow-sm shadow-gray-400 bg-white p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <AiOutlineGithub size="1.5rem" />
              </div>
            </a>

            {/* eMail */}
            <a href="mailto:julian.miller949@gmail.com" target="_blank">
              <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 bg-white cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                <AiOutlineMail size="1.5rem" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
