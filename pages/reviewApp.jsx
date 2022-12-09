import React from "react";
import Image from "next/image";
import Link from "next/link";
import reviewAppPhoto from "../public/assets/projects/client review app.png";
import { BsArrowRightShort, BsArrowReturnLeft } from "react-icons/bs";

const reviewApp = () => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          // object-position="center"
          src={reviewAppPhoto}
        />
        <div className="absolute top-[70%] w-full max-w-7xl left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Review App</h2>
          <h3>HTML · CSS · JavaScript</h3>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4 ">
          <p className="uppercase text-xl tracking-widest text-[#2D92FA]">
            Project
          </p>
          <h2 className=" py-4">Overview</h2>
          <p className="pb-2">
            This application could be implemented in a Review Section on a
            website. It maps over JSON and uses the data to populate the card.
          </p>
          <Link href="https://js-review-card.vercel.app/" target="_blank">
            <button className=" px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/docjulz/JS-Review-Card.git"
            target="_blank"
          >
            <button className=" px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className=" p-2">
            <p className=" text-center font-bold pb-2">Technology Used</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> HTML
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> JavaScript
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> CSS
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

export default reviewApp;
