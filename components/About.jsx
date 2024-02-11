import React from "react";
import Image from "next/image";
// import julian from "../public/assets/Julian-selfie.jpg";
import julian from "../public/assets/Headshot-optimized.jpg";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-[80%] p-2 flex items-center">
      <div className=" max-w-7xl m-auto md:grid md:pt-28  grid-cols-4 gap-6">
        <div className="col-span-3">
          <h2 className=" py-4">Who Am I?</h2>
          {/* Left Side */}
          {/* <p className="uppercase text-xl tracking-widest text-[#2D92FA] ">
            About
          </p> */}
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            I have experience as a front-end developer and a successful track
            record leading a team of web developers building websites and
            applications. In addition, I have seven years experience in higher
            education, and a background in museums focused on digital
            engagement.
          </p>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            In graduate school, I focused on digital engagement in museums and
            wrote my thesis on how museum guests interact with technologies. I
            also interned at a tech-company that developed interactive tours for
            museums and nonprofit organizations.
          </p>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            Since graduate school, I formed two software services
            MissionDriven365 where I consulted with organizations to develop
            digital engagement plans and South County Creative where I focus on
            helping small business reach clients through web and graphic design.
          </p>
          <p>
            I am currently working at Cal State Long Beach as a web developer
            and supervise a team of four. In a short period of time, we have
            completely redesigned the Recreation Centers website, built
            applications and event pages pushed to the entire student
            population, and are using modern web conventions, libraries, and
            frameworks to redesign all websites built with an outdated version
            of Joomla. We are currently using React to re-develop 22 West Media
            which will utilize a variety of frameworks, API’s, and features.
            This is something no other Cal State campus has done to this point.
          </p>
          <p className=" pt-2 text-gray-600 lg:pr-10 text-justify">
            I am proficient in Project management software like Basecamp,
            Airtable, Jira and Trello. I know how to write code, using HTML,
            CSS, JavaScript, ReactJS, WordPress and Joomla, along with graphic
            design tools like Adobe Illustrator, Photoshop, and Figma. I am also
            familiar with C++, PHP, SQL, NodeJS, NextJS and Tailwind.
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
