// import Card from './Card'
import About from './components/about/about'
import Footer from './components/footer/Footer'
import Education from './components/education/Education'
import Header from './components/header/header'
import Service from './components/services/service'
import Experience from './components/Experience/Experiences'
import Contact from './components/contact/contact'
import Projects from './components/Projects/proejcts'
function App(){
    return(
        <>
          <Header/>
          <About/>
          <Service/>
          <Education/>
          <Experience/>
          <Projects/>
          <Contact/>
          {/* <Footer/> */}


        </>
    )
}
export default App