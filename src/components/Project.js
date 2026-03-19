import React from "react";
import { motion } from "framer-motion";
import "./../styles/Project.css";

import calcImage from "../components/Assets/calculator.png";
import portfolioImage from "../components/Assets/portfolio.png";
import pokemonImage from "../components/Assets/pokemonImg.png";
import bookImage from "../components/Assets/book-hunt.png";

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
          As I continue my journey in web development, I build projects that
          strengthen my understanding of React, JavaScript, and modern UI
          libraries. These projects helped me practice API integration,
          authentication, state management, and creating responsive user
          interfaces.
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
              Book Hunt is a collaborative full-stack book discovery application
              built using React and Firebase. It includes Firebase
              Authentication, Firestore database for storing user wishlists,
              protected routes, and a responsive interface styled with Tailwind
              CSS. Users can search books, explore details, and manage their
              personal reading wishlist.
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
            <h2>PokéPeek</h2>
            <p>
              Pokémon Finder is a React and Mantine UI application that lets
              users explore Pokémon using API integration. It includes search,
              pagination, and detailed Pokémon views. The project also uses
              LocalStorage to store user selections and improve user experience
              while navigating through large Pokémon datasets.
            </p>
            <div className="techStack">
              <span>React.js</span>
              <span>Mantine UI</span>
              <span>API</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://pokepeek-by-akalya.netlify.app/"
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
              A React based calculator application built to perform arithmetic
              operations with a history feature. This project helped strengthen
              my understanding of React components, props, state management, and
              building interactive user interfaces with clean UI structure.
            </p>
            <div className="techStack">
              <span>React.js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://calculator-by-akalya.netlify.app/"
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


        {/* PORTFOLIO */}
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
              This portfolio website showcases my projects, technical skills,
              and development journey as a self-taught front-end developer. It
              is built with React and modern CSS techniques while focusing on
              responsive layout, smooth animations, and clean UI design.
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
