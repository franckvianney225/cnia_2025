import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Composant Counter amélioré avec animation fluide
const Counter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const startAnimation = (timestamp) => {
      startTime = timestamp;
      updateCount(timestamp);
    };

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(startAnimation);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="counter-container">
      <span className="counter-value">{count}{suffix}</span>
    </div>
  );
};

// Icônes personnalisées pour le design
const IconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-600">
    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
    <path fillRule="evenodd" d="M8.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h6.75c1.035 0 1.875-.84 1.875-1.875V3.375c0-1.036-.84-1.875-1.875-1.875h-6.75zM12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-600">
    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
  </svg>
);

const IconAI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-600">
    <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
  </svg>
);

export default function About() {
  const stats = [
    { value: 91, title: "Taux de pénétration internet mobile", suffix: "%", icon: <IconMobile /> },
    { value: 53.6, title: "Abonnés téléphonie mobile", suffix: "M", icon: <IconUsers /> },
    { value: 2025, title: "Année charnière pour l'IA en Côte d'Ivoire", icon: <IconAI /> }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pointsCles = [
    "Transformation numérique accélérée",
    "Modernisation des services publics",
    "Compétitivité économique renforcée",
    "Gouvernance optimisée"
  ];

  return (
    <section id="apropos" className="relative py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-green-50 text-gray-900 overflow-hidden">

      {/* SVG animé d'IA en fond */}
      <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-orange-100/30 via-white/20 to-green-100/30 overflow-hidden">
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
              <stop offset="0%" stopColor="#F59E0B" />
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
            Contexte et Justification
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-xl text-orange-700 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            L'intelligence artificielle au cœur du développement numérique de la Côte d'Ivoire
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Première colonne: Carte avec texte */}
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="rounded-2xl bg-white p-6 h-full border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-800">Vision Stratégique</h3>
              </div>
              
              <p className="mb-6 leading-relaxed text-gray-700">
                L'intelligence artificielle (IA) est aujourd'hui un moteur de transformation numérique 
                et de modernisation des services publics et privés. Elle offre des opportunités 
                considérables pour l'amélioration de la compétitivité des entreprises, l'optimisation 
                de la gouvernance publique et le développement économique durable.
              </p>
              
              <div className="pl-4 border-l-4 border-orange-400 mb-6">
                <p className="italic text-orange-600">
                  "SEM Alassane Ouattara, Président de la République de Côte d'Ivoire, a souligné 
                  l'importance stratégique de l'intelligence artificielle lors du premier Sommet 
                  Afrique-Corée, mettant en avant son rôle clé dans le développement futur du continent."
                </p>
              </div>
              
              <p className="leading-relaxed text-gray-700">
                Conscient des défis et des opportunités qu'elle représente, le gouvernement ivoirien, 
                à travers le Ministère de la Transition Numérique et de la Digitalisation, a lancé 
                en 2024 l'élaboration de la Stratégie Nationale de Gouvernance des Données et la 
                Stratégie Nationale de l'Intelligence Artificielle.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {pointsCles.map((point, index) => (
                  <div key={index} className="flex items-center bg-orange-50 p-3 rounded-lg border border-orange-100">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-600">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-orange-800">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Deuxième colonne: Statistiques */}
          <div className={`transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="grid grid-cols-2 gap-6 h-full">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl bg-white/10 backdrop-blur-lg border border-orange-200 p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 hover:shadow-md ${index === stats.length - 1 ? 'col-span-2' : ''}`}
                >
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-xl border-4 border-orange-100">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="counter-value text-5xl font-extrabold text-orange-900 mb-2">
                    <Counter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      duration={2.5}
                    />
                  </div>
                  
                  <span className="counter-title text-lg font-semibold text-orange-900 max-w-[200px] bg-white/80 px-3 py-1 rounded-full">
                    {stat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
