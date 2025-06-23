import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-900">
      <div className="container mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-green-400 pb-2 mb-4">Contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">17 BP 1404 Abidjan 17</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-600 flex-shrink-0" />
                <span className="text-sm">+225 2720347372</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-600 flex-shrink-0" />
                <span className="text-sm">info@example.ci</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaGlobe className="text-green-600 flex-shrink-0" />
                <span className="text-sm">www.example.ci</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-green-400 pb-2 mb-4">Liens Rapides</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <a href="#accueil" className="text-sm text-green-700 hover:text-green-900 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Accueil
              </a>
              <a href="#apropos" className="text-sm text-green-700 hover:text-green-900 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                À Propos
              </a>
              <a href="#objectifs" className="text-sm text-green-700 hover:text-green-900 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Objectifs
              </a>
              <a href="#programme" className="text-sm text-green-700 hover:text-green-900 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Programme
              </a>
              <a href="#inscription" className="text-sm text-green-700 hover:text-green-900 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                S'inscrire
              </a>
              <a href="#contact" className="text-sm text-green-700 hover:text-green-900 transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Contact
              </a>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-green-400 pb-2 mb-4">Newsletter</h3>
            
            <p className="text-sm text-green-700">Restez informé de nos dernières actualités et événements.</p>
            
            <form className="mt-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-grow px-4 py-2 bg-white bg-opacity-20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
                <button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  <FaEnvelope />
                </button>
              </div>
            </form>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                  <FaFacebookF className="text-blue-200" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                  <FaTwitter className="text-blue-200" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                  <FaLinkedinIn className="text-blue-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-green-300 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-green-700">
            <p>&copy; 2025 Tous droits réservés.</p>
            <div className="flex space-x-6 mt-3 md:mt-0">
              <a href="#" className="hover:text-green-900 transition-colors duration-300">Politique de confidentialité</a>
              <a href="#" className="hover:text-green-900 transition-colors duration-300">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
