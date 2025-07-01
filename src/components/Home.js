import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        {/* Left Side - Text */}
        <motion.div
          className="text-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title">
            Hi, I'm <span className="name-highlight">Sreejata Banerjee</span>
          </h1>
          <p className="subtitle">Aspiring Developer | Researcher | Tech Enthusiast</p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/homepic1.jpg`}
            alt="Sreejata Banerjee"
            className="profile-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
