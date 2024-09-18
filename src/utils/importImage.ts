/**
 * Dynamically generates the URL for an image based on the provided image name.
 *
 * @param imageName - The name of the image file.
 * @returns The URL of the image.
 */
const importImage = (imageName: string): string => {
  return new URL(`../img/projects/${imageName}`, import.meta.url).href
}

export default importImage
