import { type Item } from '../components/Dropdown'

/**
 * Displays either the text or icon from an item based on the `onlyIcons` flag.
 *
 * @param item - The item containing the name and icon.
 * @param onlyIcons - Flag indicating whether to display only icons.
 * @returns The name or icon of the item, or an empty string if neither is applicable.
 */
export function textOrIconDisplay(item: Item, onlyIcons: boolean) {
  if (item.name && !onlyIcons) {
    return item.name
  } else if (item.icon && onlyIcons) {
    return item.icon
  } else {
    return ''
  }
}
