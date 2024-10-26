import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import Philippines from './components/Philippines'
import './App.css'
import Working from './components/Working'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Working />
      <Pricing />
      <Philippines />
      <Contact />
    </div>
  )
}

export default App