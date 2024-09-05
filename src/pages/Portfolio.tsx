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
        <h1 className={styles.pageTitle}>Featured Projects</h1>
        <div className={styles.indexCircleContainer}>
          {projects.map((project, index) => {
            if (index < currentProject + 1) {
              return (
                <FaCircle
                  className={`${styles.indexCircle} ${styles.solidCircle}`}
                  key={project.title}
                  onClick={() => {
                    indexCircleClickHandler(index)
                  }}
                ></FaCircle>
              )
            }
            return (
              <FaRegCircle
                className={styles.indexCircle}
                key={project.title}
                onClick={() => {
                  indexCircleClickHandler(index)
                }}
              ></FaRegCircle>
            )
          })}
        </div>
        <div
          className={`${styles.card} ${
            forwardAnimation
              ? ` ${styles.nextProject}`
              : ` ${styles.prevProject}`
          }`}
          key={Math.random()}
        >
          <img
            className={styles.image}
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
