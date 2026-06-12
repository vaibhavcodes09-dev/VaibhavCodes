import React from "react";
import MailIcon from "../assets/mail.svg?react";
import LocationIcon from "../assets/map-pin.svg?react";
import LinkedInIcon from "../assets/linkedin-brands-solid.svg?react";
import GithubIcon from "../assets/github-brands-solid.svg?react";

const Footer = () => {
  return (
    <div className="bg-slate-950 border-t-2  text-white p-8">
      <div className="flex flex-col md:flex-row justify-around ">
        <div className="md:w-1/3 md:px-6">
          <h4 className="text-3xl text-white/70 font-medium mb-4">
            Vaibhav Prajapati
          </h4>
          <p className="md:text-m text-sm leading-7 font-light  text-white/30">
            Final year student at FS University, passionate about web
            development and creating modern and accessible digital experiences
          </p>
        </div>
        <div className="md:w-1/3 md:text-center">
          <h4 className="text-3xl text-white/70 font-medium mb-4">
            Navigation
          </h4>
          <ul className="text-m text-white/30 ">
            <li className="hover:text-white/50 mb-2">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-white/50 mb-2">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-white/50 mb-2">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-white/50 mb-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 md:text-center flex flex-col">
          <h4 className="text-3xl text-white/70  font-medium mb-4">
            Contact & Networks
          </h4>
          <div className="text-m text-white/30 hover:text-white/50 flex md:items-center cursor-pointer md:justify-center mb-3">
            <span className="mr-1">
              <MailIcon />
            </span>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavpm09@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/50"
            >
              vaibhavpm09@gmail.com
            </a>
          </div>
          <div className="text-m text-white/30 hover:text-white/50 flex md:items-center cursor-pointer md:justify-center mb-3">
            <span className="mr-1">
              <LocationIcon />
            </span>
            Etawah, Uttar Pradesh, India
          </div>
          <div className="flex items-center mt-1 md:flex-col">
            <h4 className=" text-xl text-white/30 hover:text-white/50">Follow me:</h4>
            <div className="flex gap-4 justify-center  md:mt-2">
              <a
                href="https://github.com/vaibhavcodes09-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 cursor-pointer"
              >
                <GithubIcon className="h-6 w-6 text-white"/>
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-prajapati-46393b2a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 cursor-pointer"
              >
                <LinkedInIcon className="h-6 w-6 text-white"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
