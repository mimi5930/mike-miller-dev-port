import styles from './style/portfolio.module.css'
import ProjectDescription from '../components/ProjectDescription'
import { FaCircle, FaRegCircle } from 'react-icons/fa'
import { useState } from 'react'
import Spacer from '../components/Spacer'
import ProjectNavigation from '../components/ProjectNavigation'
import { importImage, projects } from '../utils'

export default function Portfolio() {
  // sets index for current project
  const [currentProject, setCurrentProject] = useState(0)
  const [forwardAnimation, setForwardAnimation] = useState<boolean>(false)

  const indexCircleClickHandler = (index: number) => {
    if (currentProject > index) {
      setForwardAnimation(true)
      setCurrentProject(index)
    } else if (currentProject < index) {
      setForwardAnimation(false)
      setCurrentProject(index)
    }
  }

  return (
    <>
      <div className={styles.container} id="projects">
        <h1 className={styles['page-title']}>Featured Projects</h1>
        <div className={styles['index-circle-container']}>
          {projects.map((project, index) => {
            if (index < currentProject + 1) {
              return (
                <FaCircle
                  className={`${styles['index-circle']} ${styles['solid-circle']}`}
                  key={project.title}
                  onClick={() => {
                    indexCircleClickHandler(index)
                  }}
                ></FaCircle>
              )
            }
            return (
              <FaRegCircle
                className={styles['index-circle']}
                key={project.title}
                onClick={() => {
                  indexCircleClickHandler(index)
                }}
              ></FaRegCircle>
            )
          })}
        </div>
        {/* TODO: FIGURE THIS OUT!?!?!?!? */}
        <div className={styles.card + ' ' + { forwardAnimation ? `${styles['next-project']}` : `${styles['prev-project']}` }} key={Math.random()}>
          <img
            className="project-image"
            src={importImage(projects[currentProject].pic)}
            alt={projects[currentProject].alt}
          />
          <ProjectDescription
            title={projects[currentProject].title}
            languages={projects[currentProject].languages}
            description={projects[currentProject].description}
            navigation={
              <ProjectNavigation
                projectsLength={projects.length}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                url={projects[currentProject].url}
                gitHub={projects[currentProject].gitHub}
                setAnimation={setForwardAnimation}
              ></ProjectNavigation>
            }
          />
        </div>
      </div>
      <Spacer />
    </>
  )
}
