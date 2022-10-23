import './style/contact.css';
import { FaUserCircle, FaRegComment } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <form className="contact-form">
        <h1 className="contact-page-title">Contact Mike</h1>
        <div className="form-input-container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Your name" />
          <FaUserCircle className="form-input-icon" />
        </div>
        <div className="form-input-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your email" />
          <MdAlternateEmail className="form-input-icon" />
        </div>
        <div className="form-input-container">
          <label htmlFor="message">Message or Question</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Your message or question"
          />
          <FaRegComment className="form-input-icon" />
        </div>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
