import React from "react";
import purpleRomb from "../assets/images/purple_romb2.png";
import darkCube from "../assets/images/dark_cube2.png";


const About = () => {
  return (
    <div className="flex lg:items-center w-[1440px] max-w-full px-14 m-auto lg:flex-row flex-col">
      <img
        src={purpleRomb}
        className=" absolute  top-[100px] left-0 right-[-300px] m-auto my-0 max-w-[150px] opacity-70"
      />
      <img
        src={darkCube}
        className=" absolute  bottom-[100px] right-0 left-[-600px] m-auto my-0 max-w-[200px] opacity-70"
      />

      <div className="md:w-1/2">
        <div className="flex flex-wrap gap-5 gap-y-2 text-white lg:text-6xl lg:leading-[0.9] text-5xl  font-bold">
          <div className="flex">
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              H
            </div>
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              i
            </div>
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              ,
            </div>
          </div>

          <div className="flex">
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              I
            </div>
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              '
            </div>
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              m
            </div>
          </div>

          <div className="flex">
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              R
            </div>
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              e
            </div>
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              z
            </div>
            <div className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
              a
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex">
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                W
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                e
              </span>
              <span className=" transition-all inline-block hover:text-[#f4a949] hover:animate-rubberBand">
                b
              </span>
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
          </div>
        </div>

        <p className="text-xl text-gray-500 font-semibold mt-5">
          Front End Developer / JavaScript Fan / Wordpress Expert
        </p>
      </div>

      <div className="text-white text-lg lg:mt-0 mt-5 lg:w-1/2">
        <p>Professionally connected with the web development industry.</p>
        <br />
        <p>
          Problem solver, well-organised person, loyal employee with high
          attention to detail. Fan of Boxing, outdoor activities, video games,
          and coding of course.
        </p>
        <br />
        <p>
          Interested in the entire frontend spectrum and working on ambitious
          projects with interesting people.
        </p>
      </div>
    </div>
  );
};

export default About;
