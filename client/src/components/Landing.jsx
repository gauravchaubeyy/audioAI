import React from "react";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import Contact from "./Contact";
import Demo from "./Demo";

export default function Landing() {
  return (
    <div
      className="landing-container overflow-x-hidden no-scrollbar"
      style={{ marginTop: "10px" }} >
      <Home></Home>
      <div className="border border-teal-700"></div>
      <About></About>
      <div className="border border-teal-700"></div>
      <Register></Register>
      <div className="border border-teal-700"></div>
      <Demo></Demo>
      <div className="border border-teal-700"></div>
      <Contact></Contact>
    </div>
  );
}

