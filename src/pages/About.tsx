import Spacer from '../components/Spacer'
import styles from './style/about.module.css'
import mikeImage from '../img/mike.jpg'

export default function About() {
  return (
    <>
      <div className={styles.container} id="about">
        <div className={styles.card}>
          <div className={styles.titleContainer}>
            <h1>Hello World!</h1>
            <div>
              <p>
                I am Mike Miller, a full-stack web developer and musician based
                in Woodbury, Minnesota. Having graduated from the University of
                Minnesota&#39;s Coding Bootcamp through Trilogy Education
                Services, I am excited to find ways to utilize my passion for
                coding.
              </p>
              <p>
                With a strong foundation in both front-end and back-end
                technologies, I thrive on creating seamless and dynamic web
                applications. My journey into web development began with a
                curiosity for how things work behind the scenes, and it quickly
                grew into a full-fledged passion. I enjoy tackling complex
                problems and turning ideas into reality through code.
              </p>
              <p>
                In addition to my technical skills, I bring a creative
                perspective to my projects, thanks to my background in music.
                This unique combination allows me to approach challenges with a
                fresh and innovative mindset. Whether I&#39;m composing a new
                piece of music or developing a new feature, I am driven by a
                desire to create and improve.
              </p>
              <p>
                I am always eager to learn and stay updated with the latest
                industry trends and best practices. Collaboration and continuous
                improvement are at the heart of my work ethic. I believe in the
                power of teamwork and am always open to new opportunities to
                grow and contribute.
              </p>
              <p>
                When I&#39;m not coding or playing music, you can find me
                exploring the outdoors, experimenting with new recipes in the
                kitchen, or spending quality time with family and friends. I am
                excited to connect with like-minded individuals and explore new
                opportunities in the tech world.
              </p>
            </div>
          </div>
          {/* <div className={styles.imageContainer}> */}
          <img className={styles.image} src={mikeImage} alt="Mike Miller"></img>
          {/* </div> */}
        </div>
      </div>
      <Spacer />
    </>
  )
}
