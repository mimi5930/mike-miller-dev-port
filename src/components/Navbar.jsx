import { useMediaQuery } from '../utils/hooks/useMediaQuery';
import { useScroll } from '../utils/hooks/useScroll';
import './styles/navbar.css';
import NavigationLinks from './NavigationLinks';

export default function Navbar() {
  const smallScreen = useMediaQuery('(max-width: 700px)');
  const scroll = useScroll();

  return (
    <section
      className={`nav-container${scroll ? ' nav-container-scrolled' : ''}`}
    >
      <div className="title-container">
        <h1>Mike Miller</h1>
      </div>
      <NavigationLinks smallScreen={smallScreen}></NavigationLinks>
    </section>
  );
}
