import styles from './styles/dropdown.module.css'
import { textOrIconDisplay } from '../utils'

export type Item = {
  name?: string
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>['href']
  icon?: JSX.Element
  anchorProps?: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
}

type DropdownProps = React.HTMLAttributes<HTMLUListElement> & {
  display?: boolean
  items: Item[]
  onlyIcons?: boolean
}

export default function Dropdown({
  display = false,
  items,
  onlyIcons = false,
  ...props
}: DropdownProps) {
  return (
    <ul
      className={`${styles.container} 
        ${display ? `${styles.containerShow}` : ''}${
        onlyIcons ? ` ${styles.containerIcons}` : ''
      }`}
      {...props}
    >
      {items.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <a href={item.href} {...item.anchorProps}>
              {textOrIconDisplay(item, onlyIcons)}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
