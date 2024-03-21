import React from 'react';
import { Element } from 'react-scroll';

export default function Demo() {
  return (
    <Element name="demo" className="section relative"> 
      <div className="min-h-[800px] grid grid-cols-4 gap-4 bg-black p-4 relative">
        {/* Image containers */}
        <div className="flex justify-center items-center relative opacity-20">
          <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/AI-music-production-q11vh2he8pkft18gndky37ygp6sxh2xusgfu7h3yve_13gQNb1.jpeg" alt="" />
        </div>
        <div className="flex justify-center items-center relative opacity-20">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*VQxFxU5ueLX26yZpaMV-Fg.png" alt="" />
        </div>
        <div className="flex justify-center items-center relative opacity-20">
          <img src="https://neurosciencenews.com/files/2023/06/ai-music-hits-neurosciencenews.jpg" alt="" />
        </div>
        <div className="flex justify-center items-center relative opacity-20">
          <img src="https://media.shellypalmer.com/wp-content/images/2023/11/youtube-ai-music.jpg" alt="" />
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center text-teal-700 lg:text-7xl font-bold opacity-50">
          Demo yet to be added!!!
        </div>
      </div>
    </Element>
  )
}
