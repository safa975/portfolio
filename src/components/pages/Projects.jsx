import React from "react";
import cupcrazeImg from "../../assets/cupcraze.jpg";
import productPreviewImg from "../../assets/product-preview-page.jpg";
import darrahImg from "../../assets/darrah.jpg";
import studentmanagement from "../../assets/education.jpg";
import weatherapp from "../../assets/weather.jpg";
import train from "../../assets/train.jpg";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "CupCraze ☕",
      description:
        "An e-commerce platform for coffee and tea accessories built using Django & PostgreSQL.",
      image: cupcrazeImg,
      github: "https://github.com/safa975/ecom2",
    },
    {
      title: "CupCraze Product Preview 🛍️",
      description:
        "A detailed product preview page from CupCraze showcasing product details and cart features.",
      image: productPreviewImg,
      github: "https://github.com/safa975/cupcraze-product-preview",
    },
    {
      title: "Darrah 🏡",
      description:
        "A property rental app built using Django REST Framework and React.",
      image: darrahImg,
      github: "https://github.com/safa975/DARRAH",
    },
    {
      title: "Student Management 🎓",
      description:
        "A simple student management system created with Django for managing academic data.",
      image: studentmanagement,
      github: "https://github.com/safa975/studentappteamwork",
    },
    {
      title: "Weather App 🌦️",
      description:
        "A React app that provides real-time weather updates using an external weather API.",
      image: weatherapp,
      github: "https://github.com/safa975/WeatherWise",
    },
    {
      title: "Train Ticket Booking 🚆",
      description:
        "A train ticket booking system using Django and PostgreSQL for seat reservation and management.",
      image: train,
      github: "https://github.com/yourusername/train-booking",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        Each project reflects a calm blend of logic, creativity, and purpose 🌿
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
