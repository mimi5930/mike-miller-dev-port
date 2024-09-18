import { MoonIcon, SunIcon } from './svg'
import styles from './styles/colorPrefButton.module.css'

type ColorPrefButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  prefersDarkMode: boolean
  setPrefersDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  scroll: boolean
}

export default function ColorPrefButton({
  prefersDarkMode,
  setPrefersDarkMode,
  scroll,
  ...props
}: ColorPrefButtonProps) {
  return (
    <button
      onClick={() => setPrefersDarkMode(!prefersDarkMode)}
      className={`${styles.colorPrefButton} ${
        scroll && styles.colorPrefScrolled
      } ${props.className && props.className}`}
      {...props}
    >
      <SunIcon className={styles.sunIcon} />
      <MoonIcon className={styles.moonIcon} />
    </button>
  )
}
