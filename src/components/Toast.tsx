import './styles/toast.css'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { useEffect } from 'react'

export type ToastData = {
  success: boolean
  message: string
  show: boolean
}

export type ToastProps = {
  toast: ToastData
  setToast: React.Dispatch<React.SetStateAction<ToastData>>
}

/**
 * @typedef {Object} ToastData
 * @property {boolean} success - Indicates if the toast is a success message.
 * @property {string} message - The message to be displayed in the toast.
 * @property {boolean} show - Determines if the toast should be shown.
 */

/**
 * @typedef {Object} ToastProps
 * @property {ToastData} toast - The toast data.
 * @property {React.Dispatch<React.SetStateAction<ToastData>>} setToast - Function to update the toast state.
 */

/**
 * Toast component to display success or error messages.
 *
 * @param {ToastProps} props - The props for the Toast component.
 * @returns {JSX.Element} The JSX element for the toast.
 */
export default function Toast({ toast, setToast }: ToastProps) {
  useEffect(() => {
    // Object.keys(toast).length !== 0
    if (toast.show) {
      const interval = setInterval(() => {
        setToast({ success: false, message: '', show: false })
      }, 7000)
      return () => clearInterval(interval)
    }
  }, [setToast, toast])

  // Object.keys(toast).length !== 0
  if (toast.show) {
    return (
      <div className="toast-container">
        <p className="toast-message">
          {toast.success ? (
            <FaCheckCircle className="toast-icon toast-success-icon" />
          ) : (
            <FaTimesCircle className="toast-icon toast-error-icon" />
          )}
          {toast.message}
        </p>
      </div>
    )
  }
}
