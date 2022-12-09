import React from "react";
import Image from "next/image";
import cpp from "../public/assets/skills/cpp.png";
import reactImg from "../public/assets/skills/react.png";
import css from "../public/assets/skills/css.png";
import figma from "../public/assets/skills/figma.png";
import github from "../public/assets/skills/github.png";
import html from "../public/assets/skills/html.png";
import javascript from "../public/assets/skills/javascript.png";
import nextjs from "../public/assets/skills/nextjs.png";
import adobecreativecloud from "../public/assets/skills/adobe-creative-cloud.png";
import node from "../public/assets/skills/node.png";
import python from "../public/assets/skills/python.png";
import shopify from "../public/assets/skills/shopify.png";
import tailwind from "../public/assets/skills/tailwind.png";
import wordpress from "../public/assets/skills/wordpress.png";

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className=" max-w-7xl mx-auto flex flex-col py-16  justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#2D92FA] ">
          Skill
        </p>
        <h2 className=" py-4">Tools of Creation</h2>
        <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8  ">
          {/* UPDATE NEEDED: Create Props and pass down instead of repeat code */}
          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white ">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image src={html} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={css} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={javascript} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white ">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center ">
              <div>
                <Image src={reactImg} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={nextjs} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={node} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={tailwind} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={github} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={wordpress} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>WordPress</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={shopify} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Shopify</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={adobecreativecloud} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3 className=" text-center">Adobe Creative Suite</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={figma} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={python} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={cpp} alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>C++</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
