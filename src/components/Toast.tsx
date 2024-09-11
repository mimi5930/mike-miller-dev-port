import styles from './styles/toast.module.css'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { useEffect } from 'react'

export type ToastData = {
  success: boolean
  message: string
  show: boolean
}

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  toast: ToastData
  setToast: React.Dispatch<React.SetStateAction<ToastData>>
}

/**
 * Toast component to display success or error messages.
 *
 * @param props - The props for the Toast component.
 * @param props.toast - The toast data.
 * @param props.setToast - Function to update the toast state.
 * @returns The JSX element for the toast or null if not shown.
 */

export default function Toast({ toast, setToast, ...props }: ToastProps) {
  useEffect(() => {
    if (toast.show) {
      const interval = setInterval(() => {
        setToast({ success: false, message: '', show: false })
      }, 7000)
      return () => clearInterval(interval)
    }
  }, [setToast, toast])

  if (toast.show) {
    return (
      <div
        className={`${styles.toastContainer} ${
          props.className && props.className
        }`}
        {...props}
      >
        <p>
          {toast.success ? (
            <FaCheckCircle
              className={`${styles.toastIcon} ${styles.toastSuccessIcon}`}
            />
          ) : (
            <FaTimesCircle
              className={`${styles.toastIcon} ${styles.toastErrorIcon}`}
            />
          )}
          {toast.message}
        </p>
      </div>
    )
  }
}
