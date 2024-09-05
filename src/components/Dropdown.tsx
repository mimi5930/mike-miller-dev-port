import styles from './styles/dropdown.module.css'

type Items = {
  name?: string
  href: string
  icon?: JSX.Element
}[]

type DropdownProps = React.HTMLAttributes<HTMLUListElement> & {
  display?: boolean
  items: Items
  onlyIcons?: boolean
}

export default function Dropdown({
  display = false,
  items,
  onlyIcons = false,
  ...rest
}: DropdownProps) {
  return (
    <ul
      className={`${styles.container} 
        ${display ? `${styles.containerShow}` : ''}${
        onlyIcons ? ` ${styles.containerIcons}` : ''
      }`}
      {...rest}
    >
      {items.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <a href={item.href}>
              {item.icon ?? ''}
              {item.name ?? ''}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
