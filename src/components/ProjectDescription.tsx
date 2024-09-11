import Spacer from './Spacer'
import styles from './styles/projectDescription.module.css'
import { type Projects } from '../utils'

type ProjectDescriptionProps = React.HTMLAttributes<HTMLDivElement> & {
  projects: Projects
  currentProject: number
}

export default function ProjectDescription({
  projects,
  currentProject,
  ...props
}: ProjectDescriptionProps) {
  // TODO: Figure out spacing for tech list
  const { title, languages, description } = projects[currentProject]
  return (
    <div
      className={`${styles.projectInfoCard} ${
        props.className && props.className
      }`}
      {...props}
    >
      <div className={styles.projectTitleContainer}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <div className={styles.languageContainer}>
          <h2 className={styles.techTitle}>Tech:</h2>
          <div className={styles.languageList}>
            {languages.map(language => {
              if (language.icon !== null) {
                return (
                  <div
                    className={styles.languageIconContainer}
                    key={language.title}
                  >
                    <div className={styles.tooltip}>{language.title}</div>
                    <p className={styles.languages}>{language.icon}</p>
                  </div>
                )
              } else {
                return (
                  <p className={styles.languageText} key={language.title}>
                    {language.title}
                  </p>
                )
              }
            })}
          </div>
        </div>
      </div>
      <Spacer />
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
