import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../data/projectCardData";

const ProjectsSection = ({}) => {
  return (
    <div className=" h-full w-full p-8">
      <div className="flex items-end">
        <h2 className="text-6xl px-4 text-white/70 inline-block font-semibold">
          Projects
        </h2>
        <div className="border-b-4 w-full px-4 border-white/30"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-16">
        {projects.map((project) => (
          <ProjectsCard key={project.id} CardData={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
