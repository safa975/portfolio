import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Let’s Connect 💚</h3>
        <p>I’d love to collaborate or discuss new ideas!</p>

        <div className="footer-links">
          <a
            href="mailto:fathimathusafa7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/safa975"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fathimathu-safa-3363a8321"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-credit">
          © {new Date().getFullYear()} Fathimathu Safa | +91 7907061581
        </p>
      </div>
    </footer>
  );
};

export default Footer;
