import React from "react";
import Image from "next/image";
import julian from "../public/assets/Julian-selfie.jpg";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-[80%] p-2 flex items-center">
      <div className=" max-w-7xl m-auto md:grid md:pt-28  grid-cols-4 gap-6">
        <div className="col-span-3">
          {/* Left Side */}
          <p className="uppercase text-xl tracking-widest text-[#2D92FA] ">
            About
          </p>
          <h2 className=" py-4">Who Am I?</h2>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            I have three years experience with web development and design, five
            years experience in higher education administration, and a
            background in museums focused on digital engagement.
          </p>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            In graduate school, I focused on digital engagement in museums and
            wrote my thesis on how museum guests interact with technologies in
            art galleries. I also interned at a tech-company that developed
            interactive tours for museums and nonprofit organizations.
          </p>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            Since graduate school, I formed two software services
            MissionDriven365 where I consulted with organizations to develop
            digital engagement plans and South County Creative where I focus on
            help small business reach clients through web and graphic design.
          </p>
          <p className=" pt-2 text-gray-600 lg:pr-10 text-justify">
            I am proficient in HTML, CSS, JavaScript, ReactJS, NodeJS, NextJS,
            Tailwinds and WordPress along with graphic design tools like the
            Adobe Creative Suite (Illustrator, InDesign, Xd, and Photoshop) and
            Figma. I am also familiar with C++, Python, and SQL.
          </p>
        </div>
        {/* Right Side */}
        <div className="  w-full h-auto m-auto md:shadow-sm  md:shadow-gray-400 rounded-xl flex items-center justify-center p-2 md:hover:scale-105 ease-in-out duration-300 md:hover:shadow-lg hover:shadow-gray-400">
          <Image src={julian} alt="Profile Picture" className=" rounded-xl " />
        </div>
      </div>
    </div>
  );
};

export default About;
