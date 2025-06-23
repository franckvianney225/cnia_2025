import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBullhorn, FaLightbulb, FaHandPointUp, FaBalanceScale, FaComments, FaGlobeAfrica } from 'react-icons/fa'

export default function Objectives() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Variants d'animation pour les cartes
  const CARD_ANIMATION = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const objectives = [
    {
      icon: FaBullhorn,
      title: "Annoncer les Initiatives",
      description: "Annoncer officiellement les initiatives majeures en cours, notamment celles qui bénéficient à la jeunesse ivoirienne."
    },
    {
      icon: FaLightbulb,
      title: "Informer la Jeunesse",
      description: "Informer les jeunes sur les opportunités qu'offrent la stratégie nationale de l'IA et les plans d'action y afférents."
    },
    {
      icon: FaHandPointUp,
      title: "Susciter l'Engagement",
      description: "Susciter l'engagement de la jeunesse ivoirienne dans la dynamique nationale d'innovation numérique."
    },
    {
      icon: FaBalanceScale,
      title: "Promouvoir l'Éthique",
      description: "Promouvoir une IA éthique, inclusive et responsable pour un développement durable."
    },
    {
      icon: FaComments,
      title: "Créer un Cadre d'Échange",
      description: "Offrir un cadre d'échange et de collaboration entre les acteurs publics, privés, académiques et institutionnels."
    },
    {
      icon: FaGlobeAfrica,
      title: "Renforcer la Coopération",
      description: "Renforcer les coopérations nationales et internationales autour du développement de l'IA."
    }
  ]

  return (
    <section id="objectifs" className="relative py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-900 overflow-hidden">
      {/* SVG animé d'IA en fond */}
      <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-green-100/30 via-white/20 to-green-200/30 overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Cerveau IA */}
          <path 
            d="M600,150 Q700,100 800,150 Q900,200 850,300 Q800,400 700,350 Q600,300 550,400 Q500,500 400,450 Q300,400 350,300 Q400,200 500,250 Q600,300 600,150 Z"
            fill="none"
            stroke="url(#aiGradient)"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{
              animation: 'draw 20s linear infinite',
            }}
          />
          
          {/* Circuits */}
          <path
            d="M200,100 L400,100 M300,50 L300,150 M500,200 L700,200 M600,150 L600,250"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
          
          {/* Points de données animés */}
          <circle cx="500" cy="400" r="3" fill="#10B981">
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="350" r="3" fill="#10B981">
            <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#10B981" />
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
            Objectifs de la Conférence
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-green-400 via-white to-green-500 mx-auto mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            La Conférence Nationale sur l'Intelligence Artificielle vise plusieurs objectifs stratégiques 
            pour positionner la Côte d'Ivoire comme leader en matière d'IA en Afrique.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {objectives.map((obj, index) => {
            const Icon = obj.icon
            return (
              <motion.div 
                key={index}
                className={`p-8 bg-white/90 backdrop-blur-sm border border-green-100 rounded-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 hover:shadow-lg hover:scale-105 ${
                  obj.fullWidth ? 'md:col-span-2' : ''
                } transform-gpu transition-transform transition-shadow transition-colors duration-300`}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={CARD_ANIMATION}
                custom={index}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex-shrink-0 flex items-center justify-center shadow-md">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">{obj.title}</h3>
                    <p className="text-gray-700">{obj.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
