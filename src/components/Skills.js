import React from "react";
import { FaPython, FaJava, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { SiTensorflow, SiPostman } from "react-icons/si";

function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card"><FaPython /> Python</div>
        <div className="skill-card"><SiTensorflow /> TensorFlow</div>
        <div className="skill-card"><FaReact /> React</div>
        <div className="skill-card"><FaJava /> Java</div>
        <div className="skill-card"><FaGithub /> Git / GitHub</div>
        <div className="skill-card"><SiPostman /> Postman</div>
        <div className="skill-card"><FaFigma /> Figma</div>
      </div>
    </section>
  );
}

export default Skills;