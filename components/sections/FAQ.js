'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) // First question open by default

  const faqs = [
    {
      question: "Cât durează procesul și când îmi pot lua mașina?",
      answer: "Ceramic coating: 2-3 zile. PPF complet: 3-5 zile. Detailing: 1-2 zile. Te anunțăm exact când poți veni să o ridici și îți oferim transport gratuit în București dacă ai nevoie."
    },
    {
      question: "Ce garanție oferă Redline Tuning?",
      answer: "Ceramic coating: 2 ani garanție completă. PPF: 5 ani garanție producător + 2 ani aplicare. Detailing: 6 luni garanție. Dacă nu ești 100% mulțumit în primele 30 de zile, îți returnăm banii."
    },
    {
      question: "Cât costă serviciile și pot plăti în rate?",
      answer: "Ceramic coating: 1.500-3.000 RON. PPF complet: 4.000-8.000 RON. Detailing: 800-1.500 RON. Acceptăm plata în 2-3 rate fără dobândă și toate cardurile."
    },
    {
      question: "Materialele sunt de calitate? Ce mărci folosiți?",
      answer: "Folosim doar materiale premium: Gtechniq, Ceramic Pro, XPEL PPF. Toate au certificări internaționale și sunt folosite de service-urile oficiale BMW, Audi, Mercedes."
    },
    {
      question: "Lucrați și cu mașini mai vechi sau doar cu cele noi?",
      answer: "Lucrăm cu orice mașină din 2010 încoace. Pentru mașinile mai vechi, facem mai întâi o evaluare gratuită și îți spunem exact ce se poate face și la ce preț."
    },
    {
      question: "Cum știu că nu îmi veți strica mașina?",
      answer: "Tehnicienii noștri sunt certificați international. Avem asigurare profesională de 100.000 EUR. Plus, îți arătăm tot procesul și faci poze înainte/după fiecare etapă."
    }
  ]

  return (
    <section className="section-padding bg-background-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Întrebări <span className="text-accent-red">Frecvente</span>
          </h2>
          <p className="text-xl text-gray-300">
            Răspunsuri la întrebările pe care ni le pun cei mai mulți clienți
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-primary rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-background-elevated transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 bg-background-primary rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Mai ai întrebări?
          </h3>
          <p className="text-gray-300 mb-6">
            Vorbește direct cu un specialist Redline Tuning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'tel:+40123456789'}
              className="btn-primary"
            >
              📞 Sună acum - Gratuit
            </button>
            <button 
              onClick={() => window.open('https://wa.me/40123456789?text=Salut! Am o întrebare despre serviciile Redline Tuning.', '_blank')}
              className="btn-secondary"
            >
              💬 Scrie pe WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
