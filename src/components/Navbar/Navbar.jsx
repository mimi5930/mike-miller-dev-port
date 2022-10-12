import { useEffect, useState } from 'react';
import './navbar.css';

// TODO: Navigation Links Scroll to different sections

export default function Navbar() {
  function onScroll() {
    window.scrollY ? setScroll(true) : setScroll(false);
  }

  const [scroll, setScroll] = useState(window.scrollY ? true : false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className={`nav-container ${scroll && 'nav-container-scrolled'}`}>
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
