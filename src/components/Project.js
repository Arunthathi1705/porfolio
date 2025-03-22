import React, { useState } from 'react'
import "./../styles/Project.css";
import calcImage from '../components/Assets/calculator.png';
import backImage from '../components/Assets/backwards.png';
import gitImage from '../components/Assets/github.png';
import portfolioImage from '../components/Assets/portfolio.png';


const Project = () => {
  const [showImage, setShowImage] = useState(false);
  const [showPortfolioImage, setShowPortfolioImage] = useState(false);

  return (
    <div id="Projects">
      <div className="projectDescription">
        <h1>My projects</h1>
        <p>As I continue my journey in web development, I am working on projects that help me apply and strengthen my skills. Each project reflects my learning process, from understanding the basics of React and JavaScript to building interactive and responsive applications. Through these projects, I explore new concepts, improve problem-solving abilities, and refine my coding practices. I aim to enhance these projects further by adding new features and improving user experience.</p>
      </div>

      <div className="projectBox">

        <h2>Calculator</h2>
        <p>A simple calculator built using React.js with basic arithmetic functions.</p>


        <div className="buttonContainer">
          <button
            onClick={() => setShowImage(!showImage)}
            className={showImage ? "yellowButton" : "blueButton"}
          >
            {showImage ?
              (<img src={backImage} alt="backward" className='buttonImage' />)
              : "View Output"
            }
          </button>
          <a href="https://github.com/Arunthathi1705/calculator-react.git" target="_blank" rel="noopener noreferrer" >
            <button className="gitButton"><img src={gitImage} alt="github" className='gitImage' />GitHub</button>
          </a>
        </div>

        {showImage && <img src={calcImage} alt="calculator" className='projectImage' />}

      </div>


      <div className="projectBox">
        <h2>Portfolio</h2>
        <p>A project within a project, a creation that showcases creation. This portfolio is both the canvas and the masterpiece of my developer journey</p>


        <div className="buttonContainer">
          <button
            onClick={() => setShowPortfolioImage(!showPortfolioImage)}
            className={showPortfolioImage ? "yellowButton" : "blueButton"}
          >
            {showPortfolioImage ?
              (<img src={backImage} alt="backward" className='buttonImage' />)
              : "View Output"
            }
          </button>
          <a href="https://github.com/Arunthathi1705/porfolio.git" target="_blank" rel="noopener noreferrer" >
            <button className="gitButton"><img src={gitImage} alt="github" className='gitImage' />GitHub</button>
          </a>
        </div>

        {showPortfolioImage && <img src={portfolioImage} alt="portfolio" className='projectImage' />}

      </div>


    </div>

  )
}

export default Project