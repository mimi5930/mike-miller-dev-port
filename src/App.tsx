import './App.css'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Spacer from './components/Spacer'

function App() {
  return (
    <div className="app" data-theme="dark">
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Spacer></Spacer>
      <Contact></Contact>
    </div>
  )
}

export default App
