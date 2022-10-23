import { useEffect, useState } from 'react';
import './styles/navbar.css';

// TODO: Fix navbar appearing when page reloads

export default function Navbar() {
  function onScroll() {
    window.scrollY ? setScroll(true) : setScroll(false);
  }

  const [scroll, setScroll] = useState(window.scrollY ? true : false);

  useEffect(() => {
    if (window.scrollY) onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className={`nav-container ${scroll && 'nav-container-scrolled'}`}>
      <div className="title-container">
        <h1>Mike Miller</h1>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>Resume</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </section>
  );
}
