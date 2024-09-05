import styles from './styles/success.module.css'

export default function SuccessIcon({
  ...props
}: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--success-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={`${styles.svg} ${props.className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path className={styles.line} d="M3 7h3" />
      <path className={styles.line} d="M3 11h2" />
      <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z" />
      <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" />
    </svg>
  )
}
