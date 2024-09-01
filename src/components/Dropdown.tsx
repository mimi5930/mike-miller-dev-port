import './styles/dropdown.css';

type Items = {
  name?: string;
  href: string;
  icon?: JSX.Element;
}[];

type DropdownProps = {
  display?: boolean;
  items: Items;
  onlyIcons?: boolean;
};

export default function Dropdown({
  display = false,
  items,
  onlyIcons = false
}: DropdownProps) {
  return (
    <ul
      className={`dropdown-container${
        display ? ' dropdown-container-show' : ''
      }${onlyIcons ? ' dropdown-container-icons' : ''}`}
    >
      {items.map((item, index) => {
        return (
          <li className="dropdown-item" key={index}>
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
