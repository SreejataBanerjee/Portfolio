import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/profilepic.jpg`} alt="Sreejata Banerjee" />
        </div>

        {/* Right Side - Text */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Sreejata Banerjee</strong>, a final-year Computer Science Engineering student at KIIT Bhubaneswar.  
            Passionate about AI, Machine Learning, and Web Development, I love solving problems and exploring new technologies.  
            I aspire to create innovative solutions that make an impact.
          </p>

          {/* Education Section */}
          <div className="education-container">
            <div className="education-box">
              <h3>10th Grade</h3>
              <p>South Point High School - 90%</p>
            </div>
            <div className="education-box">
              <h3>12th Grade</h3>
              <p>Shri Shikshayatan School - 89%</p>
            </div>
            <div className="education-box">
              <h3>B.Tech (CSE)</h3>
              <p>KIIT University - CGPA: 8.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
