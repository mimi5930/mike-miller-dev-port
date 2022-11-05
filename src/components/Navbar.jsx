import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import './styles/navbar.css';

// TODO: Fix navbar appearing when page reloads
// TODO: Active element disappears after a bit?

export default function Navbar() {
  function onScroll() {
    window.scrollY ? setScroll(true) : setScroll(false);
  }

  const [scroll, setScroll] = useState(window.scrollY ? true : false);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  useEffect(() => {
    if (window.scrollY) onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      className={`nav-container${scroll ? ' nav-container-scrolled' : ''}`}
    >
      <div className="title-container">
        <h1>Mike Miller</h1>
      </div>
      <ul className="nav-container-ul">
        <li className="nav-container-li">
          <a href="#about">About</a>
        </li>
        <li className="nav-container-li">
          <a href="#projects">Projects</a>
        </li>
        <li
          className="nav-container-li resume-li"
          onMouseEnter={() => setDropdownDisplay(true)}
          onMouseLeave={() => setDropdownDisplay(false)}
        >
          Resume
          <Dropdown display={dropdownDisplay}></Dropdown>
        </li>
        <li className="nav-container-li">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </section>
  );
}
