import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import CertificationCard from "./components/CertificationCard";

import certifications from "./data/certifications";
import projects from "./data/projects";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Header />

      {/* ABOUT ME */}
      <section className="section fade-in" id="about">
        <h2>About Me</h2>
        <p className="about-text">
          I'm Ethan Lyle C. Cruz, a Computer Science student specializing in
          Software Development, UI/UX Design, and Machine Learning.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section fade-in" id="skills">
        <Skills />
      </section>

      {/* CERTIFICATIONS */}
      <section className="section fade-in" id="certifications">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section fade-in" id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section fade-in" id="contact">
        <h2>Contact</h2>
        <div className="contact-box">
          <p>
            Email:{" "}
            <a href="mailto:cruz.ethanlyle2003@gmail.com">
              cruz.ethanlyle2003@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/ethanlylecruz"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ethanlylecruz
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;