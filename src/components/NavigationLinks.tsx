import styles from './styles/navigation-links.module.css'
import { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import {
  FiMenu,
  FiX,
  FiFolder,
  FiInfo,
  FiFile,
  FiMail,
  FiArrowDown
} from 'react-icons/fi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

type NavigationLinksProps = {
  smallScreen: boolean
  scroll: boolean
}

const resumeDropdown = [
  { name: 'View PDF', href: '#' },
  { name: 'Download PDF', href: '#' }
]

const socialIcons = [
  {
    name: 'GitHub',
    icon: <FiGithub className={styles.socialIcon} />,
    href: 'https://github.com/mimi5930'
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin className={styles.socialIcon} />,
    href: 'https://www.linkedin.com/in/michael-miller-4b72331a2/'
  }
]

export default function NavigationLinks({
  smallScreen,
  scroll
}: NavigationLinksProps) {
  const [dropdownDisplay, setDropdownDisplay] = useState(false)
  const [showDisplay, setShowDisplay] = useState(false)
  const [hamburgerIcon, setHamburgerIcon] = useState(true)
  const [currentIcon, setIcon] = useState(0)
  const [socialDropdownDisplay, setSocialDropdownDisplay] = useState(false)

  useEffect(() => {
    if (!smallScreen) {
      let count = 0
      function cycleArray() {
        setIcon(count)
        count++
        if (count === socialIcons.length) count = 0
      }
      let interval = setInterval(cycleArray, 5000)
      return () => clearInterval(interval)
    }
  }, [smallScreen])

  const hamburgerClickHandler = () => {
    setShowDisplay(!showDisplay)
    setHamburgerIcon(!hamburgerIcon)
  }

  if (smallScreen) {
    return (
      <>
        {hamburgerIcon ? (
          <FiMenu
            className={`${styles.hamburgerIcon} ${
              scroll && styles.hamburgerIconScrolled
            }`}
            onClick={hamburgerClickHandler}
          ></FiMenu>
        ) : (
          <FiX
            className={`${styles.hamburgerIcon} ${
              scroll && styles.hamburgerIconScrolled
            }`}
            onClick={hamburgerClickHandler}
          ></FiX>
        )}
        <div
          className={`${styles.drawer} ${
            showDisplay && `${styles.drawerShow}`
          } ${scroll && `${styles.drawerScrolled}`}`}
        >
          <ul className={`${styles.drawerNavContainer}`}>
            <li>
              <a href="#about" onClick={hamburgerClickHandler}>
                <FiInfo />
                <p className={styles.drawerText}>About</p>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={hamburgerClickHandler}>
                <FiFolder />
                <p className={styles.drawerText}>Projects</p>
              </a>
            </li>
            <li className={styles.resumeList}>
              <a href="#resume-link" onClick={hamburgerClickHandler}>
                <FiFile />
                <p className={styles.drawerText}>Resume</p>
              </a>
            </li>
            <li className={styles.resumeList}>
              <a href="#contact" onClick={hamburgerClickHandler}>
                <FiMail />
                <p className={styles.drawerText}>Contact</p>
              </a>
            </li>
            {socialIcons.map((social, index) => {
              return (
                <li className={styles.resumeList} key={index}>
                  <a href={social.href} onClick={hamburgerClickHandler}>
                    {social.icon}
                    <p className={styles.drawerText}>{social.name}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }

  return (
    <ul className={styles.containerList}>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li
        className={`${styles.resumeList} ${scroll && styles.listScrolled}`}
        onMouseEnter={() => setDropdownDisplay(true)}
        onMouseLeave={() => setDropdownDisplay(false)}
      >
        Resume
        <Dropdown display={dropdownDisplay} items={resumeDropdown}></Dropdown>
      </li>
      <li
        className={scroll ? styles.listScrolled : ''}
        onMouseEnter={() => setSocialDropdownDisplay(true)}
        onMouseLeave={() => setSocialDropdownDisplay(false)}
      >
        {socialDropdownDisplay ? (
          <FiArrowDown className={styles.socialIcon} />
        ) : (
          socialIcons[currentIcon].icon
        )}
        <Dropdown
          display={socialDropdownDisplay}
          items={socialIcons}
          onlyIcons={true}
        ></Dropdown>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  )
}
