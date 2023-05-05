import React from "react";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full mx-auto h-full p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#696D7D]">
            hey, i'm <span className="text-[#68B0AB]">anushka</span>
          </h1>
          <p className="py-4 text-gray-600 max-w-[50%] m-auto">
            I'm a student at Northeastern University studying computer science,
            with a passion for artificial intelligence, robotics, and
            linguistics. I love engaging in innovative software projects and
            acquiring new skills. Currently dabbling in building responsive
            front-end web applications (exhibit a: this site :) ) and learning
            back-end tools and frameworks.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="logo-container logo-item rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://www.linkedin.com/in/anushkakulk">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="logo-container logo-item rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/anushkakulk">
                <FaGithub />
              </a>
            </div>

            <div className="logo-container logo-item rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="mailto:anushka.mkul@gmail.com">
                <MdEmail />
              </a>
            </div>

            <div className="logo-container logo-item rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://gitlab.com/anushka.mkul">
                <FaGitlab />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
