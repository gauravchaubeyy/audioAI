import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <Element name="home" className="section">
      <div className="min-h-[600px] relative">
        <div className="overlay absolute top-0 left-0 w-full h-full "></div>

        <img src="./public/music.png" alt="" className="w-full h-screen " />

        <div className="absolute top-3/4 left-40 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-teal-700">
            Introducing audoAI:
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-teal-700">
            Shape your sound with AI
          </h1>

          <button
            className="hover:bg-teal-700 text-teal-700 hover:text-white px-4 py-2 
          rounded-lg shadow-md text-xl mt-4 border border-teal-700"
          >
            Learn more <span className="ml-2">&#10132;</span>
          </button>
        </div>
      </div>
    </Element>
  );
}
