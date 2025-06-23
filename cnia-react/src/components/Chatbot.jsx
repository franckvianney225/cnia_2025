import { useState } from 'react'
import { FaRobot, FaTimes } from 'react-icons/fa'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
          <div className="bg-orange-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold flex items-center">
              <FaRobot className="mr-2" /> Assistant IA
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-gray-700">Bonjour ! Comment puis-je vous aider ?</p>
          </div>
          <div className="p-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Posez votre question..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          <FaRobot size={24} />
        </button>
      )}
    </div>
  )
}
