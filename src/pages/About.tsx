import Spacer from '../components/Spacer'
import styles from './style/about.module.css'
import mikeImage from '../img/mike.jpg'

export default function About() {
  return (
    <>
      <div className={styles.container} id="about">
        <div className={styles.card}>
          <div className={styles['title-container']}>
            <h1>Hello World!</h1>
            <p>
              I am Mike Miller, a full-stack web developer and musician in
              Woodbury, Minnesota. Having graduated from the University of
              Minnesota's Coding Bootcamp through Trilogy Education Services, I
              am excited to find ways to utilize my passion for coding.
            </p>
          </div>
          <img className={styles.image} src={mikeImage} alt="Mike Miller"></img>
        </div>
      </div>
      <Spacer />
    </>
  )
}
