import './styles/project-description.css';

export default function ProjectDescription({ title, languages, description }) {
  return (
    <div className="project-info-card">
      <div className="project-title-container">
        <h2>{title}</h2>
      </div>
      <div className="language-container">
        <h2>Languages:</h2>
        {languages.map(language => {
          if (language.icon !== null) {
            return (
              <div className="language-icon-container" key={language.title}>
                <div className="tooltip">{language.title}</div>
                <p className="languages">{language.icon}</p>
              </div>
            );
          } else {
            return language.title;
          }
        })}
      </div>
      <div>
        <h2>Description:</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

// TODO: Fix language line height
// TODO: Resize and reorder text
// TODO: Add tooltip
