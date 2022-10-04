import React, { useEffect, useState } from 'react';
import './navbar.css';

// TODO: Add scroll hook to change navbar opacity
// TODO: Add Icon?
// TODO: Navigation Links Scroll to different sections

export default function Navbar() {
  function onScroll() {
    console.log('scollY', window.scrollY);
    if (window.scrollY <= 100) setScroll(window.scrollY);
    else {
      setScroll(0);
    }
  }
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [window.scrollY]);

  return (
    <section
      className="nav-container"
      style={{
        backgroundColor: `#253237${100 - window.scrollY}`
      }}
    >
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
