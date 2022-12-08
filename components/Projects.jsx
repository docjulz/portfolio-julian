import Image from "next/image";
import Link from "next/link";
import React from "react";
import weatherAppPhoto from "../public/assets/projects/Weather App.png";
import menuApp from "../public/assets/projects/Menu App.png";
import websitePhotoOne from "../public/assets/projects/Website 1.png";
import websitePhotoTwo from "../public/assets/projects/Website 2.png";
import reviewAppPhoto from "../public/assets/projects/client review app.png";
import faqApp from "../public/assets/projects/FAQ App.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className=" w-full">
      <div className=" max-w-7xl mx-auto px-2 md:pt-28 py-16">
        <p className="uppercase text-xl tracking-widest text-[#2D92FA]">
          Projects
        </p>
        <h2 className=" py-4">What I've built</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* parent of component */}
          <ProjectItem
            title="Weather Application"
            backgroundImg={weatherAppPhoto}
            skills="React · TailwindCSS · NextJS · Axios · API"
            projectUrl="/weather"
            alt="Weather Application"
          />
          <ProjectItem
            title="Menu Application"
            backgroundImg={menuApp}
            skills="HTML · CSS · JavaScript"
            projectUrl="/menu"
            alt="Menu Application"
          />
          <ProjectItem
            title="Small Business Website Template"
            backgroundImg={websitePhotoOne}
            skills="HTML · CSS · JavaScript"
            projectUrl="/websiteOne"
            alt="Small business Website Template"
          />
          <ProjectItem
            title="Law Website Template"
            backgroundImg={websitePhotoTwo}
            skills="HTML · CSS · JavaScript"
            projectUrl="/websiteTwo"
            alt="Law Website Template"
          />
          <ProjectItem
            title="Client Review App"
            backgroundImg={reviewAppPhoto}
            skills="HTML · CSS · JavaScript"
            projectUrl="/reviewApp"
            alt="Client Review App"
          />
          <ProjectItem
            title="FAQ App"
            backgroundImg={faqApp}
            skills="HTML · CSS · JavaScript"
            projectUrl="/FAQapp"
            alt="FAQ App"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
