'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function FoundersNote() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="elevated" className="relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-red/5 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  O poveste <span className="text-accent-red">personală</span>
                </h2>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Founder Image */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto bg-background-primary rounded-2xl flex items-center justify-center border border-border">
                      {/* Placeholder for founder image */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-accent-red/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-3xl">👨‍🔧</span>
                        </div>
                        <p className="text-sm text-gray-400">Foto fondator</p>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-bold text-white">Andrei Popescu</h3>
                      <p className="text-accent-red font-medium">Fondator Redline Tuning</p>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      <strong className="text-white">Acum 8 ani, am avut aceeași problemă ca tine.</strong>
                    </p>
                    
                    <p>
                      Aveam un BMW Seria 3 nou și voiam să-l păstrez impecabil. Am mers la 4 service-uri diferite în București. Rezultatul? Unul mi-a lăsat urme pe vopsea, altul a folosit materiale ieftine care s-au deteriorat în 6 luni, iar al treilea mi-a cercat 150% din prețul corect.
                    </p>
                    
                    <p>
                      <strong className="text-white">M-am hotărât să rezolv această problemă pentru toți proprietarii de mașini din București.</strong>
                    </p>
                    
                    <p>
                      Am petrecut 2 ani învățând de la cei mai buni specialiști din Germania și UK. Am investit peste 200.000 EUR în echipamente profesionale și am adus materialele premium pe care le folosesc service-urile oficiale Mercedes și BMW.
                    </p>
                    
                    <p className="text-accent-red font-semibold">
                      Astăzi, după 1.247 de mașini restaurate, îți promit că vei avea aceeași experiență pe care mi-aș fi dorit-o și eu în 2016.
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="bg-background-primary rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-white mb-3">Certificări & Experiență:</h4>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-accent-red rounded-full mr-3"></span>
                        Certificat Gtechniq UK
                      </div>
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-accent-red rounded-full mr-3"></span>
                        Certificat XPEL Germania
                      </div>
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-accent-red rounded-full mr-3"></span>
                        8 ani experiență
                      </div>
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-accent-red rounded-full mr-3"></span>
                        1.247 mașini restaurate
                      </div>
                    </div>
                  </div>

                  {/* Personal Promise */}
                  <div className="border-l-4 border-accent-red pl-6">
                    <p className="text-white font-medium italic">
                      "Îți garantez personal că mașina ta va arăta ca în prima zi. Dacă nu ești 100% mulțumit, îți returnez banii și îmi asum costurile de remediere."
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="w-16 h-8 bg-background-primary rounded border border-border flex items-center justify-center mr-3">
                        <span className="text-xs text-gray-400">Semnătură</span>
                      </div>
                      <span className="text-sm text-gray-400">Andrei Popescu, Fondator</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 pt-8 border-t border-border">
                <p className="text-gray-300 mb-6">
                  Vrei să vorbești direct cu mine despre mașina ta?
                </p>
                <button 
                  onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Vreau să vorbesc cu Andrei
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
