import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import './App.css';
import Socials from './components/Socials';
import Header from './components/Header';
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
        </Routes>
        <Socials />
      </Box>
    </Router>
  );
}

export default App;
