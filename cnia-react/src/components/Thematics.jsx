import { useInView } from 'react-intersection-observer'
import { 
  FaBuilding, 
  FaGraduationCap, 
  FaRocket, 
  FaBalanceScale,
  FaUsers,
  FaHandshake
} from 'react-icons/fa'

export default function Thematics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const thematics = [
    {
      icon: FaBuilding,
      title: "IA et Administration Publique",
      description: "Moderniser l'action publique pour mieux servir les citoyens grâce aux technologies d'intelligence artificielle.",
      color: "from-orange-500 to-orange-600",
      shadow: "shadow-orange-500/20"
    },
    {
      icon: FaGraduationCap,
      title: "Développement des Compétences", 
      description: "Quels sont les efforts en cours pour former les talents d'aujourd'hui et de demain en intelligence artificielle?",
      color: "from-green-500 to-green-600",
      shadow: "shadow-green-500/20"
    },
    {
      icon: FaRocket,
      title: "Innovation et Entrepreneuriat",
      description: "Stimuler les startups IA portées par la jeunesse ivoirienne pour créer des solutions innovantes.",
      color: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/20"
    },
    {
      icon: FaBalanceScale,
      title: "Éthique et Cadre Réglementaire",
      description: "Garantir un développement sûr et respectueux des droits dans l'utilisation de l'intelligence artificielle.",
      color: "from-purple-500 to-purple-600",
      shadow: "shadow-purple-500/20"
    },
    {
      icon: FaUsers,
      title: "Inclusion Numérique",
      description: "Permettre à tous les jeunes d'accéder aux opportunités de l'IA, quel que soit leur milieu social ou géographique.",
      color: "from-yellow-500 to-yellow-600",
      shadow: "shadow-yellow-500/20"
    },
    {
      icon: FaHandshake,
      title: "Partenariats Stratégiques",
      description: "S'ouvrir à l'international pour accélérer l'adoption de l'IA et créer des synergies durables.",
      color: "from-red-500 to-red-600",
      shadow: "shadow-red-500/20"
    }
  ]

  return (
    <section id="thematiques" className="relative py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900 overflow-hidden">
      {/* SVG animé d'assistant IA en fond */}
      <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-orange-100/30 via-white/20 to-orange-200/30 overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Bulle de dialogue avec onde sonore */}
          <path 
            d="M600,200 Q700,150 800,200 Q900,250 850,350 Q800,450 700,400 Q600,350 550,450 Q500,550 400,500 Q300,450 350,350 Q400,250 500,300 Q600,350 600,200 Z"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <path
            d="M650,300 Q670,290 690,300 Q710,310 690,320 Q670,330 650,320 Q630,310 650,300 Z"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
            style={{ animation: 'pulse 2s infinite' }}
          />
          <path
            d="M650,300 Q680,280 710,300 Q740,320 710,340 Q680,360 650,340 Q620,320 650,300 Z"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1"
            style={{ animation: 'pulse 2.5s infinite' }}
          />
          
          {/* Tête de robot */}
          <circle cx="400" cy="300" r="80" fill="none" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="370" cy="280" r="10" fill="#F59E0B" />
          <circle cx="430" cy="280" r="10" fill="#F59E0B" />
          <path 
            d="M370,330 Q400,350 430,330"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{ animation: 'draw 5s linear infinite' }}
          />
          
          <defs>
            <style>
              {`
                @keyframes pulse {
                  0% { opacity: 0.5; }
                  50% { opacity: 1; }
                  100% { opacity: 0.5; }
                }
                @keyframes draw {
                  to {
                    stroke-dashoffset: 0;
                  }
                }
              `}
            </style>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20" ref={ref}>
          <h2 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Axes Stratégiques et Thématiques
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-orange-400 via-white to-orange-500 mx-auto mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-xl text-orange-700 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            La conférence s'articulera autour de plusieurs thématiques clés pour favoriser l'adoption de l'IA en Côte d'Ivoire.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {thematics.map((theme, index) => {
            const Icon = theme.icon
            return (
              <div 
                key={index}
                className={`p-8 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-2xl transition-all duration-700 hover:bg-orange-50 hover:shadow-lg hover:scale-105 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${theme.color} flex items-center justify-center mb-6 mx-auto shadow-lg ${theme.shadow}`}>
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{theme.title}</h3>
                <p className="text-center text-gray-700">{theme.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
