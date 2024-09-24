import { FiMenu, FiX } from 'react-icons/fi'
import styles from './styles/hamburgerIcon.module.css'

type HamburgerProps = React.HTMLAttributes<SVGElement> & {
  scroll: boolean
  show: boolean
  onClick: () => void
}

export default function HamburgerIcon({
  scroll,
  show,
  onClick
}: HamburgerProps) {
  if (show) {
    return (
      <FiMenu
        className={`${styles.hamburgerIcon} ${
          scroll && styles.hamburgerIconScrolled
        }`}
        onClick={onClick}
      />
    )
  } else {
    return (
      <FiX
        className={`${styles.hamburgerIcon} ${
          scroll && styles.hamburgerIconScrolled
        }`}
        onClick={onClick}
      />
    )
  }
}
