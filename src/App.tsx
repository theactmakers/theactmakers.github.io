import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import style from './style'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Footer from './components/Footer'



function App() {

  return (
    <div className=' text-white'>
      <Navbar />
      <Hero />
      <div className={`bg-[#14120e] ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <About />
          <Projects />
          <Socials />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App