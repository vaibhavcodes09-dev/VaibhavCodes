import React from "react";
import MailIcon from "../assets/mail.svg?react";
import LinkedInIcon from "../assets/linkedin-brands-solid.svg?react";
import GithubIcon from "../assets/github-brands-solid.svg?react";
import "../styles/headingFont.css";

const HeroSection = () => {
  return (
    <section className="h-full flex justify-center items-center relative ">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl unica-one-regular">Vaibhav Prajapati</h1>
      <div className="absolute bottom-6 left-6">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavpm09@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/50"
        >
          <MailIcon className="h-6 w-6 text-white" />
        </a>
        <a
          href="https://github.com/vaibhavcodes09-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 cursor-pointer"
        >
          <GithubIcon className="h-6 w-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhav-prajapati-46393b2a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 cursor-pointer"
        >
          <LinkedInIcon className="h-6 w-6 text-white" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
