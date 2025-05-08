import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a className='logo' href='#hero'>
          Matthieu Kapanga
        </a>
        
        {/* Desktop Navigation */}
        <nav className='desktop'>
          <ul>
            {navLinks.map(({link, name}) => (
              <li key={name} className='group'>
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline'/>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Hamburger Button */}
        <button 
          className='hamburger-btn md:hidden flex flex-col justify-center items-center gap-1.5 z-50'
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Mobile Menu */}
        <div 
          className={`mobile-menu fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        >
          <div className='flex flex-col items-center justify-center h-full'>
            <nav className='mobile-nav'>
              <ul className='flex flex-col items-center gap-8'>
                {navLinks.map(({link, name}) => (
                  <li key={name} className='text-white-50 text-2xl font-medium'>
                    <a 
                      href={link} 
                      onClick={closeMobileMenu}
                      className='hover:text-blue-400 transition-colors duration-300'
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li className='mt-6'>
                  <a 
                    href='#contact' 
                    onClick={closeMobileMenu}
                    className='hover:text-blue-400 transition-colors duration-300 text-white-50 text-2xl font-medium'
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Contact Button (Desktop) */}
        <a href='#contact' className='contact-btn group md:flex hidden'>
          <div className='inner'>
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default NavBar