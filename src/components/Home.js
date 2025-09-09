import React from 'react';
import myImage from '../components/Assets/akalya.png';
import "./../styles/Home.css";
import resumeImage from "../components/Assets/resume.pdf"


const Home = () => {
  return (
    <div id="Home" className="home">
      <div className="homeContent">
        <span className="hello">Hello,</span>
        <span className="homeText">I'm <span className="homeName">Akalya</span></span>
        <span className="homeText"> Front-End Developer</span>
        <p className="homePara">I am skilled web developer in creating visually appealing, user friendly and responsive websites</p>
        <button className="hirebtn"><a href="#Contact">💼  Hire Me</a></button>
      </div>
      <div className='imageSection'>
      <img src={myImage} alt="profile" className="profileImage" />
      <a href={resumeImage} target="_blank" rel="noopener noreferrer">
            <button className="resume">Resume</button> </a>
</div>
    </div>
  );
};

export default Home;