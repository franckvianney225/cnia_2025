import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#apropos' },
    { name: 'Objectifs', href: '#objectifs' },
    { name: 'Programme', href: '#programme' },
    { name: 'Sponsors', href: '#sponsors' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-primary/90 backdrop-blur-xl z-50 px-6 py-2">
      <div className="container mx-auto flex items-center">
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
            <img 
              src="https://www.telecom.gouv.ci/new/uploads/backgrounds/173684917039.jpg" 
              alt="Logo Ministère" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Menu centré */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="nav-link text-white hover:text-blue-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Bouton S'inscrire à droite */}
        <div className="hidden md:block ml-auto">
          <a 
            href="#inscription" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg hover:shadow-blue-500/30"
          >
            S'inscrire
          </a>
        </div>

        {/* Menu Mobile Toggle */}
        <div className="md:hidden ml-4">
          <button 
            className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-primaryStart/95 to-primaryEnd/95 backdrop-blur-lg mt-4 py-4 px-6 rounded-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="nav-link text-white hover:text-accent transition-colors duration-300 py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
