import { useState } from 'react';
import Dropdown from './Dropdown';
import { FiMenu, FiX, FiFolder, FiInfo, FiFile, FiMail } from 'react-icons/fi';

export default function NavigationLinks({ smallScreen }) {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(true);

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
        <Dropdown display={dropdownDisplay}></Dropdown>
      </li>
      <li className="nav-container-li">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
