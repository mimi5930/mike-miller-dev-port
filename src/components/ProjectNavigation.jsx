import './styles/project-navigation.css';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import { useMediaQuery } from '../utils/hooks/useMediaQuery';

export default function ProjectNavigation({
  url,
  gitHub,
  currentProject,
  setCurrentProject,
  projectsLength,
  setAnimation
}) {
  const smallerScreen = useMediaQuery('(max-width: 900px)');

  function prevProject() {
    setAnimation('prev-project');
    currentProject === 0
      ? setCurrentProject(projectsLength - 1)
      : setCurrentProject(currentProject - 1);
  }

  function nexProject() {
    setAnimation('next-project');
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
            {smallerScreen ? (
              <FiGlobe className="icon"></FiGlobe>
            ) : (
              <>
                <FiGlobe className="icon"></FiGlobe> Website
              </>
            )}
          </a>
        </button>
        <button>
          <a href={gitHub}>
            {smallerScreen ? (
              <FiGithub className="icon"></FiGithub>
            ) : (
              <>
                <FiGithub className="icon"></FiGithub> Repo
              </>
            )}
          </a>
        </button>
      </div>
      <button onClick={nexProject}>{'>'}</button>
    </div>
  );
}
