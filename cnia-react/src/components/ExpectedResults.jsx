import { useInView } from 'react-intersection-observer'
import { 
  FaUsers,
  FaChartLine,
  FaHandsHelping,
  FaProjectDiagram,
  FaGlobeAfrica
} from 'react-icons/fa'

export default function ExpectedResults() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const results = [
    {
      icon: FaUsers,
      title: "Mobilisation des Jeunes",
      description: "Une mobilisation des jeunes et leur adhésion aux plans d'action en leur faveur, créant une génération engagée dans la révolution numérique."
    },
    {
      icon: FaChartLine,
      title: "Engagement Renforcé",
      description: "Un engagement renforcé de l'ensemble des parties prenantes pour accélérer la mise en œuvre de la Stratégie Nationale de l'IA et de la Gouvernance des Données."
    },
    {
      icon: FaHandsHelping,
      title: "Mobilisation des Partenaires", 
      description: "Une mobilisation accrue des partenaires techniques et financiers afin de garantir un soutien durable aux initiatives en intelligence artificielle."
    },
    {
      icon: FaProjectDiagram,
      title: "Cadre de Collaboration",
      description: "Un cadre de collaboration pérenne entre l'administration, le secteur privé et les institutions académiques pour le développement de l'IA."
    },
    {
      icon: FaGlobeAfrica,
      title: "Visibilité Internationale",
      description: "Une visibilité nationale et internationale renforcée pour positionner la Côte d'Ivoire comme un hub de l'intelligence artificielle en Afrique, attirant investissements et talents dans ce domaine stratégique.",
      fullWidth: true
    }
  ]

  return (
    <section id="resultats" className="relative py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-900 overflow-hidden">
      {/* SVG animé d'IA en fond */}
      <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-green-100/30 via-white/20 to-green-200/30 overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Œil artificiel */}
          <circle cx="600" cy="300" r="150" fill="none" stroke="#10B981" strokeWidth="2" />
          <circle cx="600" cy="300" r="100" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5,5" />
          <circle cx="600" cy="300" r="50" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2">
            <animate attributeName="r" values="50;60;50" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="600" cy="300" r="20" fill="#10B981" />
          
          {/* Flux de données */}
          <path 
            d="M600,150 Q650,200 600,250 Q550,200 600,150 Z"
            fill="none"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{ animation: 'draw 10s linear infinite' }}
          />
          <path 
            d="M600,250 Q650,300 600,350 Q550,300 600,250 Z"
            fill="none"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{ animation: 'draw 10s linear infinite reverse' }}
          />
          
          {/* Circuits */}
          <path
            d="M200,100 L400,100 M300,50 L300,150 M500,200 L700,200 M600,150 L600,250"
            stroke="#4F46E5"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
          
          {/* Points de données animés */}
          <circle cx="500" cy="400" r="3" fill="#10B981">
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="350" r="3" fill="#F59E0B">
            <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#065F46" />
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
            Résultats Attendus
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-orange-400 via-white to-green-400 mx-auto mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            À l'issue de la Conférence Nationale sur l'IA, les résultats suivants sont attendus:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div 
                key={index}
                className={`p-8 bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-green-50 hover:shadow-lg hover:scale-105 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${result.fullWidth ? 'md:col-span-2' : ''} transform-gpu transition-transform transition-shadow transition-colors duration-100`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-green-400 flex-shrink-0 flex items-center justify-center shadow-md">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-600">{result.title}</h3>
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
