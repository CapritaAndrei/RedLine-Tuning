'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function Services() {
  const scrollToForm = (packageType) => {
    const form = document.getElementById('lead-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
      // Pre-select package in form
      setTimeout(() => {
        const packageSelect = document.querySelector('select[name="pachet"]')
        if (packageSelect) {
          packageSelect.value = packageType
          packageSelect.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }, 500)
    }
  }

  const services = [
    {
      id: 'pastrez-noua',
      title: 'Păstrează-o ca Nouă',
      subtitle: 'Protecție Maximă',
      description: 'Servicii premium pentru protejarea și menținerea aspectului original al mașinii tale.',
      services: ['Ceramic Coating', 'Paint Protection Film (PPF)', 'Colantare Premium'],
      benefits: [
        'Protecție împotriva zgârieturilor și UV',
        'Hidrofobicitate pentru curățare ușoară', 
        'Menține valoarea mașinii pe termen lung'
      ],
      icon: '🛡️',
      price: 'De la 1.500 RON',
      testId: 'card-ppf'
    },
    {
      id: 'reimprospatare',
      title: 'Reîmprospătează-o',
      subtitle: 'Detailing Complet',
      description: 'Restaurează strălucirea originală și reîmprospătează interiorul mașinii tale.',
      services: ['Detailing Exterior', 'Polish Profesional', 'Detailing Interior'],
      benefits: [
        'Elimină zgârieturile superficiale',
        'Restaurează strălucirea vopselei',
        'Curățare profundă interior/exterior'
      ],
      icon: '✨',
      price: 'De la 800 RON',
      testId: 'card-detailing'
    }
  ]

  return (
    <section className="section-padding carbon-fiber-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-brand-off-white">
            Serviciile <span className="text-accent-red">Noastre</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Alege pachetul potrivit pentru nevoile mașinii tale. Toate serviciile includ garanție și materiale premium.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                className="h-full flex flex-col relative overflow-hidden group"
                testId={service.testId}
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-red/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>
                
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold font-display mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent-red font-semibold text-lg mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Servicii incluse:</h4>
                  <ul className="space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-accent-red rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold text-white mb-3">Beneficii:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="text-accent-red mr-2 mt-1 flex-shrink-0">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-accent-red">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-400">
                      *Preț orientativ
                    </span>
                  </div>
                  <Button 
                    onClick={() => scrollToForm(service.id)}
                    className="w-full"
                  >
                    Alege acest pachet
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Nu ești sigur care pachet se potrivește mașinii tale?
          </p>
          <Button 
            variant="secondary"
            onClick={() => scrollToForm('')}
          >
            Consultă-te cu un Specialist
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
