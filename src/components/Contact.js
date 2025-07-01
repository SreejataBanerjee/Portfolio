import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>Contact Me</h2>
      <p>Interested in working together? Feel free to reach out!</p>
      
      {/* Contact Icons */}
      <div className="contact-info">
        <a href="mailto:sreejata.banerjee.01@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail size={24} /> 
        </a>
        <a href="https://www.linkedin.com/in/sreejata-banerjee-685229253/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} /> 
        </a>
        <a href="https://github.com/SreejataBanerjee" target="_blank" rel="noopener noreferrer">
          <Github size={24} /> 
        </a>
      </div>

      {/* Contact Form */}
      <motion.form 
        className="contact-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
