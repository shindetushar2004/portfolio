import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  //Smooth Scroll Function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Tushar Shinde</h2>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-2sm md:text-lg sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icons: <FaGithub />,
              link: "https://github.com/shindetushar2004/",
            },
            {
              icons: <FaLinkedin />,
              link: "https://www.linkedin.com/in/tushar-shinde-b274382b7/",
            },
            {
              icons: <FaInstagram />,
              link: "https://www.instagram.com/_tusharshinde78/",
            },
            {
              icons: <FaYoutube />,
              link: "https://www.youtube.com/@tusharshinde9/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icons}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Tushar Shinde. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
