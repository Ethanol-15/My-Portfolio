import React from "react";

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card stagger"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-content">
        <h3>{project.title}</h3>
        <p><i>{project.subtitle}</i></p>
        <p>{project.description}</p>
      </div>

      <a
        href={project.link}
        className="project-button"
        target="_blank"
        rel="noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}

export default ProjectCard;