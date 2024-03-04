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
import contactImg from "../public/assets/web-developer-img.jpg";

function validateFormWithJS() {
  const name = document.querySelector("#name").value;
  const rollNumber = document.querySelector("#phone").value;

  if (!name) {
    alert("Please enter your name.");
    return false;
  }

  if (phone.length < 10) {
    alert(
      "Phone Number should be at least 10 digits long. No special characters"
    );
    return false;
  }
}

const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen ">
      <div className=" max-w-7xl m-auto px-2 py-16 md:pt-28 w-full">
        <p className="uppercase text-xl tracking-widest text-[#2D92FA]">
          Contact
        </p>
        <h2 className=" py-4">Lets Connect</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/*  */}
          {/* LEFT COLUMN */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div className="">
                <Image
                  className="rounded-xl  "
                  // layout="fill"
                  // objectFit="cover"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className=" pb-2 pt-4 md:pt-8 lg:pt-4">Julian Miller</h2>
                <p className="font-semibold">Front-End Developer</p>
                <p className=" py-4">
                  I am a web developer working at Associated Students, Inc. at
                  Cal State Long Beach and manage a team of 4 software
                  developers. Drop me a message if you are interested in
                  partnering on a new project or have any questions.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8 text-center">Lets Chat!</p>
                <div className=" flex items-center justify-center gap-4 max-w-sm m-auto py-4">
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

                  {/* <a href="https://codepen.io/jmillerlbc" target="_blank">
                    <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                      <AiOutlineCodepen size="1.5rem" />
                    </div>
                  </a> */}

                  {/* <a href="https://www.figma.com/@julianmiller" target="_blank">
                    <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                      <FaFigma size="1.5rem" />
                    </div>
                  </a> */}

                  <a href="mailto:julian.miller949@gmail.com" target="_blank">
                    <div className="rounded-2xl shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:text-[#c2649a] hover:bg-white">
                      <AiOutlineMail size="1.5rem" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <div className=" col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4">
            <div className=" p-4">
              <form onSubmit="validateFormWithJS()">
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label for="name" className=" uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      id="name"
                      minLength="3"
                    />
                  </div>

                  <div className=" flex flex-col">
                    <label for="phone" className=" uppercase text-sm py-2">
                      Phone
                    </label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      phone="phone"
                      id="phone"
                      minLength="10"
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
                <button
                  // type="submit"
                  className="flex  mt-4 h-auto  m-auto px-8 hover:drop-shadow-xl hover:text-white "
                >
                  Send Message
                </button>
                {/* <input type="reset" value="Reset" name="Reset"></input> */}
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
