import { useMediaQuery } from '../utils/hooks/useMediaQuery'
import { useScroll } from '../utils/hooks/useScroll'
import styles from './styles/navbar.module.css'
import NavigationLinks from './NavigationLinks'

type NavbarProps = {
  prefersDarkMode: boolean
  setPrefersDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({
  setPrefersDarkMode,
  prefersDarkMode
}: NavbarProps) {
  const smallScreen = useMediaQuery('(max-width: 700px)')
  const scroll = useScroll()

  return (
    <section
      className={`${styles.container} ${
        scroll ? ` ${styles.containerScrolled}` : ''
      }`}
    >
      <div className={styles.titleContainer}>
        <a href="/#about">
          <h1>Mike Miller</h1>
        </a>
      </div>
      <NavigationLinks
        setPrefersDarkMode={setPrefersDarkMode}
        prefersDarkMode={prefersDarkMode}
        smallScreen={smallScreen}
        scroll={scroll}
      ></NavigationLinks>
    </section>
  )
}
