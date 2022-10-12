import './styles/projects.css';
import './styles/project-image.css';
import { FiGithub, FiGlobe } from 'react-icons/fi';

export default function ProjectImage() {
  return (
    <div className="project-card picture-card">
      <div className="spacer"></div>
      <div className="link-buttons">
        <button className="button mr-10">
          <FiGlobe className="icon"></FiGlobe> Website
        </button>
        <button className="button">
          <FiGithub className="icon"></FiGithub> Repo
        </button>
      </div>
      <div className="location-buttons">
        <button className="button mr-10">{'<'}</button>
        <button className="button">{'>'}</button>
      </div>
    </div>
  );
}
