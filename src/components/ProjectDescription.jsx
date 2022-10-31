import Spacer from './Spacer';
import './styles/project-description.css';

export default function ProjectDescription({ title, languages, description }) {
  return (
    <div className="project-info-card">
      <div className="project-title-container">
        <h2 className="project-title">{title}</h2>
        <div className="language-container">
          <h2 className="tech-title">Tech:</h2>
          <div className="language-list">
            {languages.map(language => {
              if (language.icon !== null) {
                return (
                  <div className="language-icon-container" key={language.title}>
                    <div className="tooltip">{language.title}</div>
                    <p className="languages">{language.icon}</p>
                  </div>
                );
              } else {
                return <p className="language-text">{language.title}</p>;
              }
            })}
          </div>
        </div>
      </div>
      <Spacer />
      <div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
