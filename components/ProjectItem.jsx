import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, alt, backgroundImg, skills, projectUrl }) => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-br from-[#1D293E] to-[#2D92FA] ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={alt}
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className=" text-2xl tracking-wider text-center text-[#F2F9FF]">
          {title}
        </h3>
        <p className=" pb-4 pt-2 text-[#F2F9FF] text-center">{skills}</p>
        <Link href={projectUrl}>
          <p className=" text-center py-3 rounded-md bg-[#F2F9FF] text-[#2D92FA] font-bold cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
