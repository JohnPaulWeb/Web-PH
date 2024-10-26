import React, { useEffect, useState } from 'react'
import { BsFillMenuButtonFill } from "react-icons/bs";
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home')
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  const handleScroll = () => {
    const sections = ['home', 'services', 'about', 'pricing', 'philippines'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
       if(element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if(scrollPosition => offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section)
        }
       }
    })
  }

  useEffect(() => {
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior:'smooth'
      })
    }
  }

  const navLinks = (
    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
      <li>
        <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('home')
        }} href="#home"  className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}>Bahay</motion.a>
      </li>
      <li>
        <motion.a href="#services" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('services')
        }} className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}>Kasunuran</motion.a>
      </li>
      <li>
        <a href="#about" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('about')
        }} className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}>Kababayan</a>
      </li>
      <li>
        <motion.a href="#pricing" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('pricing')
        }} className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}>Kabayaran</motion.a>
      </li>
      <li>
        <motion.a href="#philippines" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('philippines')
        }} className={`text-white ${activeSection === 'philippines' ? 'isActive' : ''}`}>Pilipinas</motion.a>
      </li>
    </ul>
  )
  
  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            {/* ito ay logo */}
            <div className='text-white text-lg font-semibold'>
                <a href="/">
                 <img src="/phil.png" className='w-5' alt="logo" />Philippines
                </a>
            </div>

            {/*Navigation ito */}
            <div className='hidden md:flex flex-grow justify-center'>
              <nav>
                {navLinks}
              </nav>
            </div>

            {/* ito yung button pre */}
            <div className='hidden md:block'>
              <a onClick={e => {
                e.preventDefault();
                handleScrollTo('about');
              }} href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
                Philippines
              </a>
            </div>

            {/* menu ito pre */}
            <div className='block md:hidden'>
              <button onClick={handleToggle} className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
              <BsFillMenuButtonFill className='size-6'/>
              </button>
            </div>
        </div>

        {/* android nav ito pre */}
        {
          isOpen && (
            <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
              <ul className='flex flex-col p-4 space-y-3'>
                {navLinks.props.children}
                <li className='py-2'>
                <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded' onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                  handleScrollTo('contact');
                }}>Pilipinas</a>
              </li>
              </ul>
              
            </nav>
          )
        }
    </header>
  )
}

export default Navbar