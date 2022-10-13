import './styles/project-description.css';

export default function ProjectDescription({ title, languages, description }) {
  return (
    <div className="project-info-card">
      <div className="project-title-container">
        <h2>{title}</h2>
        <div className="language-container">
          <h2>Languages:</h2>
          <p>{languages}</p>
        </div>
      </div>
      <div>
        <h2>Description:</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

// TODO: Add function that replaces language text with icons
