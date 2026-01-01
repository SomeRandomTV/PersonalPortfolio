
import React, { useState, useEffect, useRef } from 'react'
// animations removed: framer-motion usage deleted
import { useLocation, useNavigate } from 'react-router-dom'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const pendingSection = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Detect active section
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to section after navigation to home
  useEffect(() => {
    if (location.pathname === '/' && pendingSection.current) {
      setTimeout(() => {
        const el = document.getElementById(pendingSection.current)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
        pendingSection.current = null
      }, 100) // wait for DOM
    }
  }, [location])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      pendingSection.current = sectionId
      navigate('/')
      setIsMobileMenuOpen(false)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header data-koi-occluder className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'frosted-glass border-b border-border' 
          : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-12 py-8">
        <div className="flex items-center justify-between">
          {/* Luxury Logo */}
          <a
            href="https://www.ziatechnica.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-light tracking-luxury-wide cursor-pointer uppercase"
          >
            <span className="gradient-luxury-text">ZiaTechnica</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-14">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-light tracking-luxury uppercase transition-all duration-400 luxury-underline ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-silver hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-textPrimary hover:text-primary transition-all duration-400"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-4 px-4 transition-all duration-400 uppercase tracking-luxury text-sm font-light ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-silver hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
