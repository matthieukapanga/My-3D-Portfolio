import React from 'react'
import Hero from './sections/Hero.jsx'
import Showcase from './sections/Showcase.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Certificates from './sections/Certificates.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
   <>
    <NavBar/>
    <Hero/>
    <Showcase/>
    <FeatureCards/>
    <TechStack/>
    <Certificates/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
   </>
  )
}

export default App