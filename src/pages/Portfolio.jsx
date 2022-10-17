import './style/portfolio.css';
import ProjectDescription from '../components/ProjectDescription';
import ProjectNavigation from '../components/ProjectNavigation';
import {
  SiMongodb,
  SiGraphql,
  SiReact,
  SiMysql,
  SiHandlebarsdotjs,
  SiExpress
} from 'react-icons/si';
import { useState } from 'react';

const testProject = {
  title: 'Ritual',
  pic: 'ritual.png',
  languages: [
    <SiMongodb></SiMongodb>,
    <SiGraphql></SiGraphql>,
    <SiReact></SiReact>,
    'Chakra UI'
  ],
  description:
    'Ritual is a goal setting application centered on wellness, where we can add new goals, track daily goals, and monitor progress.',
  alt: "Ritual's homepage",
  url: 'https://ritual-app-01.herokuapp.com/',
  gitHub: 'https://github.com/Metelak/Ritual'
};

const testProject2 = {
  title: 'Travel Bug',
  pic: 'travel-bug.png',
  alt: "Travel Bug's homepage",
  languages: [
    <SiMysql></SiMysql>,
    <SiHandlebarsdotjs></SiHandlebarsdotjs>,
    <SiExpress></SiExpress>
  ],
  description:
    'Travel Bug is a webpage that hosts travel locations posted by users that allows individual users to browse for travel information and like locations to save to their personal login page. It also, lets the user create new location posts for other users to see in the homepage and lets them rate 1-5 stars on their trip/experience going to that location.',
  url: 'https://travelbug-project.herokuapp.com/',
  gitHub: 'https://github.com/Metelak/Travel-bug'
};

const projects = [testProject, testProject2];

export default function Portfolio() {
  // sets index for current project
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className="project-container">
      <h1 className="portfolio-page-title">Featured Projects</h1>
      <div
        className="project-card"
        style={{
          backgroundImage: `url(${require(`../img/projects/${projects[currentProject].pic}`)})`
        }}
      >
        <ProjectNavigation
          projectsLength={projects.length}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          url={projects[currentProject].url}
          gitHub={projects[currentProject].gitHub}
        />
        <ProjectDescription
          title={projects[currentProject].title}
          languages={projects[currentProject].languages}
          description={projects[currentProject].description}
        />
      </div>
    </div>
  );
}
