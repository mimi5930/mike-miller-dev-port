import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Socials from './components/Socials';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Box
        position="absolute"
        bgImage={require('./img/home-background.jpg')}
        bgSize="cover"
        height="100vh"
        width="100vw"
        bgColor="black"
      >
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        <Socials />
      </Box>
    </Router>
  );
}

export default App;
