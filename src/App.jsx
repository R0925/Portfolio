import { useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function App() {
  const inputRef = useRef(null);
  const anchors = ["hero", "about", "skills", "portfolio", "footer"];

  const [activeMenu, setActiveMenu] = useState("");

  const checkActiveMenu = (menu) => {
    setTimeout(() => {
      if (window.location.href.includes(menu)) {
        setActiveMenu(menu);
      }
    }, 200);
  };

  const handleScroll = (menu) => {
    setActiveMenu(menu);
  };

  function simulateClick() {
    inputRef.current.click();
  }
  return (
    <div className=" relative ">
      <Navbar />

      <div className=" absolute h-full flex items-center top-[-20px] right-10 z-10">
        <nav className="relative flex flex-col items-center border-r border-[#ffffff50]">
          {anchors.map((item, index) => {
            return (
              <a
                href={"#" + item}
                className={`flex items-center text-sm  relative z-10 uppercase text-white cursor-pointer pr-3 h-[50px] peer/${item} ${
                  activeMenu == item ? "active" : ""
                }`}
                onClick={() => checkActiveMenu(item)}
              >
                0{index}
              </a>
            );
          })}

          <div class="bg-white h-[50px] absolute w-[3px] right-0 z-0 transition-all duration-500 start-home top-0 peer-[&.active]/hero:top-0 peer-[&.active]/about:top-[50px] peer-[&.active]/skills:top-[100px] peer-[&.active]/portfolio:top-[150px] peer-[&.active]/footer:top-[200px] peer-hover/hero:top-0 peer-hover/about:top-[50px] peer-hover/skills:top-[100px] peer-hover/portfolio:top-[150px] peer-hover/footer:top-[200px]"></div>

          {window.location.href.includes("footer") ? (
            <a
              href="#hero"
              className="text-gray-400 -rotate-90 text-sm font-semibold absolute right-[-36px] bottom-[-200px] w-28 flex justify-start items-center group transition-all duration-500 hover:text-gray-300 opacity-80"
            >
              Back To Top
              <FaChevronRight className="ml-2 transition-all duration-500 group-hover:translate-x-5 text-white" />
            </a>
          ) : (
            <a
              onClick={simulateClick}
              className="text-gray-400 -rotate-90 text-sm font-semibold absolute right-[-36px] bottom-[-200px] w-28 flex justify-start items-center group transition-all duration-500 hover:text-gray-300 cursor-pointer opacity-80"
            >
              <FaChevronLeft className="mr-2 transition-all duration-500 group-hover:-translate-x-5 text-white" />
              Scroll Down
            </a>
          )}
        </nav>
      </div>

      <ReactFullpage
        afterLoad={() => handleScroll(window.location.href.split("#")[1])}
        scrollingSpeed={1000}
        responsiveWidth= {1000}
        anchors={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hero />
                <button
                  ref={inputRef}
                  onClick={() => fullpageApi.moveSectionDown()}
                  className=" hidden"
                ></button>
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Skills />
              </div>
              <div className="section">
                <Portfolio />
              </div>
              <div className="section">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
