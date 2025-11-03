import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I’m <span className="highlight">Fathimathu Safa</span>, a passionate{" "}
          <span className="highlight">Python Full-Stack Developer</span> who loves turning ideas
          into calm, functional, and meaningful digital experiences.
        </p>

        <p className="about-text">
            I hold a <span className="highlight">Bachelor’s degree in Electronics and Communication Engineering (B.Tech ECE)</span>, 
            which has strengthened my logical thinking, creativity, and curiosity for how technology connects people.  
            I also completed an <span className="highlight">internship in Python Full-Stack Development</span>, where I gained hands-on experience in building dynamic and responsive web applications using Django and React.

        </p>

        <p className="about-text">
          I enjoy building projects that blend simplicity, usability, and beauty — with a focus on 
          clean code, modern design, and seamless user experience.
        </p>

        <div className="skills-section">
          <h3 className="skills-title">💻 Technical Skills</h3>
          <ul className="skills-list">
            <li><strong>Languages:</strong> Python, JavaScript, SQL, HTML, CSS</li>
            <li><strong>Frameworks:</strong> Django, Django REST Framework, React, Bootstrap</li>
            <li><strong>Databases:</strong> PostgreSQL, SQLite</li>
            <li><strong>Tools:</strong> Git, Figma, Docker</li>
          </ul>
        </div>

        <p className="about-text">
          I’m continuously exploring new tools and ideas to make technology feel more human — 
          peaceful, intuitive, and inspiring. ✨
        </p>
      </div>
    </section>
  );
};

export default About;
