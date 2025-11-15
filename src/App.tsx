import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
