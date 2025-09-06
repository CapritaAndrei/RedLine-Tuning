'use client'

import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import FoundersNote from '../components/sections/FoundersNote'
// import Gallery from '../components/sections/Gallery'
// import WhyRedline from '../components/sections/WhyRedline'
// import LeadForm from '../components/LeadForm'
// import Contact from '../components/sections/Contact'

export default function Home() {
  useEffect(() => {
    // Capture UTM parameters on page load
    const urlParams = new URLSearchParams(window.location.search)
    const utmData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
      page_referrer: document.referrer || ''
    }
    
    // Store UTM data in sessionStorage for form submission
    sessionStorage.setItem('utmData', JSON.stringify(utmData))
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Testimonials Section - Social proof that inspires action */}
      <Testimonials />
      
      {/* FAQ Section - Handle objections */}
      <FAQ />
      
      {/* Founder's Note - Personal connection */}
      <FoundersNote />
      
      {/* Gallery Section */}
      {/* <Gallery /> */}
      
      {/* Why Redline Section */}
      {/* <WhyRedline /> */}
      
      {/* Lead Form Section */}
      {/* <LeadForm /> */}
      
      {/* Contact Section */}
      {/* <Contact /> */}
      
      {/* Placeholder for Gallery - can be added later */}
      <section className="section-padding bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Galerie Before/After</h2>
          <p className="text-gray-300 text-lg">
            Secțiunea pentru galerie va fi implementată în următorul pas
          </p>
        </div>
      </section>
      
      <section id="lead-form" className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Cere o <span className="text-accent-red">Ofertă Gratuită</span></h2>
          <p className="text-gray-300 text-lg mb-8">
            Formularul de lead va fi implementat în următorul pas
          </p>
          <div className="bg-background-surface p-8 rounded-2xl border border-border">
            <p className="text-gray-400">Formular coming soon...</p>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact & Locație</h2>
          <p className="text-gray-300 text-lg">
            Secțiunea pentru contact și hartă va fi implementată în următorul pas
          </p>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-background-elevated py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Redline Tuning. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </main>
  )
}
