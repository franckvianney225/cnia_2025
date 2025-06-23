import { useInView } from 'react-intersection-observer'
import { FaBuilding, FaUniversity, FaGlobeAfrica, FaNetworkWired, FaMobileAlt, FaPhone, FaLaptopCode, FaMicrochip, FaDesktop, FaProjectDiagram } from 'react-icons/fa'

export default function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const platinumSponsors = [
    { icon: FaBuilding, name: "Ministère des Finances" },
    { icon: FaUniversity, name: "Banque Mondiale" },
    { icon: FaGlobeAfrica, name: "Banque Africaine de Développement" },
    { icon: FaNetworkWired, name: "Smart Africa" }
  ]

  const goldSponsors = [
    { icon: FaMobileAlt, name: "Orange CI" },
    { icon: FaPhone, name: "MTN CI" },
    { icon: FaLaptopCode, name: "Meta" },
    { icon: FaMicrochip, name: "Microsoft" },
    { icon: FaDesktop, name: "Smart Technology" },
    { icon: FaProjectDiagram, name: "Tony Blair Institute" }
  ]

  return (
    <section id="sponsors" className="relative py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-900 overflow-hidden">
      {/* SVG animé d'IA en fond */}
      <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-green-100/30 via-white/20 to-green-200/30 overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Puce AI avec rayonnement */}
          <rect x="550" y="200" width="100" height="100" rx="15" 
            fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          
          {/* Texte AI gravé */}
          <text x="600" y="250" textAnchor="middle" fill="#10B981" fontFamily="Arial" fontSize="24" fontWeight="bold">
            AI
          </text>
          
          {/* Circuits internes */}
          <path
            d="M570,270 L630,270 M570,290 L630,290 M600,270 L600,290"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          
          {/* Rayonnement */}
          <g>
            <line x1="600" y1="150" x2="600" y2="200" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="10;0" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="300" x2="600" y2="350" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="10;0" dur="3s" repeatCount="indefinite" begin="0.5s"/>
            </line>
            <line x1="500" y1="250" x2="550" y2="250" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="10;0" dur="3s" repeatCount="indefinite" begin="1s"/>
            </line>
            <line x1="650" y1="250" x2="700" y2="250" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="10;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
            </line>
            
            {/* Rayons diagonaux */}
            <line x1="550" y1="200" x2="500" y2="150" stroke="#10B981" strokeWidth="1" strokeOpacity="0.7">
              <animate attributeName="stroke-opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
            </line>
            <line x1="650" y1="200" x2="700" y2="150" stroke="#10B981" strokeWidth="1" strokeOpacity="0.7">
              <animate attributeName="stroke-opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" begin="1s"/>
            </line>
            <line x1="550" y1="300" x2="500" y2="350" stroke="#10B981" strokeWidth="1" strokeOpacity="0.7">
              <animate attributeName="stroke-opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" begin="2s"/>
            </line>
            <line x1="650" y1="300" x2="700" y2="350" stroke="#10B981" strokeWidth="1" strokeOpacity="0.7">
              <animate attributeName="stroke-opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" begin="3s"/>
            </line>
          </g>
          
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#065F46" />
            </linearGradient>
            
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
            
            <style>
              {`@keyframes draw {
                to {
                  stroke-dashoffset: 0;
                }
              }`}
            </style>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20" ref={ref}>
          <h2 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Nos Sponsors et Partenaires
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-orange-400 via-white to-green-400 mx-auto mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Merci à nos sponsors et partenaires qui rendent possible cette conférence nationale sur l'intelligence artificielle.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className={`text-2xl font-semibold mb-8 text-center transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Sponsors Platine
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platinumSponsors.map((sponsor, index) => {
              const Icon = sponsor.icon
              return (
                <div 
                  key={index}
                  className={`p-8 bg-white/90 backdrop-blur-lg border border-green-200 rounded-2xl transition-all duration-700 hover:bg-white hover:shadow-xl hover:scale-105 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="text-center">
                    <div className="h-20 flex items-center justify-center mb-4">
                      <Icon className="text-5xl text-green-600" />
                    </div>
                    <p className="font-medium text-green-800">{sponsor.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        <div>
          <h3 className={`text-2xl font-semibold mb-8 text-center transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Sponsors Or
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {goldSponsors.map((sponsor, index) => {
              const Icon = sponsor.icon
              return (
                <div 
                  key={index}
                  className={`p-6 bg-white/90 backdrop-blur-lg border border-green-200 rounded-2xl transition-all duration-700 hover:bg-white hover:shadow-xl hover:scale-105 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="text-center">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <Icon className="text-3xl text-green-600" />
                    </div>
                    <p className="font-medium text-sm text-green-800">{sponsor.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
