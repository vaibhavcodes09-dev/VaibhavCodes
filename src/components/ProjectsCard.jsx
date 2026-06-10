import React from "react";
import GithubIcon from "../assets/github-brands-solid.svg?react";

const ProjectsCard = ({ CardData }) => {
  const handleCardClick = () => {
    if (CardData.liveUrl) {
      window.open(CardData.liveUrl, "_blank");
    }
  };
  return (
    <div
      className="bg-slate-900/60 border border-slate-800 backdrop-blur-sm rounded-lg w-full h-full flex flex-col hover:cursor-pointer shadow-lg"
      onClick={handleCardClick}
    >
      <div>
        <img
          src={CardData.imgUrl}
          alt={CardData.imgAlt}
          className="w-full h-56 rounded-lg hover:blur-sm transition-all duration-500 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{CardData.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {CardData.description}
        </p>
        <div className="flex items-center justify-between mt-6">
          <a
            href={CardData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-6 w-6 text-white" />
          </a>
          <ul className="flex gap-4 ">
            {CardData.techStack.map((tech, index) => (
              <li
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
