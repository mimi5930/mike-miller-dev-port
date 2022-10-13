import './styles/project-navigation.css';
import { FiGithub, FiGlobe } from 'react-icons/fi';

export default function ProjectNavigation({ url, gitHub }) {
  return (
    <div className="project-navigation">
      <button>{'<'}</button>
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
      <button>{'>'}</button>
    </div>
  );
}
