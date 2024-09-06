import styles from './styles/projectNavigation.module.css'
import { FiGithub, FiGlobe } from 'react-icons/fi'
import { useMediaQuery } from '../utils/hooks/useMediaQuery'
import { type Projects } from '../utils'

type ProjectNavigationProps = {
  projects: Projects
  currentProject: number
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>
}

export default function ProjectNavigation({
  projects,
  currentProject,
  setCurrentProject
}: ProjectNavigationProps) {
  const smallerScreen = useMediaQuery('(max-width: 900px)')

  function prevProject() {
    currentProject === 0
      ? setCurrentProject(projects.length - 1)
      : setCurrentProject(currentProject - 1)
  }

  function nexProject() {
    currentProject === projects.length - 1
      ? setCurrentProject(0)
      : setCurrentProject(currentProject + 1)
  }

  const { url, gitHub } = projects[currentProject]

  return (
    <div className={styles.projectNavigation}>
      <button onClick={prevProject}>{'<'}</button>
      <div className={styles.links}>
        <button>
          <a href={url}>
            {smallerScreen ? (
              <FiGlobe className={styles.icon}></FiGlobe>
            ) : (
              <>
                <FiGlobe className={styles.icon}></FiGlobe> Website
              </>
            )}
          </a>
        </button>
        <button>
          <a href={gitHub}>
            {smallerScreen ? (
              <FiGithub className={styles.icon}></FiGithub>
            ) : (
              <>
                <FiGithub className={styles.icon}></FiGithub> Repo
              </>
            )}
          </a>
        </button>
      </div>
      <button onClick={nexProject}>{'>'}</button>
    </div>
  )
}
