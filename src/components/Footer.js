
import React from 'react'
import "./../styles/Footer.css";
import linkedin from '../components/Assets/linkedin.png';
import github from '../components/Assets/github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p> &#169; 2025 Arunthathi. All Rights Reserved</p>
      <div className='social-icons'>
        <a href="https://www.linkedin.com/in/arunthathi-gurumoorthi-063812325/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" height="30px" width="30px" />
        </a>
        <a href="https://github.com/Arunthathi1705" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" height="30px" width="30px" />
        </a>
      </div>

    </footer>
  )
}



export default Footer