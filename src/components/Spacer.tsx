import styles from './styles/spacer.module.css'

type Spacer = React.HTMLAttributes<HTMLHRElement>

export default function Spacer({ ...props }: Spacer) {
  return (
    <hr
      className={`${styles.spacer} ${props.className && props.className}`}
      {...props}
    ></hr>
  )
}
