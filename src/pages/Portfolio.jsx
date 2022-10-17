import './style/portfolio.css';
import ProjectDescription from '../components/ProjectDescription';
import ProjectNavigation from '../components/ProjectNavigation';
import {
  SiMongodb,
  SiGraphql,
  SiReact,
  SiMysql,
  SiHandlebarsdotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript
} from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di';
import { useState } from 'react';

const projects = [
  {
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
  },
  {
    title: 'Travel Bug',
    pic: 'travel-bug.png',
    alt: "Travel Bug's homepage",
    languages: [<SiMysql />, <SiHandlebarsdotjs />, <SiExpress />],
    description:
      'Travel Bug is a webpage that hosts travel locations posted by users that allows individual users to browse for travel information and like locations to save to their personal login page. It also, lets the user create new location posts for other users to see in the homepage and lets them rate 1-5 stars on their trip/experience going to that location.',
    url: 'https://travelbug-project.herokuapp.com/',
    gitHub: 'https://github.com/Metelak/Travel-bug'
  },
  {
    title: 'My Shopping List',
    pic: 'my-shopping-list.png',
    alt: "My Shopping List's homepage",
    languages: [<DiMaterializecss />, 'Best Buy API, Bing Maps API'],
    description:
      'My Shopping List helps enhance a users shopping experience by allowing them to find the cost of the items they need at the Best Buy nearest to their location',
    url: 'https://mimi5930.github.io/my-shopping-list/',
    gitHub: 'https://github.com/mimi5930/my-shopping-list'
  },
  {
    title: 'Code Crazy',
    pic: 'code-crazy.png',
    alt: "Code Crazy's homepage",
    languages: [<SiMysql />, <SiHandlebarsdotjs />, <SiExpress />],
    description:
      "Code Crazy was designed for coding nerds around the world! In here, coders can add posts about their favorite... or least favorite aspects of coding. Create an account, log in, and start posting and commenting to your heart's content!",
    url: 'https://fathomless-dusk-37377.herokuapp.com/',
    gitHub: 'https://github.com/mimi5930/code-crazy'
  },
  {
    title: 'Mike Miller Violin',
    pic: 'mike-violin.png',
    alt: "Mike Miller Violin's homepage",
    languages: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    description:
      'A website to showcase Mike Miller as a performer and educator. Provides links to listen and engage with Mr. Miller',
    url: 'https://www.mikemillerviolin.com/',
    gitHub: 'https://github.com/mimi5930/mike-miller-violin'
  },
  {
    title: 'Kids Visits',
    pic: 'kids-visits.png',
    alt: "Kids Visit's homepage",
    languages: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    description:
      "Brenda Jacobson's website to provide her students and parents with recourses for children.",
    url: 'https://mimi5930.github.io/kids-visits/',
    gitHub: 'https://github.com/mimi5930/kids-visits'
  }
];

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
