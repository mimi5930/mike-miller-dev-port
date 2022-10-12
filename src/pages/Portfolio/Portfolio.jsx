import './portfolio.css';
import ProjectDescription from '../../components/ProjectDescription';
import ProjectImage from '../../components/ProjectImage';

export default function Portfolio() {
  return (
    <div className="project-container">
      <ProjectDescription></ProjectDescription>
      <ProjectImage></ProjectImage>
    </div>
  );
}
