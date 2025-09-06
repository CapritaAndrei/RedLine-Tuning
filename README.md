# Redline Tuning - Landing Page

High-converting landing page for Redline Tuning garage in Bucharest, optimized for Meta Ads traffic using Marketing Examples best practices.

## 🚀 Features

- **Conversion-Optimized**: Follows the complete 10-step Marketing Examples formula
- **Meta Ads Ready**: Built-in Meta Pixel integration and UTM parameter tracking
- **High Performance**: Next.js 14 with App Router, optimized images, and fast loading
- **Mobile-First**: Responsive design with Tailwind CSS
- **Lead Generation**: Complete form with validation and email notifications
- **Analytics Ready**: Meta Pixel events, UTM tracking, and conversion measurement

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
redtune/
├── app/
│   ├── api/lead/          # Lead form API endpoint
│   ├── thank-you/         # Success page
│   ├── layout.js          # Root layout with Meta Pixel
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Landing page sections
│   └── LeadForm.js        # Main conversion form
├── lib/
│   └── validators.js      # Form validation schemas
├── public/
│   └── images/           # Static assets
├── architecture.md       # Technical documentation
└── style.md             # Style guide
```

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone git@github.com:CapritaAndrei/RedLine-Tuning.git
cd RedLine-Tuning
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Meta Pixel Configuration
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id_here

# Email Configuration (for lead notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
NOTIFICATION_EMAIL=contact@redlinetuning.ro

# CRM Integration (Optional)
CRM_WEBHOOK_URL=https://your-crm.com/webhook
CRM_API_KEY=your_api_key_here

# Contact Information
PHONE_NUMBER=+40123456789
WHATSAPP_NUMBER=40123456789
EMAIL=contact@redlinetuning.ro
ADDRESS=Str. Exemplu Nr. 123, Sector 1, București
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

### 5. Build for Production
```bash
npm run build
npm start
```

## 📊 Landing Page Structure

### Above the Fold (Earn Attention)
1. **Hook Title**: "Mașina ta arată ca în prima zi sau îți returnăm banii"
2. **Value Subtitle**: Explains services with guarantee
3. **Visual**: Hero section with trust indicators
4. **Social Proof**: "1.247 mașini restaurate în 2024"
5. **CTAs**: Value-focused buttons

### Below the Fold (Earn the Sale)
6. **Services**: Two main packages with benefits
7. **Testimonials**: Customer results and social proof
8. **FAQ**: Addresses main objections
9. **2nd CTA**: Multiple conversion points
10. **Founder's Note**: Personal connection and trust

## 🎯 Conversion Optimization

### Meta Pixel Events
- `PageView`: Automatic on page load
- `Lead`: Triggered on successful form submission
- UTM parameter capture for attribution

### Form Features
- **Validation**: Real-time validation with Zod
- **Rate Limiting**: 5 submissions per hour per IP
- **Spam Protection**: Honeypot field
- **GDPR Compliance**: Explicit consent checkbox
- **Error Handling**: User-friendly error messages

### Performance
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimized Google Fonts loading
- **Lazy Loading**: Below-fold content lazy loaded

## 🔒 Security & Privacy

- **Rate Limiting**: Prevents spam submissions
- **Input Validation**: Server-side validation with Zod
- **GDPR Compliance**: Privacy policy consent required
- **Honeypot Protection**: Bot detection
- **Secure Headers**: Next.js security headers enabled

## 📧 Email Integration

The form supports multiple email providers:

### Gmail/Google Workspace
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password  # Use App Password, not regular password
```

### Other Providers
- **Outlook**: `smtp.live.com`
- **Yahoo**: `smtp.mail.yahoo.com`
- **Custom SMTP**: Use your provider's settings

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📈 Analytics & Tracking

### Meta Pixel Setup
1. Create Meta Pixel in Meta Business Manager
2. Add Pixel ID to `NEXT_PUBLIC_META_PIXEL_ID`
3. Verify events in Meta Events Manager

### UTM Parameters
The page automatically captures:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `page_referrer`

### Health Check
Monitor application health at `/api/health`

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change brand colors:
```javascript
colors: {
  accent: {
    red: {
      DEFAULT: '#EF233C',  // Primary brand color
      700: '#C1121F',      // Hover state
    }
  }
}
```

### Content
- **Copy**: Edit components in `components/sections/`
- **Services**: Update packages in `components/sections/Services.js`
- **Testimonials**: Modify testimonials in `components/sections/Testimonials.js`
- **FAQ**: Update questions in `components/sections/FAQ.js`

## 🐛 Troubleshooting

### Common Issues

**Form not submitting**
- Check API endpoint at `/api/lead`
- Verify environment variables
- Check browser console for errors

**Meta Pixel not tracking**
- Verify `NEXT_PUBLIC_META_PIXEL_ID` is set
- Check Meta Events Manager
- Ensure events are firing in browser dev tools

**Email notifications not working**
- Verify SMTP credentials
- Check spam folder
- Use App Passwords for Gmail

## 📞 Support

For technical support or customization requests, contact:
- **Email**: contact@redlinetuning.ro
- **Phone**: +40 123 456 789

## 📄 License

This project is proprietary software for Redline Tuning. All rights reserved.

---

Built with ❤️ for high-converting automotive landing pages.
