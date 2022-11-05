import './App.css';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
