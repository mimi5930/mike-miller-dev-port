import React from 'react';
import './navbar.css';

// TODO: Add scroll hook to change navbar opacity
// TODO: Add Icon?
// TODO: Navigation Links Scroll to different sections

export default function Navbar() {
  return (
    <section className="nav-container">
      <div className="title-container">
        <h1>Michael Miller</h1>
        <h2>Web Developer</h2>
      </div>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </section>
  );
}
