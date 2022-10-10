import './styles/project-description.css';

export default function ProjectDescription() {
  const title = 'Title';
  const languages = 'HTML, JAVASCRIPT';
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga accusamus incidunt ab, cupiditate labore temporibus officiis optio esse quas. Quis doloribus harum tempore excepturi id quae, possimus dicta iusto.';

  return (
    <div className="project-desc-card">
      <h2>{title}</h2>
      <div>
        <h2>Languages:</h2>
        <p>{languages}</p>
      </div>
      <div>
        <h2>Description:</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
