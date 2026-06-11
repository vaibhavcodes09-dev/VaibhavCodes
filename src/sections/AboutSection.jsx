import React from "react";
import img from "../assets/vaibhavprofile.jpg";
import { education } from "../data/education";

const AboutSection = () => {
  return (
    <section className=" text-white p-8">
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
          <div className="mt-15 mb-15">
            <h3 className="text-4xl font-bold mb-8">My Education</h3>

            <div className="relative">
              {/* Main vertical line */}
              <div className="absolute left-2.25 top-3 bottom-3 w-0.5 bg-white/30" />

              {education.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between gap-8 mb-10 relative"
                >
                  {/* Left side */}
                  <div className="flex gap-6">
                    {/* Dot */}
                    <div
                      className={`w-5 h-5 rounded-full z-10 mt-1 ${
                        item.current
                          ? "border-2 border-white bg-black"
                          : "bg-white"
                      }`}
                    />

                    {/* Content */}
                    <div>
                      <h4 className="font-bold text-2xl uppercase">
                        {item.degree}
                      </h4>

                      <p className="text-white/70">{item.college}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <span className="text-white/50 italic whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/vaibhavcv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mt-8 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
