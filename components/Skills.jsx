import React from "react";
import Image from "next/image";

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
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/github.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/wordpress.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>WordPress</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/shopify.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Shopify</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/adobe-creative-cloud.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3 className=" text-center">Adobe Creative Suite</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/figma.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/python.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300 bg-white">
            <div className=" grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/assets/skills/cpp.png"
                  alt="/"
                  width="64"
                  height="64"
                />
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
