import './styles/toast.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Toast({ toast, setToast }) {
  useEffect(() => {
    if (Object.keys(toast).length !== 0) {
      const interval = setInterval(() => {
        setToast({});
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [setToast, toast]);

  if (Object.keys(toast).length !== 0) {
    return (
      <div className="toast-container">
        <p className="toast-message">
          {toast.success ? (
            <FaCheckCircle className="toast-icon toast-success-icon" />
          ) : (
            <FaTimesCircle className="toast-icon toast-error-icon"></FaTimesCircle>
          )}
          {toast.message}
        </p>
      </div>
    );
  }

  return;
}
