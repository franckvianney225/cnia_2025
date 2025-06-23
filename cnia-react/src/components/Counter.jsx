import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars

export default function Counter({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const steps = 50 // Nombre d'étapes pour l'animation
    const increment = end / steps
    const incrementTime = (duration * 1000) / steps
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      // Formater différemment selon le suffixe
      const displayValue = suffix === '%' ? Math.round(start) : 
                         suffix === 'M' ? start.toFixed(1) : 
                         Math.round(start)
      
      setCount(displayValue)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [end, duration, suffix])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <motion.span 
        className="text-4xl font-bold text-accent-color"
        whileHover={{ scale: 1.1 }}
      >
        {count}{suffix}
      </motion.span>
    </motion.div>
  )
}
