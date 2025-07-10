
import './App.css'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import Skills from './pages/Skills'
function App() {
  

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
