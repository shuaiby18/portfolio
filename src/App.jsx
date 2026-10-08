import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ResearchProjects from './components/ResearchProjects'
import Services from './components/Services'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'


function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <ResearchProjects />
      <Services />
      <Process />
      <Contact />
    </main>
  )
}

export default App