import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faWhatsapp, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <Element name="contact" className="section"> 
      <div className="min-h-[400px] bg-black flex justify-center items-center">
        {/* GitHub */}
        <a href={import.meta.env.VITE_REACT_APP_GITHUB} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-teal-700 text-4xl mr-4" />
        </a>
        {/* Twitter */}
        <a href={import.meta.env.VITE_REACT_APP_X} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-teal-700 text-4xl mr-4" />
        </a>
         {/* Instagram */}
      <a href={import.meta.env.VITE_REACT_APP_INSTA}target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-teal-700 text-4xl mr-4" />
      </a>
        {/* WhatsApp */}
        <a href={import.meta.env.VITE_REACT_APP_WA} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-teal-700 text-4xl mr-4" />
        </a>
        {/* LinkedIn */}
        <a href={import.meta.env.VITE_REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-teal-700 text-4xl mr-4" />
        </a>
      </div>
    </Element>
  );
}

