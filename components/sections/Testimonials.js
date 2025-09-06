'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alexandru Popescu",
      car: "BMW X5 2019",
      service: "Ceramic Coating + PPF",
      rating: 5,
      text: "Incredibil! Mașina arată exact ca în prima zi. După 8 luni, apa încă se prelinge perfect și nu am nicio zgârietură. Investiția de 2.500 RON s-a meritat complet.",
      result: "Economisit 4.000 RON la revânzare",
      image: "/images/testimonial-1.jpg", // placeholder
      beforeAfter: true
    },
    {
      id: 2,
      name: "Maria Ionescu", 
      car: "Audi A4 2016",
      service: "Detailing Complet + Polish",
      rating: 5,
      text: "Aveam mașina plină de micro-zgârieturi și vopseaua opacă. După 2 zile la Redline, pare că am schimbat mașina! Colegii întreabă dacă e nouă.",
      result: "Vopseaua ca nouă după 7 ani",
      image: "/images/testimonial-2.jpg", // placeholder
      beforeAfter: true
    },
    {
      id: 3,
      name: "Radu Marinescu",
      car: "Mercedes C-Class 2020",
      service: "PPF + Interior Detailing", 
      rating: 5,
      text: "Profesionalism maxim! Au lucrat 3 zile pentru a fi totul perfect. Garanția de 2 ani îmi dă liniște totală. Recomand cu încredere!",
      result: "Protecție garantată 2 ani",
      image: "/images/testimonial-3.jpg", // placeholder
      beforeAfter: false
    }
  ]

  return (
    <section className="section-padding bg-background-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ce spun <span className="text-accent-red">clienții noștri</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rezultate reale de la proprietarii de mașini care au ales Redline Tuning
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Header with stars and car info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {testimonial.beforeAfter && (
                      <span className="text-xs bg-accent-red text-white px-2 py-1 rounded-full">
                        Before/After
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.car}</p>
                  <p className="text-sm text-accent-red font-medium">{testimonial.service}</p>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </blockquote>

                {/* Result Highlight */}
                <div className="bg-background-primary rounded-lg p-4 border-l-4 border-accent-red">
                  <p className="text-sm font-semibold text-accent-red mb-1">Rezultat:</p>
                  <p className="text-white font-medium">{testimonial.result}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent-red mb-2">98%</div>
              <p className="text-gray-300">Clienți mulțumiți</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-red mb-2">4.9</div>
              <p className="text-gray-300">Rating Google</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-red mb-2">847</div>
              <p className="text-gray-300">Recenzii pozitive</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Vrei să fii următorul client mulțumit?
          </p>
          <button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Vreau și eu rezultate ca acestea
          </button>
        </motion.div>
      </div>
    </section>
  )
}
