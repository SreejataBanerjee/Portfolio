import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Mental Health Chatbot - Sereni",
    description: "An AI-powered chatbot using Mistral 7B to enable mental health conversations and direct therapy booking.",
    tech: ["Python", "Mistral 7B", "Flask", "HTML/CSS", "Booking API"],
    image: "mental-health-chatbot.png",
    github: "https://github.com/SreejataBanerjee/Sereni-Mental-Health-Chatbot",
  },
  
  {
    title: "Cross-Lingual Summarization",
    description: "Developed a clustering-based model for multilingual synopsis generation.",
    tech: ["Python", "NLP", "M-BERT", "ROUGE"],
    image: "Synopsis.jpg",
    github: "https://github.com/yourusername/cross-lingual-summarization",
  },
  {
    title: "Violence Detection in Videos",
    description: "Deep learning model to detect violent activities in videos.",
    tech: ["Deep Learning", "OpenCV", "CNN"],
    image: "violence-detection.jpg",
    github: "https://github.com/yourusername/violence-detection",
  },
  {
    title: "Real-Time Video Dubbing",
    description: "Automated multilingual video dubbing using Whisper, Google Translate, and TTS.",
    tech: ["Python", "Whisper API", "Google TTS", "MoviePy"],
    image: "video-dubber.jpg",
    github: "https://github.com/yourusername/video-dubbing",
  },
   {
    title: "Rainfall Predictor",
    description: "Weather prediction model using Random Forest with 96% accuracy.",
    tech: ["Flask", "Machine Learning", "Random Forest"],
    image: "rainfall.jpg",
    github: "https://github.com/SreejataBanerjee/Rainfall_prediction",
  },
  {
  title: "Geotech Café Portal",
  description: "A responsive web portal built for Geotech Infoservices Pvt. Ltd. to showcase their café services, designed using HTML and CSS.",
  tech: ["HTML", "CSS"],
  image: "geotech.jpg",
  github: "https://github.com/SreejataBanerjee/geotech?tab=readme-ov-file"
}
,
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
        <button className="show-more">Show More</button>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={`/images/${project.image}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub size={18} style={{ marginRight: "5px" }} />
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
