import { z } from 'zod'

// Romanian phone number validation
const romanianPhoneRegex = /^(\+40|0040|0)[0-9]{9}$/

// Lead form validation schema
export const leadSchema = z.object({
  nume: z.string()
    .min(2, 'Numele trebuie să aibă cel puțin 2 caractere')
    .max(50, 'Numele nu poate avea mai mult de 50 de caractere')
    .regex(/^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/, 'Numele poate conține doar litere, spații și cratima'),
  
  telefon: z.string()
    .regex(romanianPhoneRegex, 'Numărul de telefon nu este valid (ex: 0721123456 sau +40721123456)')
    .transform(phone => {
      // Normalize phone number to +40 format
      if (phone.startsWith('0')) {
        return '+40' + phone.substring(1)
      }
      if (phone.startsWith('0040')) {
        return '+40' + phone.substring(4)
      }
      return phone
    }),
  
  email: z.string()
    .email('Adresa de email nu este validă')
    .optional()
    .or(z.literal('')),
  
  marca_model: z.string()
    .min(2, 'Te rugăm să completezi marca și modelul')
    .max(100, 'Marca și modelul nu pot avea mai mult de 100 de caractere'),
  
  pachet: z.enum(['pastrez-noua', 'reimprospatare'], {
    errorMap: () => ({ message: 'Te rugăm să alegi un pachet' })
  }),
  
  contact_preferat: z.enum(['telefon', 'whatsapp', 'email'], {
    errorMap: () => ({ message: 'Te rugăm să alegi modalitatea de contact preferată' })
  }),
  
  interval: z.enum(['dimineata', 'pranz', 'seara'], {
    errorMap: () => ({ message: 'Te rugăm să alegi intervalul preferat' })
  }),
  
  observatii: z.string()
    .max(500, 'Observațiile nu pot avea mai mult de 500 de caractere')
    .optional(),
  
  gdpr_consent: z.boolean()
    .refine(val => val === true, {
      message: 'Trebuie să accepți termenii și condițiile pentru a continua'
    }),

  // Hidden UTM fields
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(), 
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  page_referrer: z.string().optional(),
  
  // Honeypot field for bot detection
  website: z.string().max(0, 'Spam detected').optional()
})

// export type LeadFormData = z.infer<typeof leadSchema> // TypeScript type - not needed in JS

// Rate limiting helper
export const createRateLimitKey = (ip) => `lead_form_${ip}`

// Form field options
export const FORM_OPTIONS = {
  pachete: [
    { value: 'pastrez-noua', label: 'Păstrează-o ca nouă (Ceramic Coating, PPF, Colantare)' },
    { value: 'reimprospatare', label: 'Reîmprospătează-o (Detailing, Polish profesional)' }
  ],
  contactPreferat: [
    { value: 'telefon', label: 'Telefon' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'email', label: 'Email' }
  ],
  intervale: [
    { value: 'dimineata', label: 'Dimineața (09:00 - 12:00)' },
    { value: 'pranz', label: 'Prânz (12:00 - 17:00)' },
    { value: 'seara', label: 'Seara (17:00 - 20:00)' }
  ]
}
