import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <div className="w-24 h-1 bg-accent-color mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto opacity-80">
            Pour toute information complémentaire concernant la conférence, n'hésitez pas à nous contacter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in">
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-accent-color" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p>Ministère de la Transition Numérique et de la Digitalisation</p>
                    <p>17 BP 1404 Abidjan 17</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center mr-4">
                    <FaPhoneAlt className="text-accent-color" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p>+225 2720347372</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-accent-color" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p>ministere@telecom.gouv.ci</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center mr-4">
                    <FaGlobe className="text-accent-color" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Site Web</h4>
                    <p>www.telecom.gouv.ci</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center hover:bg-accent-color transition duration-300">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center hover:bg-accent-color transition duration-300">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center hover:bg-accent-color transition duration-300">
                  <FaLinkedinIn className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-accent-color bg-opacity-20 flex items-center justify-center hover:bg-accent-color transition duration-300">
                  <FaInstagram className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              <form>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="nom-contact">Nom complet</label>
                  <input type="text" id="nom-contact" className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-accent-color text-white" placeholder="Votre nom complet" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="email-contact">Email</label>
                  <input type="email" id="email-contact" className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-accent-color text-white" placeholder="Votre adresse email" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="sujet">Sujet</label>
                  <input type="text" id="sujet" className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-accent-color text-white" placeholder="Sujet de votre message" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea id="message" rows="5" className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-accent-color text-white" placeholder="Votre message"></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full p-3 rounded-lg font-medium text-white">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
