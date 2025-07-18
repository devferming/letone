import React from "react";
import "./styles/Project.css";
import ProjectsCard from "./ProjectsCard";

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__h2">Proyectos</h2>
      <ProjectsCard></ProjectsCard>
    </section>
  );
};

export default Projects;
