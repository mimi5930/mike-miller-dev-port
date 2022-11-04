import './App.css';
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  // const [isAboutVisible, setIsAboutVisible] = useState(false);
  // const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  // const [isContactVisible, setIsContactVisible] = useState(false);

  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const heights = null;

  useEffect(() => {}, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.target.id === 'about') {
  //         setIsAboutVisible(entry.isIntersecting);
  //       }
  //       if (entry.target.id === 'projects') {
  //         setIsPortfolioVisible(entry.isIntersecting);
  //       }
  //       if (entry.target.id === 'contact') {
  //         setIsContactVisible(entry.isIntersecting);
  //       }
  //     });
  //   });

  //   observer.observe(aboutRef.current);
  //   observer.observe(portfolioRef.current);
  //   observer.observe(contactRef.current);

  //   return () => observer.disconnect();
  // }, []);

  // TODO: maybe have intersection observer only run once per element?

  return (
    <div className="app">
      <Navbar></Navbar>
      <About aboutRef={aboutRef}></About>
      <Portfolio portfolioRef={portfolioRef}></Portfolio>
      <Contact contactRef={contactRef}></Contact>
    </div>
  );
}

export default App;
