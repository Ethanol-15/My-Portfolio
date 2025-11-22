import React from "react";


function CertificationCard({ cert }) {
  return (
    <div className="cert-card fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="cert-info">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-platform">{cert.platform}</p>

        <a
          href={cert.link}
          className="cert-link"
          target="_blank"
          rel="noreferrer"
        >
          View Certificate →
        </a>

        <p className="cert-date">{cert.date}</p>
      </div>

      <img src={cert.logo} alt="fcc-logo.png" className="cert-logo" />
    </div>
  );
}

export default CertificationCard;