import styles from './styles/error.module.css'
export default function ErrorIcon({
  ...props
}: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--alert-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={`${styles.svg} ${props.className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 19h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
      <path d="M3 7l9 6l9 -6" />
      <path d="M19 16v3" className={styles.exclamation} />
      <path d="M19 22v.01" className={styles.exclamation} />
    </svg>
  )
}
