import { type ProjectFunction } from './navigateProjects'

/**
 * Handles the touch start event by capturing the initial touch position
 * and updating the state with this position.
 *
 * @param event - The touch event triggered by the user.
 * @param setTouchPosition - Function to update the touch position state.
 */
export const handleTouchStart = (
  event: React.TouchEvent,
  setTouchPosition: React.Dispatch<React.SetStateAction<number | null>>
) => {
  const touchPosition = event.touches[0].clientX
  setTouchPosition(touchPosition)
}

/**
 * Handles the touch move event by determining the direction of the swipe
 * and triggering the appropriate project navigation function.
 * Resets the touch position state after handling the swipe.
 *
 * @param event - The touch event triggered by the user.
 * @param touchPosition - The initial touch position.
 * @param nextProject - Function to navigate to the next project.
 * @param prevProject - Function to navigate to the previous project.
 * @param setTouchPosition - Function to update the touch position state.
 */
export const handleTouchMove = (
  event: React.TouchEvent,
  touchPosition: null | number,
  nextProject: () => void,
  prevProject: () => void,
  setTouchPosition: React.Dispatch<React.SetStateAction<number | null>>
) => {
  if (touchPosition == null) {
    return
  }

  const currentTouch = event.touches[0].clientX
  const diff = touchPosition - currentTouch

  if (diff > 5) {
    nextProject()
  }

  if (diff < -5) {
    prevProject()
  }

  setTouchPosition(null)
}
