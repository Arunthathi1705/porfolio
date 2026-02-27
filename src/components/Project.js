import React, { useState } from 'react'
import "./../styles/Project.css";
import calcImage from '../components/Assets/calculator.png';
import portfolioImage from '../components/Assets/portfolio.png';
import pokemonImage from '../components/Assets/pokemon.png';
import bookImage from '../components/Assets/bookhunt.png';


const Project = () => {

  const [activeProject, setActiveProject] = useState(null);



  return (
    <div id="Projects">
      <div className="projectDescription">
        <h1>My projects</h1>
        <p>As I continue my journey in web development, I am working on projects that help me apply and strengthen my skills. Each project reflects my growth with React, JavaScript, and UI libraries like Mantine UI. My goal is to keep improving them with new features and better user experience. I’m also eager to learn modern tools and frameworks to stay updated in the field.</p>
      </div>
      <div className='projectSection'>
        <div className="projectBox">
          <div>
            <h2>Book Hunt</h2>
            <p>
              Book Hunt is a collaborative full-stack book discovery application built using React.js and Firebase.
              This project was developed by two members, focusing on secure authentication, protected routes,
              and real-time user-specific wishlist management. It allows users to search books, explore details,
              and manage personalized wishlists with a clean and responsive interface.
            </p>
          </div>
          <div>
            <div className="buttonContainer">
              <button
                onClick={() =>
                  setActiveProject(activeProject === "book" ? null : "book")
                }
                className="blueButton"
              >
                {activeProject === "book" ? "✖️Close" : "View Output"}
              </button>

              <a
                href="https://book-hunt-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="demoButton">🔗Live Demo</button>
              </a>
            </div>

            {activeProject === "book" && (
              <img
                src={bookImage}
                height="180px"
                width="240px"
                alt="book-hunt"
                className="projectImage"
              />
            )}
          </div>
        </div>

        <div className="projectBox">
          <div>
            <h2>Pokémon-Finder</h2>
            <p>Pokémon Finder is a React.js and Mantine UI app for browsing and discovering Pokémon with a clean interface. It features API integration, real-time search, pagination, and detailed Pokémon views for an interactive experience.</p>
          </div>
          <div>
            <div className="buttonContainer">
              <button
                onClick={() =>
                  setActiveProject(activeProject === "pokemon" ? null : "pokemon")
                }
                className="blueButton"
              >
                {activeProject === "pokemon" ? "✖️Close" : "View Output"}
              </button>

              <a href="https://pokemon-finder-by-arunthathi.netlify.app/" target="_blank" rel="noopener noreferrer" >
                <button className="demoButton">🔗Live Demo</button>
              </a>
            </div>

            {activeProject === "pokemon" && <img src={pokemonImage} height="160px" width="250px" alt="pokemon-finder" className='projectImage' />}
          </div>
        </div>
        <div className="projectBox">
          <div>
            <h2>Calculator</h2>
            <p className='calcDescription'>A simple calculator built with React.js to perform basic arithmetic operations with a History feature. It strengthened my understanding of components, props, and state while creating an interactive web app.</p>
          </div>
          <div>
            <div className="buttonContainer">
              <button
                onClick={() =>
                  setActiveProject(activeProject === "calculator" ? null : "calculator")
                }
                className="blueButton"
              >
                {activeProject === "calculator" ? "✖️Close" : "View Output"}
              </button>

              <a href="https://calculator-by-arunthathi.netlify.app/" target="_blank" rel="noopener noreferrer" >
                <button className="demoButton">🔗Live Demo</button>
              </a>
            </div>

            {activeProject === "calculator" && <img src={calcImage} alt="calculator" height="200px" width="150px" className='projectImage' />}
          </div>
        </div>

        <div className="projectBox">
          <div>
            <h2>Portfolio</h2>
            <p>A project within a project, a creation that showcases creation. This portfolio is both the canvas and the masterpiece of my developer journey. It highlights my skills, projects, and growth as a self-taught front-end developer.</p>
          </div>
          <div>
            <div className="buttonContainer">
              <button
                onClick={() =>
                  setActiveProject(activeProject === "portfolio" ? null : "portfolio")
                }
                className="blueButton"
              >
                {activeProject === "portfolio" ? "✖️Close" : "View Output"}
              </button>

            </div>

            {activeProject === "portfolio" && <img src={portfolioImage} height="200px" width="150px" alt="portfolio" className='projectImage' />}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Project