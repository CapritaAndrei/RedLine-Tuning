'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../../components/ui/Button'

export default function ThankYou() {
  useEffect(() => {
    // Track Lead event on thank you page load
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Redline Tuning Lead Form',
        content_category: 'Auto Services',
        value: 0,
        currency: 'RON'
      })
    }
  }, [])

  const handlePhoneCall = () => {
    window.location.href = 'tel:+40123456789'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/40123456789?text=Salut! Am completat formularul pe site și aș vrea să aflu mai multe despre serviciile Redline Tuning.', '_blank')
  }

  const goHome = () => {
    window.location.href = '/'
  }

  return (
    <main className="min-h-screen flex items-center justify-center gradient-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-background-surface rounded-3xl p-8 md:p-12 border border-border shadow-2xl"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="text-accent-red">Mulțumim!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cererea ta a fost trimisă cu succes. Un specialist Redline Tuning te va contacta 
              <span className="text-accent-red font-semibold"> în maxim 2 ore</span> pentru a discuta 
              detaliile și a programa o evaluare gratuită.
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-background-primary rounded-2xl p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Ce urmează:</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start text-gray-300">
                <span className="text-accent-red mr-3 mt-1 flex-shrink-0">1.</span>
                Te contactăm în maxim 2 ore pentru confirmarea detaliilor
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-accent-red mr-3 mt-1 flex-shrink-0">2.</span>
                Programăm o evaluare gratuită la sediul nostru
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-accent-red mr-3 mt-1 flex-shrink-0">3.</span>
                Primești o ofertă personalizată și detaliată
              </li>
            </ul>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-4"
          >
            <p className="text-gray-300 mb-6">
              Sau ne poți contacta direct:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                onClick={handlePhoneCall}
                variant="primary"
                className="w-full"
                testId="thank-you-cta"
              >
                📞 Sună Acum
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="secondary"
                className="w-full"
              >
                💬 WhatsApp
              </Button>
            </div>
            
            <div className="pt-6">
              <Button 
                onClick={goHome}
                variant="ghost"
                className="w-full"
              >
                ← Înapoi la pagina principală
              </Button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 pt-8 border-t border-border text-sm text-gray-400"
          >
            <p><strong>Redline Tuning</strong></p>
            <p>📍 Str. Exemplu Nr. 123, Sector 1, București</p>
            <p>📞 +40 123 456 789</p>
            <p>📧 contact@redlinetuning.ro</p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
