import styles from './styles/portfolio.module.css'
import { useState } from 'react'
import { importImage, projects } from '../utils'
import {
  IndexCircles,
  ProjectDescription,
  ProjectNavigation
} from '../components'

export default function Portfolio() {
  // sets index for current project
  const [currentProject, setCurrentProject] = useState(0)

  return (
    <section id="projects" className={styles.section}>
      <h1 className={styles.pageTitle}>Featured Projects</h1>
      <div className={styles.imageContainer}>
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
      </div>
      <ProjectDescription
        projects={projects}
        currentProject={currentProject}
        navigation={
          <ProjectNavigation
            projects={projects}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          ></ProjectNavigation>
        }
      />
    </section>
  )
}
