import './styles/project-navigation.css';
import { FiGithub, FiGlobe } from 'react-icons/fi';

export default function ProjectNavigation({
  url,
  gitHub,
  currentProject,
  setCurrentProject,
  projectsLength
}) {
  function prevProject() {
    currentProject === 0
      ? setCurrentProject(projectsLength - 1)
      : setCurrentProject(currentProject - 1);
  }

  function nexProject() {
    currentProject === projectsLength - 1
      ? setCurrentProject(0)
      : setCurrentProject(currentProject + 1);
  }

  return (
    <div className="project-navigation">
      <button onClick={prevProject}>{'<'}</button>
      <div className="links">
        <button>
          <a href={url}>
            <FiGlobe className="icon"></FiGlobe> Website
          </a>
        </button>
        <button>
          <a href={gitHub}>
            <FiGithub className="icon"></FiGithub> Repo{' '}
          </a>
        </button>
      </div>
      <button onClick={nexProject}>{'>'}</button>
    </div>
  );
}
