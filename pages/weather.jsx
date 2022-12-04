import React from "react";
import Image from "next/image";
import Link from "next/link";
import weatherApp from "../public/assets/projects/Weather App.png";
import { BsArrowRightShort, BsArrowReturnLeft } from "react-icons/bs";

const weather = () => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          // object-position="center"
          src={weatherApp}
        />
        <div className="absolute top-[70%] w-full max-w-7xl left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Weather App</h2>
          <h3>React · TailwindCSS · NextJS · Axios · API</h3>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4 ">
          <p className="uppercase text-xl tracking-widest text-[#2D92FA]">
            Project
          </p>
          <h2 className=" py-4">Overview</h2>
          <p className="pb-2">
            This is an application that pulls in an API from OpenWeather that
            displays the current weather conditions. The applicaiton was built
            using NextJS 13 and Tailwinds. What was most interesting about this
            was exploring the new features in NextJS like lazy loading the
            image. I chose this project not just because it was very visually
            appealing, but also because it was a simple way to use API's and
            key/values offered in the the Weather object.
          </p>
          <button className=" px-8 py-2 mt-4 mr-8">Demo</button>
          <button className=" px-8 py-2 mt-4">Code</button>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className=" p-2">
            <p className=" text-center font-bold pb-2">Technology Used</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> React
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> Tailwind
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> NextJS
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> Axios
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className=" mr-1" /> OpenWeather API
              </p>
            </div>
          </div>
        </div>
        <Link
          className=" flex items-center gap-3 hover:text-[#c2649a] hover:scale-105 ease-in duration-200 "
          href="/#projects"
        >
          Back to projects <BsArrowReturnLeft />
        </Link>
      </div>
    </div>
  );
};

export default weather;
