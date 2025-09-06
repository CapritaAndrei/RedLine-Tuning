'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { leadSchema, FORM_OPTIONS } from '../lib/validators'
import Input from './ui/Input'
import Select from './ui/Select'
import Textarea from './ui/Textarea'
import Checkbox from './ui/Checkbox'
import Button from './ui/Button'

export default function LeadForm({ preSelectedPackage = '' }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      pachet: preSelectedPackage,
      contact_preferat: 'telefon',
      interval: 'pranz'
    }
  })

  // Pre-fill UTM data on component mount
  useEffect(() => {
    const utmData = JSON.parse(sessionStorage.getItem('utmData') || '{}')
    Object.keys(utmData).forEach(key => {
      setValue(key, utmData[key])
    })
  }, [setValue])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'A apărut o eroare')
      }

      // Track successful lead submission
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Redline Tuning Lead Form',
          content_category: data.pachet,
          value: 0,
          currency: 'RON'
        })
      }

      setSubmitSuccess(true)
      
      // Redirect to thank you page after short delay
      setTimeout(() => {
        window.location.href = '/thank-you'
      }, 1500)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error.message || 'A apărut o eroare. Te rugăm să încerci din nou.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Mulțumim!</h3>
        <p className="text-gray-300 mb-4">
          Cererea ta a fost trimisă cu succes. Te redirecționăm...
        </p>
        <div className="w-8 h-8 border-4 border-accent-red border-t-transparent rounded-full animate-spin mx-auto"></div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="lead-form">
        {/* Error Message */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500 rounded-lg p-4"
          >
            <p className="text-red-400 text-sm">{submitError}</p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Nume */}
          <Input
            {...register('nume')}
            label="Nume și prenume"
            placeholder="Ex: Ion Popescu"
            error={errors.nume?.message}
            required
          />

          {/* Telefon */}
          <Input
            {...register('telefon')}
            label="Număr de telefon"
            placeholder="Ex: 0721123456"
            type="tel"
            error={errors.telefon?.message}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email */}
          <Input
            {...register('email')}
            label="Adresa de email"
            placeholder="Ex: ion@example.com"
            type="email"
            error={errors.email?.message}
          />

          {/* Marca/Model */}
          <Input
            {...register('marca_model')}
            label="Marca, model și anul mașinii"
            placeholder="Ex: BMW X5 2019"
            error={errors.marca_model?.message}
            required
          />
        </div>

        {/* Pachet */}
        <Select
          {...register('pachet')}
          label="Alege pachetul dorit"
          options={FORM_OPTIONS.pachete}
          error={errors.pachet?.message}
          required
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Preferat */}
          <Select
            {...register('contact_preferat')}
            label="Preferi să te contactăm prin"
            options={FORM_OPTIONS.contactPreferat}
            error={errors.contact_preferat?.message}
            required
          />

          {/* Interval */}
          <Select
            {...register('interval')}
            label="Intervalul preferat pentru contact"
            options={FORM_OPTIONS.intervale}
            error={errors.interval?.message}
            required
          />
        </div>

        {/* Observatii */}
        <Textarea
          {...register('observatii')}
          label="Observații suplimentare"
          placeholder="Detalii despre starea mașinii, cerințe speciale, întrebări..."
          rows={4}
          error={errors.observatii?.message}
        />

        {/* GDPR Consent */}
        <Checkbox
          {...register('gdpr_consent')}
          error={errors.gdpr_consent?.message}
          label={
            <>
              Sunt de acord cu{' '}
              <a 
                href="/politica-confidentialitate" 
                className="text-accent-red hover:text-accent-red-700 underline"
                target="_blank"
              >
                politica de confidențialitate
              </a>
              {' '}și procesarea datelor personale în scopul contactării. *
            </>
          }
        />

        {/* Honeypot field - hidden from users */}
        <input
          {...register('website')}
          type="text"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Hidden UTM fields */}
        <input {...register('utm_source')} type="hidden" />
        <input {...register('utm_medium')} type="hidden" />
        <input {...register('utm_campaign')} type="hidden" />
        <input {...register('utm_term')} type="hidden" />
        <input {...register('utm_content')} type="hidden" />
        <input {...register('page_referrer')} type="hidden" />

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
            testId="submit-button"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                Se trimite...
              </>
            ) : (
              'Trimite cererea - Gratuit'
            )}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="text-center pt-4 space-y-2">
          <p className="text-sm text-gray-400">
            🔒 Datele tale sunt protejate și nu vor fi partajate cu terți
          </p>
          <p className="text-sm text-gray-400">
            📞 Te contactăm în maxim 2 ore în intervalul ales
          </p>
        </div>
      </form>
    </motion.div>
  )
}
