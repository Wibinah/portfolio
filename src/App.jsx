import React from 'react'

import './App.css';
import Section from './components/section/section'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/portfolio2'
import Testimonial from './components/testimonial/testimonial2'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
  <>
    <Section/>
    <Navbar/>
     <About/>
    <Services/> 
    <Portfolio />
    <Experience/>
    <Testimonial/>  
    <Contact/>
    <Footer/>

 </>
);
}

export default App;

