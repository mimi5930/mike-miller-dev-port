import './style/portfolio.css';
import ProjectDescription from '../components/ProjectDescription';
import { FiGithub, FiGlobe } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <div className="project-container">
      <h1 className="portfolio-page-title">Featured Projects</h1>
      <div className="project-card">
        <div className="project-navigation">
          <button>{'<'}</button>
          <div className="links">
            <button>
              <FiGlobe className="icon"></FiGlobe> Website
            </button>
            <button>
              <FiGithub className="icon"></FiGithub> Repo
            </button>
          </div>
          <button>{'>'}</button>
        </div>
        <ProjectDescription />
      </div>
    </div>
  );
}
