import React from "react";
import "../styles/Experience.css";


const experiences = [
  {
    role: "RPA Intern",
    company: "PwC India",
    duration: "June 2024 - Aug 2024",
    description: "Worked on RPA automation using UiPath and built Power BI dashboards.",
  },
  {
    role: "Web Developer Intern",
    company: "GeoTech Infoservices",
    duration: "May 2023 - Oct 2023",
    description: "Developed a fully responsive website and optimized UI/UX performance.",
  },
  {
    role: "Research Intern",
    company: "Jadavpur University",
    duration: "Jan 2024 - Present",
    description: "Worked on a cross-lingual synopsis generation model, optimizing NLP algorithms.",
  },
];

const Experience = () => {
  return (
   

    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  
  );
};

export default Experience;
