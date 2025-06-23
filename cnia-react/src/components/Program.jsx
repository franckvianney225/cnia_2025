import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaCoffee, FaUtensils, FaMicrophone, FaLaptopCode, FaUsers, FaChalkboardTeacher } from 'react-icons/fa'

export default function Program() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const schedule = [
    { 
      time: "08h30 - 09h00", 
      activity: "Accueil et enregistrement des participants",
      icon: <FaUsers className="text-xl" />,
      type: "registration"
    },
    { 
      time: "09h30 - 10h00", 
      activity: "Allocutions d'ouverture",
      icon: <FaMicrophone className="text-xl" />,
      type: "speech" 
    },
    { 
      time: "10h00 - 10h30", 
      activity: "Présentation de la Stratégie Nationale IA",
      icon: <FaLaptopCode className="text-xl" />,
      type: "presentation"
    },
    { 
      time: "10h30 - 11h00", 
      activity: "Panel ministériel sur l'IA éthique et inclusive",
      icon: <FaChalkboardTeacher className="text-xl" />,
      type: "panel"
    },
    { 
      time: "11h00 - 11h30", 
      activity: "Pause-café et réseautage",
      icon: <FaCoffee className="text-xl" />,
      type: "break"
    },
    { 
      time: "11h30 - 12h00", 
      activity: "Démonstration d'une solution IA",
      icon: <FaLaptopCode className="text-xl" />,
      type: "demo"
    },
    { 
      time: "12h00 - 12h45", 
      activity: "Panel 1 : Développement des compétences en IA",
      icon: <FaChalkboardTeacher className="text-xl" />,
      type: "panel"
    },
    { 
      time: "12h45 - 14h00", 
      activity: "Déjeuner",
      icon: <FaUtensils className="text-xl" />,
      type: "break"
    },
    { 
      time: "14h00 - 14h45", 
      activity: "Panel 2 : Innovation et entrepreneuriat en IA",
      icon: <FaChalkboardTeacher className="text-xl" />,
      type: "panel"
    },
    { 
      time: "14h45 - 15h15", 
      activity: "Démonstration d'une solution IA",
      icon: <FaLaptopCode className="text-xl" />,
      type: "demo"
    },
    { 
      time: "15h15 - 16h00", 
      activity: "Panel 3 : Inclusion numérique",
      icon: <FaChalkboardTeacher className="text-xl" />,
      type: "panel"
    },
    { 
      time: "16h00 - 16h30", 
      activity: "Synthèse et clôture officielle",
      icon: <FaMicrophone className="text-xl" />,
      type: "speech"
    }
  ]

  return (
    <section id="programme" className="relative py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900">
      {/* SVG animé de visage robotique */}
      <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-orange-100/30 via-white/20 to-orange-200/30 overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Robot complet avec corps */}
          {/* Tête */}
          <circle cx="600" cy="250" r="80" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2" />
          
          {/* Yeux */}
          <rect x="560" y="220" width="20" height="30" rx="10" fill="#F59E0B">
            <animate attributeName="height" values="30;25;30" dur="2s" repeatCount="indefinite"/>
          </rect>
          <rect x="620" y="220" width="20" height="30" rx="10" fill="#F59E0B">
            <animate attributeName="height" values="30;25;30" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </rect>
          
          {/* Bouche */}
          <rect x="570" y="280" width="60" height="5" rx="2" fill="#F59E0B">
            <animate attributeName="height" values="5;10;5" dur="3s" repeatCount="indefinite"/>
          </rect>
          
          {/* Corps */}
          <rect x="550" y="330" width="100" height="120" rx="15" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2" />
          
          {/* Boutons */}
          <circle cx="600" cy="370" r="8" fill="#F59E0B">
            <animate attributeName="fill" values="#F59E0B;#F97316;#F59E0B" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="600" cy="400" r="8" fill="#F59E0B">
            <animate attributeName="fill" values="#F59E0B;#F97316;#F59E0B" dur="4s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          {/* Bras */}
          <rect x="470" y="350" width="80" height="20" rx="10" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2">
            <animateTransform attributeName="transform" type="rotate" values="0 550 360; 10 550 360; 0 550 360" dur="5s" repeatCount="indefinite"/>
          </rect>
          <rect x="650" y="350" width="80" height="20" rx="10" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2">
            <animateTransform attributeName="transform" type="rotate" values="0 650 360; -10 650 360; 0 650 360" dur="5s" repeatCount="indefinite" begin="1s"/>
          </rect>
          
          {/* Bulle de dialogue */}
          <path 
            d="M700,150 Q800,100 900,150 Q950,200 900,250 Q800,300 700,250 Q650,200 700,150 Z"
            fill="white" 
            fillOpacity="0.2"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          <text x="800" y="200" textAnchor="middle" fill="#F59E0B" fontFamily="Arial" fontSize="24" fontWeight="bold">
            Hello Human!
            <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
          </text>
          
          <defs>
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
            Programme
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-orange-400 via-white to-orange-500 mx-auto mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-xl text-orange-700 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Programme détaillé de la Conférence Nationale sur l'Intelligence Artificielle du 19 mai 2025
          </p>
        </div>
        
        <div className="relative">
          {/* Ligne de timeline */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-orange-400 to-orange-300 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className={`relative pl-12 md:pl-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transform -translate-x-1/2 -translate-y-1 z-10"></div>
                
                <div className={`p-6 md:w-5/12 rounded-xl ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                } ${
                  item.type === 'break' ? 'bg-white/5' : 'bg-white/10'
                } backdrop-blur-lg border border-white/20 hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${
                      item.type === 'break' ? 'bg-orange-400/20' : 
                      item.type === 'panel' ? 'bg-orange-500/20' : 
                      'bg-orange-300/20'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">{item.time}</p>
                      <p>{item.activity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
