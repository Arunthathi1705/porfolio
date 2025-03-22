import React from 'react';
import myImage from '../components/Assets/myProfileImg.png';
import "./../styles/Home.css";
import hireImage from '../components/Assets/hire me.png';



const Home = () => {
  return (
    <div id="Home" className="home">
      <div className="homeContent">
        <span className="hello">Hello,</span>
        <span className="homeText">I'm <span className="homeName">Arunthathi</span></span>
        <span className="homeText"> Website Developer</span>
        <p className="homePara">I am skilled web developer in creating visually appealing, user friendly and responsive websites</p>
        <button className="hirebtn"><img src={hireImage} alt="hire me" className="hire" /><a href="#Contact">Hire Me</a></button>
      </div>
      <img src={myImage} alt="profile" className="profileImage" />

    </div>
  );
};

export default Home;