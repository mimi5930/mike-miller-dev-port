import './styles/navigation-links.css';
import { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import {
  FiMenu,
  FiX,
  FiFolder,
  FiInfo,
  FiFile,
  FiMail,
  FiArrowDown
} from 'react-icons/fi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const resumeDropdown = [
  { name: 'View PDF', href: '#' },
  { name: 'Download PDF', href: '#' }
];

const socialIcons = [
  {
    icon: <FiGithub className="social-icon" />,
    href: 'https://github.com/mimi5930'
  },
  {
    icon: <FiLinkedin className="social-icon" />,
    href: 'https://www.linkedin.com/in/michael-miller-4b72331a2/'
  }
];

export default function NavigationLinks({ smallScreen }) {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(true);
  const [currentIcon, setIcon] = useState(0);
  const [socialDropdownDisplay, setSocialDropdownDisplay] = useState(false);

  useEffect(() => {
    if (!smallScreen) {
      let count = 0;
      function cycleArray() {
        setIcon(count);
        count++;
        if (count === socialIcons.length) count = 0;
      }
      let interval = setInterval(cycleArray, 5000);
      return () => clearInterval(interval);
    }
  }, [smallScreen]);

  const hamburgerClickHandler = () => {
    setShowDisplay(!showDisplay);
    setHamburgerIcon(!hamburgerIcon);
  };

  if (smallScreen) {
    return (
      <>
        {hamburgerIcon ? (
          <FiMenu
            className="nav-hamburger-icon"
            onClick={hamburgerClickHandler}
          ></FiMenu>
        ) : (
          <FiX
            className="nav-hamburger-icon"
            onClick={hamburgerClickHandler}
          ></FiX>
        )}
        <div className={`drawer${showDisplay ? ' drawer-show' : ''}`}>
          <ul className="nav-container-ul drawer-nav-container-ul">
            <li className="nav-container-li drawer-nav-container-li">
              <a href="#about" onClick={hamburgerClickHandler}>
                <FiInfo className="nav-icon"></FiInfo> About
              </a>
            </li>
            <li className="nav-container-li drawer-nav-container-li">
              <a href="#projects" onClick={hamburgerClickHandler}>
                <FiFolder className="nav-icon"></FiFolder> Projects
              </a>
            </li>
            <li className="nav-container-li resume-li drawer-nav-container-li">
              <a href="#resume-link" onClick={hamburgerClickHandler}>
                <FiFile className="nav-icon"></FiFile> Resume
              </a>
            </li>
            <li className="nav-container-li drawer-nav-container-li">
              <a href="#contact" onClick={hamburgerClickHandler}>
                <FiMail className="nav-icon"></FiMail> Contact
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }

  return (
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
        <Dropdown display={dropdownDisplay} items={resumeDropdown}></Dropdown>
      </li>
      <li
        className="nav-container-li"
        onMouseEnter={() => setSocialDropdownDisplay(true)}
        onMouseLeave={() => setSocialDropdownDisplay(false)}
      >
        {socialDropdownDisplay ? (
          <FiArrowDown className="social-icon" />
        ) : (
          socialIcons[currentIcon].icon
        )}
        <Dropdown
          display={socialDropdownDisplay}
          items={socialIcons}
          onlyIcons={true}
        ></Dropdown>
      </li>
      <li className="nav-container-li">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
