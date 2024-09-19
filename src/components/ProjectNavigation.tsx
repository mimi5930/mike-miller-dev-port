import styles from './styles/projectNavigation.module.css'
import {
  FiChevronLeft,
  FiChevronRight,
  FiGithub,
  FiGlobe
} from 'react-icons/fi'
import { useMediaQuery } from '../utils/hooks'
import { type Projects, prevProject, nextProject } from '../utils'

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

  const { url, gitHub } = projects[currentProject]

  return (
    <div className={styles.projectNavigation}>
      <button
        onClick={() =>
          prevProject(projects.length, currentProject, setCurrentProject)
        }
      >
        <FiChevronLeft />
      </button>
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
      <button
        onClick={() =>
          nextProject(projects.length, currentProject, setCurrentProject)
        }
      >
        <FiChevronRight />
      </button>
    </div>
  )
}
