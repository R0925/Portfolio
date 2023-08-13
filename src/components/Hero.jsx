import React from "react";
import { FaChevronRight } from "react-icons/fa";

import Lottie from "react-lottie";
import * as animationData from "../assets/images/animation_ll87ovif.json";

import dotPattern from "../assets/images/side-dots.png";
import purpleRomb from "../assets/images/purple_romb1.png";
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" flex lg:flex-row flex-col-reverse w-[1400px] max-w-full overflow-hidden m-auto p-10">
      <img
        src={dotPattern}
        className=" absolute top-0 bottom-0 rotate-90 m-auto right-[-50px] -z-10"
      />
      <img
        src={purpleRomb}
        className=" absolute  bottom-[20px] right-0 left-[-350px] m-auto my-0 max-w-[200px] opacity-70"
      />

      <div className=" flex flex-col justify-center lg:w-1/2  md:w-2/3">
        <h1 className="text-white lg:text-6xl lg:leading-[0.9] text-5xl  font-bold flex flex-col  gap-5  ">
          <div className="flex gap-5">
            <div className="flex ">
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                F
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                r
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                o
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                n
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                t
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                -
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                E
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                n
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                d
              </div>
            </div>
            <div className="flex">
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                S
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                o
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                f
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                t
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                w
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                a
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                r
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                e
              </span>
            </div>
          </div>
          <div className="flex">
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              D
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              e
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              v
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              e
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              l
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              o
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              p
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              e
            </span>
            <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              r
            </span>
          </div>
        </h1>
        <p className="text-white text-lg mt-10 lg:w-2/3 w-full">
          Resolving design problems, building smart user interfaces and useful
          interactions, developing rich web applications and seamless web
          experiences.
        </p>
        <a
          href=""
          className=" text-[#9c27b0] group font-semibold inline-block w-[100px] mt-5 h-7"
        >
          About me
          <FaChevronRight className=" inline-block transition-all duration-300 group-hover:rotate-90 ml-2" />
        </a>
      </div>

      <div className="md:w-1/2">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
    </div>
  );
};

export default Hero;
