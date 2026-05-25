import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection' 
import Education from './components/Education'
// import Certificate from './components/Certificate' 
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      offset: 100, // Offset (in px) from the original trigger point
    });
  }, []);
  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header />
      <HeroSection/>
      <AboutSection/>
      <Education/>
      {/* <Certificate/> */}
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
