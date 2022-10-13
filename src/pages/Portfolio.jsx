import './style/portfolio.css';
import ProjectDescription from '../components/ProjectDescription';
import ProjectNavigation from '../components/ProjectNavigation';

const testProject = {
  title: 'Ritual',
  pic: 'ritual.png',
  languages: 'MongoDB, GrpahQL, Chakra UI, React',
  description:
    'Ritual is a goal setting application centered on wellness, where we can add new goals, track daily goals, and monitor progress.',
  alt: "Ritual's homepage",
  url: 'https://ritual-app-01.herokuapp.com/',
  gitHub: 'https://github.com/Metelak/Ritual'
};

export default function Portfolio() {
  return (
    <div className="project-container">
      <h1 className="portfolio-page-title">Featured Projects</h1>
      <div
        className="project-card"
        style={{
          backgroundImage: require(`../img/projects/${testProject.pic}`)
        }}
      >
        <ProjectNavigation url={testProject.url} gitHub={testProject.gitHub} />
        <ProjectDescription
          title={testProject.title}
          languages={testProject.languages}
          description={testProject.description}
        />
      </div>
    </div>
  );
}
