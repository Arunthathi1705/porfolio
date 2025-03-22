import React from 'react';
import "./../styles/About.css";
import cssImg from '../components/Assets/css.png';
import reactImg from '../components/Assets/react.png';
import javascriptImg from '../components/Assets/javascript.png';
import htmlImg from '../components/Assets/html-5.png';



const About = () => {

  return (
    <div id="About">
      <div className="skills">
        <h1 className='section1'>What I do</h1>
        <p className='section2'>  I have a strong foundation in front-end development, with hands-on experience in HTML, CSS, and JavaScript.
          I have also learned React.js and am working on strengthening my practical experience with it.
          I focus on creating user-friendly and responsive web pages while also exploring data structures and algorithms to enhance my problem-solving skills.</p>
      </div>
      <div className='skillBars'>
        <div className="skillBar">
          <img src={htmlImg} alt="Html" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML-Structure</h2>
            <p>HTML (HyperText Markup Language) structures web pages using elements like headings, paragraphs, links, and images.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={cssImg} alt="Css" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS-Styling</h2>
            <p>CSS (Cascading Style Sheets) styles HTML elements, controls layout, enhances design, and ensures responsiveness.</p>
          </div>
        </div>


        <div className="skillBar">
          <img src={javascriptImg} alt="Javascript" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JAVASCRIPT-Functionality </h2>
            <p>JavaScript is a versatile, dynamic programming language for building interactive web applications and server-side development.</p>
          </div>
        </div>


        <div className="skillBar">
          <img src={reactImg} alt="React" className="skillBarImg" />
          <div className="skillBarText">
            <h2> REACT-Interactive UI</h2>
            <p>React.js is a JavaScript library for building fast, interactive, and reusable user interface components.</p>
          </div>
        </div>

      </div>

    </div>

  )
}

export default About