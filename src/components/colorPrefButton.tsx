import { MoonIcon, SunIcon } from './svg'
import styles from './styles/colorPrefButton.module.css'

type ColorPrefButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  prefersDarkMode: boolean
  setPrefersDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  scroll: boolean
  isDropdown?: boolean
}

export default function ColorPrefButton({
  prefersDarkMode,
  setPrefersDarkMode,
  scroll,
  isDropdown = false,
  ...props
}: ColorPrefButtonProps) {
  return (
    <button
      onClick={() => setPrefersDarkMode(!prefersDarkMode)}
      className={`${styles.colorPrefButton} ${
        scroll && !isDropdown && styles.colorPrefScrolled
      } ${props.className && props.className}`}
      {...props}
    >
      <SunIcon className={styles.sunIcon} />
      <MoonIcon className={styles.moonIcon} />
    </button>
  )
}
