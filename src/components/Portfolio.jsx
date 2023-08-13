import { FaChevronRight } from "react-icons/fa";

import sphere_lg from "../assets/images/sphere_lg.png";
import sphere_md from "../assets/images/sphere_md.png";
import sphere_sm from "../assets/images/sphere_sm.png";

import React from "react";

const Portfolio = () => {
  return (
    <>
      <div class="slide relative">
        <img
          src={sphere_lg}
          alt="large sphere"
          className="absolute top-[300px] right-[400px] opacity-70"
        />
        <img
          src={sphere_sm}
          alt="medium sphere"
          className="absolute top-[120px] left-[500px] opacity-70"
        />
        <img
          src={sphere_md}
          alt="small sphere"
          className="absolute bottom-[100px] left-[300px] opacity-70"
        />

        <div className="text-center ">
          <div className="flex md:justify-center items-center flex-col flex-wrap gap-5 mt-3 gap-y-2 text-white lg:text-6xl lg:leading-[0.9] md:text-5xl text-4xl font-bold">
            <div className="flex gap-5">
              <div className="flex">
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  P
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  o
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  r
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  t
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  f
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  o
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  l
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  i
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  o
                </div>
              </div>

              <div className="flex">
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  &
                </div>
              </div>

              <div className="flex">
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  P
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  r
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  e
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  v
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  i
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  o
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  u
                </div>
                <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                  s
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                P
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                r
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                o
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                j
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                e
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                c
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                t
              </div>
              <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                s
              </div>
            </div>
          </div>

          <p className="text-white text-[16px] text-center md:w-1/3 font-semibold m-auto mt-10">
            I have built various different projects to fit different aspects of
            the client's business. If you want to see more examples of my work
            than the ones showcased in this site, please
            <a href="" className="text-[#f4a949] hover:underline">
              contact me!
            </a>
          </p>

          <a
            href=""
            className=" text-[#9c27b0] group font-semibold inline-block mt-5 text-center transition-all duration-300 hover:text-[#80338d]"
          >
            See Projects
            <FaChevronRight className=" inline-block transition-all duration-500 group-hover:translate-x-5 ml-2" />
          </a>
        </div>
      </div>

      <div class="slide">
        <div className=" h-56">
          <h1 className="text-white text-center text-5xl">Cool 2</h1>
        </div>
      </div>

      <div class="slide">
        <div className=" h-56">
          <h1 className="text-white text-center text-5xl">Cool 3</h1>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
