import React from "react";
import "../styles/Papers.css";


const papers = [
  {
    title: "Cross-Lingual Synopsis Generation using Clustering-Based Algorithms",
    conference: "ICPR 2024",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-80136-5_16"
  },
  {
    title: "Temporal-Aware Transformer Approach for Violence Activity Recognition.",
    conference: "IEEE Explore",
    link: "https://ieeexplore.ieee.org/document/10965696"
  }
];

const Papers = () => {
  return (
    
    <section id="papers" className="papers-section">
      <h2>Published Papers</h2>
      <div className="papers-container">
        {papers.map((paper, index) => (
          <div className="paper-card" key={index}>
            <h3>{paper.title}</h3>
            <p><strong>Conference:</strong> {paper.conference}</p>
            {paper.link && (
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                Read Paper
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  
  );
};

export default Papers;
