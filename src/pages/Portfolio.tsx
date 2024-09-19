import styles from './styles/portfolio.module.css'
import { useState } from 'react'
import {
  importImage,
  projects,
  prevProject,
  nextProject,
  handleTouchStart,
  handleTouchMove
} from '../utils'
import {
  IndexCircles,
  ProjectDescription,
  ProjectNavigation
} from '../components'

export default function Portfolio() {
  // sets index for current project
  const [currentProject, setCurrentProject] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  return (
    <section id="projects" className={styles.section}>
      <h1 className={styles.pageTitle}>Featured Projects</h1>
      <div
        className={styles.imageContainer}
        onTouchStart={event => handleTouchStart(event, setTouchPosition)}
        onTouchMove={event =>
          handleTouchMove(
            event,
            touchPosition,
            () =>
              nextProject(projects.length, currentProject, setCurrentProject),
            () =>
              prevProject(projects.length, currentProject, setCurrentProject),
            setTouchPosition
          )
        }
      >
        {projects.map((project, index) => {
          return (
            <img
              className={styles.image}
              style={{
                translate: `${-100 * currentProject}%`
              }}
              src={importImage(project.pic)}
              alt={project.alt}
              key={index}
            />
          )
        })}
        <IndexCircles
          projects={projects}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
        <ProjectDescription
          projects={projects}
          currentProject={currentProject}
        />
        <ProjectNavigation
          projects={projects}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        ></ProjectNavigation>
      </div>
    </section>
  )
}
