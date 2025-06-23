import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Typed from 'typed.js'
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaDownload,
  FaCrown,
  FaUserTie,
  FaUserGraduate,
  FaArrowDown,
  FaChevronDown
} from 'react-icons/fa'

const ScrollIndicator = ({ targetId }) => {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer animate-bounce mt-12 opacity-80 hover:opacity-100 transition-opacity"
      onClick={() => document.getElementById(targetId).scrollIntoView({behavior: 'smooth'})}
    >
      <div className="w-8 h-14 rounded-full border-2 border-white flex items-center justify-center mb-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
      <FaChevronDown className="text-white text-xl" />
      <p className="text-white text-sm font-light mt-1">Découvrir</p>
    </div>
  )
}

const InfoBadge = ({ icon, text, highlight = false }) => {
  return (
    <div className={`flex items-center space-x-2 py-2 px-4 rounded-full ${highlight ? 'bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg shadow-orange-600/30' : 'bg-white/10 backdrop-blur-md'} hover:scale-105 transition-all duration-300`}>
      {icon({className: `${highlight ? 'text-white' : 'text-orange-300'}`})}
      <span className="text-white text-sm md:text-base">{text}</span>
    </div>
  )
}

const ProfileCard = ({ image, title, name, role, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-500 ease-in-out hover:bg-orange-900/40 hover:shadow-xl transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-24 h-24 overflow-hidden rounded-xl shadow-lg shadow-orange-500/30 group">
        <div className="relative w-full h-full transform transition-all duration-300 ease-in-out group-hover:scale-105">
          {image ? (
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        </div>
      </div>
      
      <div className="text-center md:text-left">
        <h3 className="font-medium text-orange-200 text-sm">{title}</h3>
        <h2 className="text-xl md:text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">{name}</h2>
        <p className="text-sm text-white/70">{role}</p>
      </div>
    </div>
  )
}

export default function Hero() {
  const typedRef = useRef(null)
  const [_isScrolled, setIsScrolled] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        'L\'IA au service du développement national',
        'Innovation technologique pour la Côte d\'Ivoire',
        'La jeunesse ivoirienne au cœur de la révolution numérique'
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      startDelay: 1000
    })

    return () => typed.destroy()
  }, [inView])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-orange-900/80 to-green-900/80">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-orange-900/40 to-black/80 z-10"></div>
        <img 
          src="/optimized/hero-bg.jpg" 
          alt="Fond IA" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-orange-500/10 blur-xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="text-center mb-12" ref={ref}>
          <div className={`mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md text-white text-xs tracking-widest mb-4 border border-white/20">
              RÉPUBLIQUE DE CÔTE D'IVOIRE
            </div>
            
            <h1 className={`text-2xl md:text-6xl font-bold leading-tight text-white mb-6 transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                La Conférence Nationale sur l'Intelligence Artificielle
              </span>
            </h1>
          </div>
          
          <div className={`h-24 md:h-16 text-base md:text-2xl text-white mb-8 transition-all duration-1000 delay-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <span ref={typedRef}></span>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-3 mb-12 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <InfoBadge icon={FaCalendarAlt} text="19 mai 2025" highlight={true} />
          <InfoBadge icon={FaMapMarkerAlt} text="Espace Latrille, Abidjan" />
          <InfoBadge icon={FaClock} text="À partir de 9H" />
        </div>

        <div className="flex justify-center mt-8">
          <ScrollIndicator targetId="apropos" />
        </div>        
      </div>
    </section>
  )
}
