import Spacer from '../components/Spacer';
import './style/about.css';

export default function About({ aboutRef }) {
  return (
    <>
      <div className="about-container" id="about" ref={aboutRef}>
        <div className="about-card">
          <div className="about-title-container">
            <h1>Hello World!</h1>
            <p>
              I am Mike Miller, an aspiring full-stack web developer and
              musician in Woodbury, Minnesota. Having graduated from the
              University of Minnesota's Coding Bootcamp through Trilogy
              Education Services, I am excited to find ways to utilize my
              passion for coding.
            </p>
          </div>
          <img
            className="about-image"
            src={require('../img/mike.jpg')}
            alt="Mike Miller"
          ></img>
        </div>
      </div>
      <Spacer />
    </>
  );
}
