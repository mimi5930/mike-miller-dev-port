import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import './App.css';
import Socials from './components/Socials';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Socials />
    </Router>
  );
}

export default App;
