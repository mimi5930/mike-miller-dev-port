import './style/portfolio.css'
import ProjectDescription from '../components/ProjectDescription'
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
} from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'
import { FaCircle, FaRegCircle } from 'react-icons/fa'
import { useState } from 'react'
import Spacer from '../components/Spacer'
import ProjectNavigation from '../components/ProjectNavigation'

const projects = [
  {
    title: 'Ritual',
    pic: 'ritual.png',
    languages: [
      { title: 'MongoDB', icon: <SiMongodb /> },
      { title: 'GraphQL', icon: <SiGraphql /> },
      { title: 'React', icon: <SiReact /> },
      { title: 'ChakraUI', icon: <SiChakraui /> }
    ],
    description:
      'Ritual is a goal setting application centered on wellness, where we can add new goals, track daily goals, and monitor progress.',
    alt: "Ritual's homepage",
    url: 'https://ritual-app.herokuapp.com/',
    gitHub: 'https://github.com/mimi5930/Ritual'
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
    url: 'https://travel-bug.herokuapp.com/',
    gitHub: 'https://github.com/mimi5930/Travel-bug'
  },
  {
    title: 'Budget Buddy',
    pic: 'budget-buddy-snapshot.png',
    alt: "Budget Buddy's homepage",
    languages: [
      {
        title: 'Express',
        icon: <SiExpress />
      },
      { title: 'ChartJS, IndexedDB, Service Worker', icon: null }
    ],
    description:
      "Budget Buddy is an app where a user can keep track of their expenses regardless of their internet connection! Just enter any transaction, and the provided information will be stored locally or in a MongoDB database based on the user's internet connection. The graph will adjust based on this input.",
    url: 'https://budget-buddy-01.herokuapp.com/',
    gitHub: 'https://github.com/mimi5930/Budget-Buddy'
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
    url: 'https://code-crazy.herokuapp.com/',
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
      "Brenda Jacobson's website to provide parents with resources for children.",
    url: 'https://kidsvisits.com',
    gitHub: 'https://github.com/mimi5930/kids-visits'
  }
]

export default function Portfolio() {
  // sets index for current project
  const [currentProject, setCurrentProject] = useState(0)
  const [animation, setAnimation] = useState('')

  const indexCircleClickHandler = index => {
    if (currentProject > index) {
      setAnimation('prev-project')
      setCurrentProject(index)
    } else if (currentProject < index) {
      setAnimation('next-project')
      setCurrentProject(index)
    }
  }

  return (
    <>
      <div className="project-container" id="projects">
        <h1 className="portfolio-page-title">Featured Projects</h1>
        <div className="index-circle-container">
          {projects.map((project, index) => {
            if (index < currentProject + 1) {
              return (
                <FaCircle
                  className="index-circle solid-circle"
                  key={project.title}
                  onClick={() => {
                    indexCircleClickHandler(index)
                  }}
                ></FaCircle>
              )
            }
            return (
              <FaRegCircle
                className="index-circle open-circle"
                key={project.title}
                onClick={() => {
                  indexCircleClickHandler(index)
                }}
              ></FaRegCircle>
            )
          })}
        </div>
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
  )
}
