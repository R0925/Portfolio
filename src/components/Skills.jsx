import React from "react";

import { BiLogoJavascript, BiLogoVuejs, BiLogoCss3 } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className=" md:text-center md:p-0 p-10">
      <p className="md:text-xl text-xs text-gray-400 uppercase">
        A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
      </p>
      <div className="flex md:justify-center flex-wrap gap-5 mt-3 gap-y-2 text-white lg:text-6xl lg:leading-[0.9] md:text-5xl text-4xl font-bold">
        <div className="flex">
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            S
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            k
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            i
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            l
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            l
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            s
          </div>
        </div>

        <div className="flex">
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            &
          </div>
        </div>

        <div className="flex">
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            E
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            x
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            p
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            e
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            r
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            i
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            e
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            n
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            s
          </div>
          <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
            e
          </div>
        </div>
      </div>
      <p className="md:text-[18px] text-[16px] text-white mt-5">
        The main area of expertise is front end development (client side of the
        web).
      </p>
      <p className="md:text-[18px] text-[16px] text-white xl:w-[40%] lg:w-[60%]   m-auto mt-5">
        HTML, CSS, JS, building small and medium web applications with Vue or
        React, custom plugins, features, animations, and coding interactive
        layouts. I have also full-stack developer experience with one of the
        most popular open source CMS on the web - WordPress
      </p>

      <p className="md:text-[18px] text-[16px] text-white w-[40%] md:m-auto mt-5">
        Visit my
        <a href="www.google.com" className="text-[#f4a949] hover:underline">
          Linkedin
        </a>
        for more details.
      </p>
      <div className="flex md:justify-center  md:w-1/2 m-auto flex-wrap md:gap-10 gap-24 mt-10 ">
        <div className="text-center">
          <BiLogoJavascript className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">JavaScript</h3>
        </div>
        <div className="text-center">
          <FaReact className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">React</h3>
        </div>
        <div className="text-center">
          <BiLogoVuejs className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">Vue</h3>
        </div>
        <div className="text-center">
          <FaNodeJs className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">Node</h3>
        </div>
        <div className="text-center">
          <FaGitAlt className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">Git</h3>
        </div>
        <div className="text-center">
          <BiLogoCss3 className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">Css3</h3>
        </div>
        <div className="text-center">
          <FaBootstrap className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">Bootstrap</h3>
        </div>
        <div className="text-center">
          <FaHtml5 className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
          <h3 className="text-white text-xl">HTML5</h3>
        </div>
        <div className="text-center">
        <FaLaravel className="2xl:text-[120px] md:text-[100px] text-[80px]  text-white" />
        <h3 className="text-white text-xl">Laravel</h3>
        </div>
    
      </div>
    </div>
  );
};

export default Skills;
