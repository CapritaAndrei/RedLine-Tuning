# Redline Tuning — Architecture

## 1. Tech Stack & Rationale

### Core Technologies
- **Next.js 14+ (App Router)**: Modern React framework with file-based routing, built-in optimization, and server components
- **React 18**: Component-based UI with hooks and server/client component patterns
- **TailwindCSS**: Utility-first CSS framework for rapid, consistent styling
- **Framer Motion**: Performant animations and micro-interactions
- **JavaScript**: Type safety and better developer experience

### Additional Libraries
- **Zod**: Runtime type validation for form data and API inputs
- **React Hook Form**: Performant form handling with validation
- **Nodemailer**: Email sending capability for lead notifications
- **next/font**: Optimized font loading (Inter/Urbanist)

## 2. File Tree (Authoritative)

```
redtune/
├── app/
│   ├── layout.tsx              # Root layout with Meta Pixel
│   ├── page.tsx                # Main landing page
│   ├── thank-you/
│   │   └── page.tsx           # Success/confirmation page
│   ├── api/
│   │   └── lead/
│   │       └── route.ts       # Form submission API endpoint
│   └── globals.css            # Global styles + Tailwind
├── components/
│   ├── LeadForm.tsx           # Main conversion form
│   ├── ui/
│   │   ├── Button.tsx         # Reusable button component
│   │   ├── Card.tsx           # Service package cards
│   │   └── Input.tsx          # Form input components
│   └── sections/
│       ├── Hero.tsx           # Hero section
│       ├── Services.tsx       # Service packages
│       ├── Gallery.tsx        # Before/After gallery
│       ├── WhyRedline.tsx     # USP section
│       ├── Testimonials.tsx   # Social proof
│       ├── FAQ.tsx            # Frequently asked questions
│       └── Contact.tsx        # Contact info & map
├── lib/
│   ├── validators.ts          # Zod schemas for form validation
│   ├── pixel.ts              # Meta Pixel utilities
│   ├── email.ts              # Email sending logic
│   └── utils.ts              # General utilities
├── public/
│   ├── images/               # Gallery images, before/after
│   ├── favicon.ico
│   └── og-image.jpg          # Open Graph image
├── tailwind.config.js        # Custom Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 3. Data Flow

### Form Submission Flow
1. **Client**: User fills form → client-side validation (React Hook Form + Zod)
2. **Capture UTMs**: Extract URL parameters and store in hidden form fields
3. **Submit**: POST to `/api/lead` with form data + UTM parameters
4. **Server Processing**:
   - Rate limiting check
   - Input validation (Zod schema)
   - Save lead data (placeholder for database)
   - Send notification email to garage
   - Optional: Webhook to CRM system
5. **Response**: Success → redirect to `/thank-you` + Meta Pixel Lead event
6. **Error Handling**: Display inline errors, maintain form state

### UTM Parameter Capture
- Extract on page load: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- Store in component state and include as hidden form fields
- Capture `page_referrer` from `document.referrer`

## 4. Tracking & Analytics

### Meta Pixel Implementation
- **Base Pixel**: Initialize on layout.tsx with environment variable
- **Standard Events**: 
  - `PageView` (automatic)
  - `Lead` (on form submission success)
  - `InitiateCheckout` (on CTA clicks - optional)

### Conversions API (Optional)
- Server-side event tracking via `/api/conversions`
- Event ID pairing between client and server events
- Enhanced data matching with email/phone when available

### Event Structure
```javascript
// Client-side Lead event
fbq('track', 'Lead', {
  content_name: 'Redline Tuning Lead Form',
  content_category: selectedPackage,
  value: 0,
  currency: 'RON'
});
```

## 5. Security & Privacy

### Security Measures
- **Rate Limiting**: Max 5 submissions per IP per hour
- **Input Validation**: Zod schemas for all user inputs
- **Honeypot Field**: Hidden field to catch bots
- **CSRF Protection**: Built-in Next.js protection
- **Environment Variables**: Sensitive data in `.env.local`

### Privacy Compliance
- **GDPR Consent**: Required checkbox with privacy policy link
- **Data Minimization**: Only collect necessary information
- **Secure Headers**: Next.js security headers enabled
- **No Sensitive Data Logging**: Sanitize logs of personal information

## 6. Error Handling

### Client-Side Errors
- **Form Validation**: Real-time validation with React Hook Form
- **Network Errors**: Toast notifications for submission failures
- **Fallback UI**: Graceful degradation for JavaScript disabled

### Server-Side Errors
- **API Routes**: Try-catch blocks with proper HTTP status codes
- **Email Failures**: Log errors, don't block form submission
- **Rate Limiting**: Return 429 with retry-after header

## 7. Performance Optimization

### Next.js Optimizations
- **Image Optimization**: `next/image` for all gallery images
- **Font Loading**: `next/font` with display swap
- **Route Segment Caching**: Static generation where possible
- **Bundle Analysis**: Regular bundle size monitoring

### Core Web Vitals Targets
- **LCP**: < 2.5s (hero image optimization)
- **FID**: < 100ms (minimal JavaScript)
- **CLS**: < 0.1 (reserved space for images)

## 8. Accessibility

### WCAG 2.1 AA Compliance
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels, live regions
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text

## 9. SEO Optimization

### Metadata API (Next.js 14)
```typescript
export const metadata: Metadata = {
  title: 'Redline Tuning - Protectie & Detailing Auto București',
  description: 'Servicii profesionale de ceramic coating, PPF, detailing interior și exterior în București. Peste 1.000 mașini îngrijite.',
  keywords: 'ceramic coating bucurești, ppf, detailing auto, colantare, polish profesional',
  openGraph: {
    title: 'Redline Tuning - Performance & Care in București',
    description: 'Păstrează-ți mașina ca nouă sau reîmprospătează-o cu serviciile noastre premium',
    images: ['/og-image.jpg'],
    locale: 'ro_RO',
    type: 'website'
  }
}
```

## 10. Deployment Notes

### Environment Variables
```bash
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
NOTIFICATION_EMAIL=contact@redlinetuning.ro
CRM_WEBHOOK_URL=https://your-crm.com/webhook
```

### Build Commands
- Development: `npm run dev`
- Production: `npm run build && npm start`
- Type checking: `npm run type-check`
- Linting: `npm run lint`
