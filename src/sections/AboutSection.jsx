import React from "react";
import img from "../assets/vaibhavprofile.jpg";

const AboutSection = () => {
  return (
    <section className="w-full h-screen text-white p-8">
      <div className="flex items-end">
        <h2 className="text-6xl px-4 text-white/70 inline-block font-semibold">
          About
        </h2>
        <div className="border-b-4 w-full px-4 border-white/30"></div>
      </div>
      <div className="flex">
        <div className="w-full p-4">
          <img
            src={img}
            alt="profile"
            className="w-72 h-72 rounded-xl object-cover mt-8"
          />
        </div>
        <div className="p-4 mt-8">
          <span className="text-2xl font-bold text-white">
            Vaibhav Prajapati
          </span>

          <p className=" text-white/70 mt-5 text-xl">
            Third-year student in Computer Applications (BCA), at the FS
            University, Shikohabad. I am passionate about web development and
            design, I create responsive and interactive websites, by combining
            technical skills with creative design principles. I am seeking a
            work-study opportunity to gain real-world experience and contribute
            to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
