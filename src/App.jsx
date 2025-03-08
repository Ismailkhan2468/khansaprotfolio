
import Header from './components/header/Header'
import AboutMe from './components/aboutme/AboutMe'
import './index.css'
import Projects from './components/projects/project'
import Education from './components/education/Education'
import AboutDev from './components/aboutdev/About'

const App = () => {
  return (
      <div>
          <Header />
    <div className="website-layout">
     
      <AboutMe />
       <AboutDev />
      <Projects />
      <Education />
    </div>
    </div>
  )
}

export default App
