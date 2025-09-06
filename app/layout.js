import { Inter, Urbanist } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' })

export const metadata = {
  title: 'Redline Tuning - Protecție & Detailing Auto București',
  description: 'Servicii profesionale de ceramic coating, PPF, detailing interior și exterior în București. Peste 1.000 mașini îngrijite.',
  keywords: 'ceramic coating bucurești, ppf, detailing auto, colantare, polish profesional',
  openGraph: {
    title: 'Redline Tuning - Performance & Care în București',
    description: 'Păstrează-ți mașina ca nouă sau reîmprospătează-o cu serviciile noastre premium',
    images: ['/og-image.jpg'],
    locale: 'ro_RO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${inter.variable} ${urbanist.variable}`}>
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR_PIXEL_ID'}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" />
      </head>
      <body className={`${inter.className} gradient-background`}>
        {/* Custom Cursor */}
        <div id="cursor-dot" className="cursor-dot"></div>
        
        {children}
        
        {/* Custom Cursor Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const cursor = document.getElementById('cursor-dot');
                
                document.addEventListener('mousemove', function(e) {
                  cursor.style.left = e.clientX - 6 + 'px';
                  cursor.style.top = e.clientY - 6 + 'px';
                });
                
                // Add hover effect for interactive elements
                const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
                
                interactiveElements.forEach(element => {
                  element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                  element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
                });
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
