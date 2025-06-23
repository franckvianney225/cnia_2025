import { useInView } from 'react-intersection-observer'
import { FaCheckCircle, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaInfoCircle, FaDownload } from 'react-icons/fa'

export default function Registration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="inscription" className="relative py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900 overflow-hidden">
      {/* SVG animé d'IA en fond */}
      <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-orange-100/30 via-white/20 to-orange-200/30 overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Mains abstraites qui se rejoignent */}
          <path 
            d="M300,300 Q200,250 300,200 Q400,150 500,200 Q600,250 500,300 Q400,350 300,300 Z"
            fill="#F59E0B"
            fillOpacity="0.2"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <path 
            d="M900,300 Q800,250 900,200 Q1000,150 1100,200 Q1200,250 1100,300 Q1000,350 900,300 Z"
            fill="#F59E0B" 
            fillOpacity="0.2"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <path
            d="M500,250 Q700,200 900,250"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeDasharray="10,5"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20" ref={ref}>
          <h2 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            S'inscrire à la Conférence
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-orange-400 via-white to-orange-500 mx-auto mb-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-xl text-orange-700 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Inscrivez-vous pour participer à cet événement majeur sur l'intelligence artificielle en Côte d'Ivoire
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`p-8 bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '300ms' }}>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                nom: e.target.nom.value,
                prenom: e.target.prenom.value,
                email: e.target.email.value,
                telephone: e.target.telephone.value,
                organisation: e.target.organisation.value,
                profil: e.target.profil.value
              };

              try {
                const response = await fetch('http://localhost:5000/api/register/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData)
                });

                if (!response.ok) {
                  const errorData = await response.json();
                  throw new Error(errorData.error || 'Erreur lors de l\'inscription');
                }

                await response.json();
                alert('Inscription réussie !');
                e.target.reset();
              } catch (error) {
                alert(error.message);
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="nom">Nom</label>
                  <input type="text" id="nom" className="w-full p-3 rounded-lg bg-white border border-orange-200 focus:outline-none focus:border-orange-500 text-gray-900" placeholder="Votre nom" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="prenom">Prénom</label>
                  <input type="text" id="prenom" className="w-full p-3 rounded-lg bg-white border border-orange-200 focus:outline-none focus:border-orange-500 text-gray-900" placeholder="Votre prénom" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-3 rounded-lg bg-white border border-orange-200 focus:outline-none focus:border-orange-500 text-gray-900" placeholder="Votre adresse email" />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="telephone">Téléphone</label>
                <input type="tel" id="telephone" className="w-full p-3 rounded-lg bg-white border border-orange-200 focus:outline-none focus:border-orange-500 text-gray-900" placeholder="Votre numéro de téléphone" />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="organisation">Organisation/Institution</label>
                <input type="text" id="organisation" className="w-full p-3 rounded-lg bg-white border border-orange-200 focus:outline-none focus:border-orange-500 text-gray-900" placeholder="Votre organisation" />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="profil">Profil</label>
                <select id="profil" className="w-full p-3 rounded-lg bg-white border border-orange-200 focus:outline-none focus:border-orange-500 text-gray-900">
                  <option>Étudiant</option>
                  <option>Entrepreneur</option>
                  <option>Développeur</option>
                  <option>Chercheur</option>
                  <option>Administration publique</option>
                  <option>Secteur privé</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <button type="submit" className="w-full p-3 rounded-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all">
                S'inscrire
              </button>
            </form>
          </div>
          
          <div className="fade-in">
            <div className={`p-8 bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl mb-8 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Pourquoi Participer?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-3 mt-1" />
                  <p className="text-gray-700">Découvrir les dernières avancées en matière d'IA en Côte d'Ivoire</p>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-3 mt-1" />
                  <p className="text-gray-700">Rencontrer des experts et décideurs du domaine</p>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-3 mt-1" />
                  <p className="text-gray-700">Explorer les opportunités professionnelles dans l'IA</p>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-3 mt-1" />
                  <p className="text-gray-700">Assister à des démonstrations de solutions IA innovantes</p>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-3 mt-1" />
                  <p className="text-gray-700">Contribuer à façonner l'avenir numérique de la Côte d'Ivoire</p>
                </li>
              </ul>
            </div>
            
            <div className={`p-8 bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '500ms' }}>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Informations Pratiques</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCalendarAlt className="text-orange-500 text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Date</h4>
                    <p className="text-gray-700">Lundi 19 mai 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-orange-500 text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Horaires</h4>
                    <p className="text-gray-700">De 9h00 à 16h30</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-500 text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Lieu</h4>
                    <p className="text-gray-700">Espace Latrille Events, Abidjan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaInfoCircle className="text-orange-500 text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Participation</h4>
                    <p className="text-gray-700">Gratuite sur inscription (places limitées)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center py-3 px-6 rounded-full font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all border border-orange-300 w-full">
                  <FaDownload className="mr-2" />
                  <span>Télécharger la Stratégie Nationale IA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
