
// Components
import Nav from './components/Nav'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'

// Stylos
import './index.css'



function App() {


  return (

    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Nav />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </div>
  )
}

export default App
