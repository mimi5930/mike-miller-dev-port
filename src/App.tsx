import './App.css'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Spacer from './components/Spacer'
import { useState } from 'react'

function App() {
  const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  return (
    <div className="app" data-theme={prefersDarkMode ? 'dark' : null}>
      <Navbar
        prefersDarkMode={prefersDarkMode}
        setPrefersDarkMode={setPrefersDarkMode}
      ></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Spacer></Spacer>
      <Contact></Contact>
    </div>
  )
}

export default App
