import './style/contact.css';
import {
  FaUserCircle,
  FaRegComment,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner
} from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { useRef } from 'react';
import { useState } from 'react';
import Toast from '../components/Toast';

export default function Contact() {
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const [inputError, setInputError] = useState({
    name: null,
    email: null,
    message: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [toast, setToast] = useState({});

  function determineIcon(initialIcon, field) {
    if (inputError[field] === null) {
      return initialIcon;
    } else if (inputError[field]) {
      return <FaTimesCircle className="form-input-icon error-icon" />;
    }
    return <FaCheckCircle className="form-input-icon success-icon" />;
  }

  function resetForm() {
    // reset inputs
    nameInput.current.value = '';
    emailInput.current.value = '';
    messageInput.current.value = '';
    // reset error icons
    setInputError({
      name: null,
      email: null,
      message: null
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const data = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      message: messageInput.current.value
    };

    let inputError = {};

    Object.keys(data).forEach(key => {
      if (data[key] === '') {
        inputError[key] = true;
      } else {
        inputError[key] = false;
      }
    });

    setInputError(inputError);

    // set Toast
    setToast({
      success: true,
      message: 'test message'
    });

    // if no falsy values exist
    if (!inputError.name && !inputError.email && !inputError.message) {
      // set loading spinner
      setIsLoading(true);

      // submit data
      // try {
      //   const response = await fetch(
      //     'https://formsubmit.co/ajax/mikej.miller440@gmail.com',
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //         Accept: 'application/json'
      //       },
      //       body: JSON.stringify(data)
      //     }
      //   );
      //   if (response.ok) {
      //     setIsLoading(false);
      //     // reset form
      //     setSubmissionStatus(true);
      //     resetForm();
      //   } else {
      //     console.log('error!!! ', response);
      //   }
      // } catch (error) {
      //   console.log('caught error', error);
      //   setIsLoading(false);
      // }
    }
  }

  return (
    <div className="contact-container" id="contact">
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <h1 className="contact-page-title">Contact Mike</h1>
        <div className="form-input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder={
              inputError.name ? 'Please provide your name' : 'Your name'
            }
            ref={nameInput}
          />
          {determineIcon(<FaUserCircle className="form-input-icon" />, 'name')}
        </div>
        <div className="form-input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder={
              inputError.email ? 'Please provide your email' : 'Your email'
            }
            ref={emailInput}
          />
          {determineIcon(
            <MdAlternateEmail className="form-input-icon" />,
            'email'
          )}
        </div>
        <div className="form-input-container">
          <label htmlFor="message">Message or Question</label>
          <textarea
            name="message"
            rows="4"
            placeholder={
              inputError.message
                ? 'Please leave a message'
                : 'Your message or question'
            }
            ref={messageInput}
          />
          {determineIcon(
            <FaRegComment className="form-input-icon" />,
            'message'
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`form-submit-button ${
            isLoading && 'form-submit-button-loading'
          }`}
        >
          {isLoading ? <FaSpinner className="loading-spinner" /> : 'Submit'}
        </button>
      </form>
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
}
