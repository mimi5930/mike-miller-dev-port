import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import './App.css';
import Socials from './components/Socials';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Box
        bgImage={require('./img/home-background.jpg')}
        bgSize="cover"
        height="100vh"
        bgColor="black"
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Socials />
      </Box>
    </Router>
  );
}

export default App;
