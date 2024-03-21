import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";
export default function About() {
  return (
    <Element name="about" className="section">
      <div className="min-h-[800px] grid sm:grid-cols-2">
        <p className="text-4xl text-teal-700 bg-black  flex justify-center items-center pl-20 pr-20">
        "Revolutionize your audio with our AI app. Upload, customize, 
        and enjoy your perfect sound in seconds. 
        Experience smart processing and effortless design. 
        Unleash your audio's potential, effortlessly."
        </p>

        <div className="bg-black flex justify-center items-center relative">
          <div className="w-80 h-80 border border-white relative">
            {/* Eighth Note */}
            <span
              className="text-teal-700 text-6xl absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            >
              &#9835;
            </span>

            {/* Beamed Eighth Notes */}
            <span
              className="text-teal-700 text-6xl absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            >
              &#9834;
            </span>

            {/* Treble Clef */}
            <span
              className="text-teal-700 text-6xl absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            >
              &#119070;
            </span>

            {/* Flat Note */}
            <span
              className="text-teal-700 text-6xl absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            >
              &#9837;
            </span>

            {/* Sharp Note */}
            <span
              className="text-teal-700 text-6xl absolute"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            >
              &#9839;
            </span>
          </div>
        </div>
      </div>
    </Element>
  );
}
