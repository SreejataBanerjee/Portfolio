import React from "react";
import "../styles/Skills.css";


import { 
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGithub, FaUsers, FaLightbulb, FaComments, FaClipboardList, FaChartBar 
} from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiFlask, SiTensorflow, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
   
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      
      {/* Technical Skills */}
      <h3 className="skills-subtitle">Technical Skills</h3>
      <div className="skills-container">
        <div className="skill-card"><FaPython className="skill-icon" /><p>Python</p></div>
        <div className="skill-card"><FaJava className="skill-icon" /><p>Java</p></div>
        <div className="skill-card"><SiCplusplus className="skill-icon" /><p>C++</p></div>
        <div className="skill-card"><SiJavascript className="skill-icon" /><p>JavaScript</p></div>
        <div className="skill-card"><FaReact className="skill-icon" /><p>React</p></div>
        <div className="skill-card"><SiFlask className="skill-icon" /><p>Flask</p></div>
        <div className="skill-card"><SiTensorflow className="skill-icon" /><p>TensorFlow</p></div>
        <div className="skill-card"><FaDatabase className="skill-icon" /><p>SQL</p></div>
        <div className="skill-card"><SiMongodb className="skill-icon" /><p>MongoDB</p></div>
        <div className="skill-card"><FaChartBar className="skill-icon" /><p>Power BI</p></div>
        <div className="skill-card"><FaHtml5 className="skill-icon" /><p>HTML</p></div>
        <div className="skill-card"><FaCss3Alt className="skill-icon" /><p>CSS</p></div>
        <div className="skill-card"><FaGithub className="skill-icon" /><p>GitHub</p></div>
      </div>

      {/* Soft Skills */}
      <h3 className="skills-subtitle">Soft Skills</h3>
      <div className="skills-container soft-skills">
        <div className="skill-card"><FaUsers className="skill-icon" /><p>Teamwork</p></div>
        <div className="skill-card"><FaLightbulb className="skill-icon" /><p>Problem-Solving</p></div>
        <div className="skill-card"><FaComments className="skill-icon" /><p>Communication</p></div>
        <div className="skill-card"><FaClipboardList className="skill-icon" /><p>Time Management</p></div>
      </div>
    </section>

  );
};

export default Skills;
