import { useMediaQuery } from '../utils/hooks/useMediaQuery'
import { useScroll } from '../utils/hooks/useScroll'
import styles from './styles/navbar.module.css'
import NavigationLinks from './NavigationLinks'

export default function Navbar() {
  const smallScreen = useMediaQuery('(max-width: 700px)')
  const scroll = useScroll()

  return (
    <section
      className={`${styles.container} ${
        scroll ? ` ${styles.containerScrolled}` : ''
      }`}
    >
      <div className={styles.titleContainer}>
        <h1>Mike Miller</h1>
      </div>
      <NavigationLinks
        smallScreen={smallScreen}
        scroll={scroll}
      ></NavigationLinks>
    </section>
  )
}
