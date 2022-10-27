import './styles/toast.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useEffect, useState, useCallback } from 'react';

export default function Toast({ toast, setToast }) {
  useEffect(() => {
    console.log('ran');
    if (toast.message) {
      const interval = setInterval(() => {
        console.log('ran removal');
        setToast({});
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [setToast, toast]);

  // const [showClassName, setShowClassName] = useState({});

  // useEffect(() => {
  //   console.log('ran');
  //   if (show) {
  //     console.log('show is true');
  //     setShowClassName({ visibility: 'visible', bottom: '30px' });
  //     setTimeout(() => {
  //       console.log('ran timeout');
  //       setShowClassName({});
  //     }, 8000);
  //   } else {
  //     setShowClassName({});
  //   }
  // }, [show]);

  return (
    //${show && 'toast-show'}
    <div className={`toast-container`}>
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
