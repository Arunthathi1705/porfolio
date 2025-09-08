import React, { useState } from 'react'
import "./../styles/Project.css";
import calcImage from '../components/Assets/calculator.png';
import portfolioImage from '../components/Assets/portfolio.png';
import pokemonImage from '../components/Assets/pokemon.png';

const Project = () => {
  const [showImage, setShowImage] = useState(false);
  const [showPokemonImage, setShowPokemonImage] = useState(false);
  const [showPortfolioImage, setShowPortfolioImage] = useState(false);

  return (
    <div id="Projects">
      <div className="projectDescription">
        <h1>My projects</h1>
        <p>As I continue my journey in web development, I am working on projects that help me apply and strengthen my skills. Each project reflects my growth with React, JavaScript, and UI libraries like Mantine UI. My goal is to keep improving them with new features and better user experience. I’m also eager to learn modern tools and frameworks to stay updated in the field.</p>
      </div>
      <div className='projectSection'>
        <div className="projectBox">

          <h2>Calculator</h2>
          <p className='calcDescription'>A simple calculator built with React.js to perform basic arithmetic operations with a History feature. It strengthened my understanding of components, props, and state while creating an interactive web app.</p>
          <div className="buttonContainer">
            <button
              onClick={() => setShowImage(!showImage)}
              className="blueButton" >

              {showImage ? "✖️Close" : "View Output"
              }
            </button>
            <a href="https://calculator-by-arunthathi.netlify.app/" target="_blank" rel="noopener noreferrer" >
              <button className="demoButton">🔗Live Demo</button>
            </a>
          </div>

          {showImage && <img src={calcImage} alt="calculator" height="200px" width="150px" className='projectImage' />}

        </div>


        <div className="projectBox">
          <h2>Pokémon-Finder</h2>
          <p>Pokémon Finder is a React.js and Mantine UI app for browsing and discovering Pokémon with a clean interface. It features API integration, real-time search, pagination, and detailed Pokémon views for an interactive experience.</p>
          <div className="buttonContainer">
            <button
              onClick={() => setShowPokemonImage(!showPokemonImage)}
              className="blueButton">
              {showPokemonImage ? "✖️Close" : "View Output"}
            </button>
            <a href="https://pokemon-finder-by-arunthathi.netlify.app/" target="_blank" rel="noopener noreferrer" >
              <button className="demoButton">🔗Live Demo</button>
            </a>
          </div>

          {showPokemonImage && <img src={pokemonImage} height="160px" width="250px" alt="pokemon-finder" className='projectImage' />}

        </div>

        <div className="projectBox">
          <h2>Portfolio</h2>
          <p>A project within a project, a creation that showcases creation. This portfolio is both the canvas and the masterpiece of my developer journey. It highlights my skills, projects, and growth as a self-taught front-end developer.</p>
          <div className="buttonContainer">
            <button
              onClick={() => setShowPortfolioImage(!showPortfolioImage)}
              className="blueButton">

              {showPortfolioImage ? "✖️Close" : "View Output"}
            </button>
          </div>

          {showPortfolioImage && <img src={portfolioImage} height="200px" width="150px" alt="portfolio" className='projectImage' />}

        </div>
      </div>
    </div>

  )
}

export default Project