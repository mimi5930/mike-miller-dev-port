import { FaCircle, FaRegCircle } from 'react-icons/fa'
import { type Projects } from '../utils/projects'
import styles from './styles/indexCircles.module.css'

type IndexCirclesProps = React.HTMLAttributes<HTMLDivElement> & {
  projects: Projects
  currentProject: number
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>
}

export default function IndexCircle({
  projects,
  currentProject,
  setCurrentProject,
  ...props
}: IndexCirclesProps) {
  return (
    <div {...props} className={styles.indexCircleContainer}>
      {projects.map((project, index) => {
        if (index < currentProject + 1) {
          return (
            <FaCircle
              className={`${styles.indexCircle} ${styles.solidCircle}`}
              key={project.title}
              onClick={() => {
                setCurrentProject(index)
              }}
            ></FaCircle>
          )
        }
        return (
          <FaRegCircle
            className={styles.indexCircle}
            key={project.title}
            onClick={() => {
              setCurrentProject(index)
            }}
          ></FaRegCircle>
        )
      })}
    </div>
  )
}
