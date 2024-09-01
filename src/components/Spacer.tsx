import './styles/spacer.css';

export default function Spacer({ className = null }) {
  return <hr className={`spacer${className ? ` ${className}` : ''}`}></hr>;
}
