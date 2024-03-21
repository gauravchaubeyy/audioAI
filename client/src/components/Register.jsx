import React from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';

export default function Register() {
  return (
    <Element name="register" className="section"> 
      <div className="min-h-[600px] bg-black flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-teal-700">
          Try audoAI: Register Now!
        </h1>
        <form className="mt-8 flex flex-col"> 
          <input
            type="email"
            placeholder="email"
            className="border border-teal-700 bg-black text-white rounded-md px-4 py-2 mb-4"
          />
          <input
            type="text"
            placeholder="password"
            className="border border-teal-700  bg-black text-white rounded-md px-4 py-2 mb-4"
          />
        </form>
        <button
          className="hover:bg-teal-700 text-teal-700 hover:text-white px-4 py-2 
            rounded-lg shadow-md text-xl mt-4 border border-teal-700"
        >
          Register <span className="ml-2">&#10132;</span>
        </button>
         <h1 className='text-teal-700'>or</h1>
        <button
          className="hover:bg-teal-700 text-teal-700 hover:text-white px-4 py-2 
            rounded-lg shadow-md text-xl  border border-teal-700"
        >
          Login <span className="ml-2">&#10132;</span>
        </button>
      </div>
    </Element>
  );
}

