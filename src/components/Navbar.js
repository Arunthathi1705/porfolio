import React, { useState } from 'react';
import "./../styles/Navbar.css";
import logoImage from '../components/Assets/coding.png';
import menuImage from '../components/Assets/menu.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">
        <img src={logoImage} alt="logo" className="compLogo" /> Arunthathi
      </h2>

      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>


      <img
        src={menuImage}
        alt="menu"
        className="menuIcon"
        onClick={() => setShowMenu(prev => !prev)}
      />

      <div className={`menuBox ${showMenu ? "show" : ""}`}>
        <ul className="listItems">
          <li onClick={() => setShowMenu(false)}><a href="#Home">Home</a></li>
          <li onClick={() => setShowMenu(false)}><a href="#About">About</a></li>
          <li onClick={() => setShowMenu(false)}><a href="#Projects">Projects</a></li>
          <li onClick={() => setShowMenu(false)}><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

