'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePhoneCall = () => {
    window.location.href = 'tel:+40123456789'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background-primary via-background-surface to-background-primary opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Main Heading - Hook that addresses biggest objection */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight">
            <span className="text-white">Mașina ta arată</span>
            <br />
            <span className="text-accent-red">ca în prima zi</span>
            <br />
            <span className="text-gray-300 text-2xl md:text-3xl lg:text-4xl font-medium">
              sau îți returnăm banii
            </span>
          </h1>
          
          {/* Subtitle - Get specific about how we create value */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            <strong className="text-white">Redline Tuning București</strong> - Ceramic coating, PPF și detailing premium cu <span className="text-accent-red font-semibold">garanție 100%</span> și materiale de calitate superioară.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="w-full sm:w-auto"
              testId="cta-hero"
            >
              Vreau mașina ca nouă - Gratuit
            </Button>
            <Button 
              variant="secondary"
              onClick={handlePhoneCall}
              size="lg"
              className="w-full sm:w-auto"
            >
              Sună pentru evaluare gratuită
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300 font-medium">5.0</span>
            </div>
            
            {/* Divider */}
            <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
            
            {/* Social Proof */}
            <p className="text-gray-300 font-medium">
              <span className="text-accent-red font-bold">1.247</span> mașini restaurate în 2024
            </p>
            
            {/* Divider */}
            <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
            
            {/* Guarantee */}
            <p className="text-gray-300 font-medium">
              🛡️ Garanție 2 ani
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
