import React from "react";
import { motion } from "framer-motion";
import "./../styles/Project.css";

import calcImage from "../components/Assets/calculator.png";
import portfolioImage from "../components/Assets/portfolio.png";
import pokemonImage from "../components/Assets/pokemon.png";
import bookImage from "../components/Assets/bookhunt.png";

const Project = () => {

  const cardAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };


  return (
    <div id="Projects">

      <div className="projectDescription">
        <h1>My Projects</h1>
        <p>
          These projects represent my hands-on learning in modern web
          development. Through building real applications, I explored
          React component architecture, API integration, authentication,
          and responsive UI design while focusing on writing clean,
          maintainable code.
        </p>

      </div>

      <div className="projectSection">


        <motion.div
          className="projectBox"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="leftSection">
            <h2>Book Hunt</h2>
            <p>
              Book Hunt is a collaborative book discovery platform built with
              React and Firebase. It allows users to search for books, view
              detailed information, and maintain a personal wishlist. The
              project implements Firebase Authentication, Firestore database
              integration, and a responsive UI styled with Tailwind CSS.
            </p>

            <div className="techStack">
              <span>Firebase</span>
              <span>Firestore</span>
              <span>TailwindCSS</span>
              <span>Mantine UI</span>
              <span>React.js</span>
            </div>
            <a
              href="https://book-hunt-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demoButton">🔗 Live Demo</button>
            </a>
          </div>

          <div className="rightSection">
            <img src={bookImage} alt="Book Hunt" className="projectImage" />
          </div>
        </motion.div>


        <motion.div
          className="projectBox"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="leftSection">
            <h2>Pokémon-Finder</h2>
            <p>
              Pokémon-Finder is a Pokémon exploration app built using React and
              Mantine UI. It fetches Pokémon data from an external API and
              allows users to search, browse paginated results, and view
              detailed Pokémon information. The project focuses on clean
              component structure and efficient state management.
            </p>

            <div className="techStack">
              <span>React.js</span>
              <span>Mantine UI</span>
              <span>API</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://pokemon-finder-by-arunthathi.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demoButton">🔗 Live Demo</button>
            </a>
          </div>

          <div className="rightSection">
            <img src={pokemonImage} alt="Pokemon Finder" className="projectImage" />
          </div>
        </motion.div>



        <motion.div
          className="projectBox"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="leftSection">
            <h2>Calculator</h2>
            <p>
              A modern calculator application developed using React that
              performs basic arithmetic operations with an intuitive
              interface. This project strengthened my understanding of
              component-based architecture, state handling, and interactive
              UI design.
            </p>

            <div className="techStack">
              <span>React.js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href=" https://calculator-by-arunthathi.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demoButton">🔗 Live Demo</button>
            </a>
          </div>

          <div className="rightSection">
            <img src={calcImage} alt="Calculator" className="projectImage" />
          </div>
        </motion.div>



        <motion.div
          className="projectBox"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="leftSection">
            <h2>Portfolio</h2>
            <p>
              A personal portfolio website designed to showcase my projects,
              technical skills, and development journey. Built with React and
              modern CSS, the website focuses on responsive design, smooth
              animations, and clean visual presentation.
            </p>

            <div className="techStack">
              <span>React.js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

          </div>

          <div className="rightSection">
            <img src={portfolioImage} alt="Portfolio" className="projectImage" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Project;
