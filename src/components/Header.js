import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Vasanth Kumar S</h1>
      <h4>Web Developer</h4>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;