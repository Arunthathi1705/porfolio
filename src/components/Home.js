import React from 'react';
import myImage from '../components/Assets/myProfileImg.png';
import resumeImage from "../components/Assets/resume.pdf";
import "./../styles/Home.css";
import hireImage from '../components/Assets/hire me.png';



const Home = () => {
  return (
    <div id="Home" className="home">
      <div className='homeontainer'>
        <div className="homeContent">
          <span className="hello">Hello,</span>
          <span className="homeText">I'm <span className="homeName">Arunthathi</span></span>
          <span className="homeText"> Front-end Developer</span>
          <p className="homePara">I am skilled web developer in creating visually appealing, user friendly and responsive websites</p>
          <button className="hirebtn"><img src={hireImage} alt="hire me" className="hire" /><a href="#Contact">Hire Me</a></button>

        </div>
        <div className='imageSection'>
          <img src={myImage} alt="profile" className="profileImage" />
          <a href={resumeImage} target="_blank" rel="noopener noreferrer">
            <button className="resume">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;