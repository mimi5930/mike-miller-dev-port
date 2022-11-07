import './styles/dropdown.css';

export default function Dropdown({
  display = false,
  items,
  onlyIcons = false
}) {
  return (
    <ul
      className={`dropdown-container${
        display ? ' dropdown-container-show' : ''
      }${onlyIcons ? ' dropdown-container-icons' : ''}`}
    >
      {items.map(item => {
        return (
          <li className="dropdown-item" key={item.name}>
            <a href={item.href}>
              {item.icon ?? ''}
              {item.name ?? ''}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
