import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCodepen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFigma, FaChevronCircleUp } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen ">
      <div className=" max-w-7xl m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#2D92FA]">
          Contact
        </p>
        <h2 className=" py-4">Lets Chat</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/* Left column */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/assets/web-developer-img.jpg"
                  alt="/"
                  width="1200"
                  height="1000"
                />
              </div>
              <div>
                <h2 className=" pb-2 pt-4 md:pt-8 lg:pt-4">Julian Miller</h2>
                <p className="">Front-End Developer</p>
                <p className=" py-4">
                  I am a freelancer and also open for full-time employment. Look
                  forward to hearing from you!
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8 text-center">Lets Chat!</p>
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
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}

          <div className=" col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4">
            <div className=" p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Name</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Phone</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Email</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Subject</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Message</label>
                  <textarea
                    className=" border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="flex items-center justify-center mt-4 h-auto w-full hover:scale-105 hover:text-white ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex justify-center py-12">
          <Link href="/">
            <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 ">
              <FaChevronCircleUp
                className=" m-auto text-[#2D92FA] hover:text-[#c2649a] hover:bg-white"
                size={30}
              />
              <p className=" text-xs text-[#c2649a] hover:bg-white ">
                back to top
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
