export type ProjectFunction = (
  projectLength: number,
  currentProject: number,
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>
) => void

/**
 * Moves to the previous project in a list of projects.
 * If the current project is the first one, it wraps around to the last project.
 *
 * @param projectLength - The total number of projects.
 * @param currentProject - The index of the current project.
 * @param setCurrentProject - Function to update the current project index.
 */
export const prevProject: ProjectFunction = (
  projectLength,
  currentProject,
  setCurrentProject
) => {
  currentProject === 0
    ? setCurrentProject(projectLength - 1)
    : setCurrentProject(currentProject - 1)
}

/**
 * Advances to the next project in a list of projects.
 * If the current project is the last one, it wraps around to the first project.
 *
 * @param projectLength - The total number of projects.
 * @param currentProject - The index of the current project.
 * @param setCurrentProject - Function to update the current project index.
 */
export const nextProject: ProjectFunction = (
  projectLength,
  currentProject,
  setCurrentProject
) => {
  currentProject === projectLength - 1
    ? setCurrentProject(0)
    : setCurrentProject(currentProject + 1)
}
