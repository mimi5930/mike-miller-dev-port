import './style/portfolio.css';
import ProjectDescription from '../components/ProjectDescription';
import {
  SiMongodb,
  SiGraphql,
  SiReact,
  SiMysql,
  SiHandlebarsdotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiChakraui
} from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di';
import { useState } from 'react';
import Spacer from '../components/Spacer';
import ProjectNavigation from '../components/ProjectNavigation';

const projects = [
  {
    title: 'Ritual',
    pic: 'ritual.png',
    languages: [
      { title: 'MongoDB', icon: <SiMongodb /> },
      { title: 'GraphQl', icon: <SiGraphql /> },
      { title: 'React', icon: <SiReact /> },
      { title: 'ChakraUI', icon: <SiChakraui /> }
    ],
    description:
      'Ritual is a goal setting application centered on wellness, where we can add new goals, track daily goals, and monitor progress.',
    alt: "Ritual's homepage",
    url: 'https://ritual-app-01.herokuapp.com/',
    gitHub: 'https://github.com/Metelak/Ritual'
  },
  {
    title: 'Travel Bug',
    pic: 'travel-bug.png',
    alt: "Travel Bug's homepage",
    languages: [
      { title: 'MySQL', icon: <SiMysql /> },
      { title: 'Handlebars', icon: <SiHandlebarsdotjs /> },
      { title: 'Express', icon: <SiExpress /> }
    ],
    description:
      'Travel Bug is a webpage that hosts travel locations posted by users that allows individual users to browse for travel information and like locations to save to their personal login page. It also, lets the user create new location posts for other users to see in the homepage and lets them rate 1-5 stars on their trip/experience going to that location.',
    url: 'https://travelbug-project.herokuapp.com/',
    gitHub: 'https://github.com/Metelak/Travel-bug'
  },
  {
    title: 'My Shopping List',
    pic: 'my-shopping-list.png',
    alt: "My Shopping List's homepage",
    languages: [
      {
        title: 'Materialize CSS',
        icon: <DiMaterializecss />
      },
      { title: 'Best Buy API, Bing Maps API', icon: null }
    ],
    description:
      'My Shopping List helps enhance a users shopping experience by allowing them to find the cost of the items they need at the Best Buy nearest to their location.',
    url: 'https://mimi5930.github.io/my-shopping-list/',
    gitHub: 'https://github.com/mimi5930/my-shopping-list'
  },
  {
    title: 'Code Crazy',
    pic: 'code-crazy.png',
    alt: "Code Crazy's homepage",
    languages: [
      { title: 'MySQL', icon: <SiMysql /> },
      { title: 'Handlebars', icon: <SiHandlebarsdotjs /> },
      { title: 'Express', icon: <SiExpress /> }
    ],
    description:
      "Code Crazy was designed for coding nerds around the world! In here, coders can add posts about their favorite... or least favorite aspects of coding. Create an account, log in, and start posting and commenting to your heart's content!",
    url: 'https://fathomless-dusk-37377.herokuapp.com/',
    gitHub: 'https://github.com/mimi5930/code-crazy'
  },
  {
    title: 'Mike Miller Violin',
    pic: 'mike-violin.png',
    alt: "Mike Miller Violin's homepage",
    languages: [
      { title: 'HTML', icon: <SiHtml5 /> },
      { title: 'CSS', icon: <SiCss3 /> },
      { title: 'Javascript', icon: <SiJavascript /> }
    ],
    description:
      'A website to showcase Mike Miller as a performer and educator. Provides links to listen and engage with Mr. Miller.',
    url: 'https://www.mikemillerviolin.com/',
    gitHub: 'https://github.com/mimi5930/mike-miller-violin'
  },
  {
    title: 'Kids Visits',
    pic: 'kids-visits.png',
    alt: "Kids Visit's homepage",
    languages: [
      { title: 'HTML', icon: <SiHtml5 /> },
      { title: 'CSS', icon: <SiCss3 /> },
      { title: 'Javascript', icon: <SiJavascript /> }
    ],
    description:
      "Brenda Jacobson's website to provide parents with recourses for children.",
    url: 'https://kidsvisits.com',
    gitHub: 'https://github.com/mimi5930/kids-visits'
  }
];

// TODO: Make mobile friendly

export default function Portfolio() {
  // sets index for current project
  const [currentProject, setCurrentProject] = useState(0);
  const [animation, setAnimation] = useState('');

  return (
    <>
      <div className="project-container" id="projects">
        <h1 className="portfolio-page-title">Featured Projects</h1>
        <div className={`project-card ${animation}`} key={Math.random()}>
          <img
            className="project-image"
            src={require(`../img/projects/${projects[currentProject].pic}`)}
            alt={projects[currentProject].alt}
          />
          <ProjectDescription
            title={projects[currentProject].title}
            languages={projects[currentProject].languages}
            description={projects[currentProject].description}
            projectsLength={projects.length}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            url={projects[currentProject].url}
            gitHub={projects[currentProject].gitHub}
            setAnimation={setAnimation}
            navigation={
              <ProjectNavigation
                projectsLength={projects.length}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                url={projects[currentProject].url}
                gitHub={projects[currentProject].gitHub}
                setAnimation={setAnimation}
              ></ProjectNavigation>
            }
          />
        </div>
      </div>
      <Spacer />
    </>
  );
}
