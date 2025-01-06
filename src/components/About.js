import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <h3>Education</h3>
      <ul>
      <li><p> B.Sc.,Computer Science - DG Vaishnav College [ Present ]</p></li>
      <li><p> B.S.,Data Science & Applications - IIT Madras [ Present ]</p></li>
      <li><p> Class XII - Sir Ramaswamy Mudaliar Higher Secondary School [ 2023 (91%) ]</p></li>
     </ul>
      <hr></hr>
      <h3>Work Experience</h3>
      <ul>
      <li><p>Web Development Internship at Prodigy InfoTech  [ Dec 2024 - Jan 2025 ]</p></li>
      </ul>
      <hr></hr>
      <h3>Certification Courses</h3>
      <ul>
      <li><p>BootStrap Framework</p></li>
      <li><p>React JS</p></li>
      </ul>
    </section>
  );
};

export default About;