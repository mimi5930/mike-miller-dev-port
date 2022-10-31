import './styles/dropdown.css';

export default function Dropdown({ display = false }) {
  return (
    <ul
      className={`dropdown-container${
        display ? ' dropdown-container-show' : ''
      }`}
    >
      <li className="dropdown-item">
        <a>View PDF</a>
      </li>
      <li className="dropdown-item">
        <a>Download PDF</a>
      </li>
    </ul>
  );
}
