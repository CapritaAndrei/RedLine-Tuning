import { NextResponse } from 'next/server'
import { leadSchema } from '../../../lib/validators'
import { headers } from 'next/headers'

// Simple in-memory rate limiting (in production, use Redis or database)
const rateLimitMap = new Map()

// Rate limiting function
function rateLimit(ip, limit = 5, windowMs = 60 * 60 * 1000) { // 5 requests per hour
  const now = Date.now()
  const windowStart = now - windowMs
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [])
  }
  
  const requests = rateLimitMap.get(ip)
  
  // Remove old requests outside the window
  const validRequests = requests.filter(time => time > windowStart)
  rateLimitMap.set(ip, validRequests)
  
  // Check if limit exceeded
  if (validRequests.length >= limit) {
    return false
  }
  
  // Add current request
  validRequests.push(now)
  return true
}

// Email sending function (placeholder - implement with your email service)
async function sendLeadNotification(leadData) {
  // In production, implement with:
  // - Nodemailer for SMTP
  // - SendGrid, Mailgun, or similar service
  // - Your CRM webhook
  
  console.log('New lead received:', {
    nume: leadData.nume,
    telefon: leadData.telefon,
    email: leadData.email,
    pachet: leadData.pachet,
    marca_model: leadData.marca_model,
    timestamp: new Date().toISOString()
  })
  
  // Placeholder for email sending
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, messageId: 'placeholder-' + Date.now() })
    }, 100)
  })
}

// CRM webhook function (placeholder)
async function sendToCRM(leadData) {
  const crmWebhookUrl = process.env.CRM_WEBHOOK_URL
  
  if (!crmWebhookUrl) {
    console.log('No CRM webhook configured, skipping...')
    return { success: true }
  }
  
  try {
    const response = await fetch(crmWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CRM_API_KEY}`
      },
      body: JSON.stringify({
        ...leadData,
        source: 'website',
        timestamp: new Date().toISOString()
      })
    })
    
    if (!response.ok) {
      throw new Error(`CRM webhook failed: ${response.status}`)
    }
    
    return { success: true, data: await response.json() }
  } catch (error) {
    console.error('CRM webhook error:', error)
    // Don't fail the whole request if CRM fails
    return { success: false, error: error.message }
  }
}

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const headersList = headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const realIP = headersList.get('x-real-ip')
    const clientIP = forwardedFor?.split(',')[0] || realIP || 'unknown'
    
    // Apply rate limiting
    if (!rateLimit(clientIP)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'RATE_LIMITED',
          message: 'Prea multe cereri. Te rugăm să încerci din nou peste o oră.' 
        },
        { status: 429 }
      )
    }
    
    // Parse and validate request body
    const body = await request.json()
    
    // Check honeypot field
    if (body.website && body.website.length > 0) {
      console.log('Honeypot triggered, potential spam:', clientIP)
      return NextResponse.json(
        { 
          success: false, 
          error: 'SPAM_DETECTED',
          message: 'Cererea nu a putut fi procesată.' 
        },
        { status: 400 }
      )
    }
    
    // Validate form data
    const validatedData = leadSchema.parse(body)
    
    // Add metadata
    const leadData = {
      ...validatedData,
      ip: clientIP,
      userAgent: headersList.get('user-agent') || '',
      timestamp: new Date().toISOString(),
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
    
    // Process lead (parallel execution for better performance)
    const [emailResult, crmResult] = await Promise.allSettled([
      sendLeadNotification(leadData),
      sendToCRM(leadData)
    ])
    
    // Log results
    if (emailResult.status === 'rejected') {
      console.error('Email notification failed:', emailResult.reason)
    }
    
    if (crmResult.status === 'rejected') {
      console.error('CRM integration failed:', crmResult.reason)
    }
    
    // Return success (even if email/CRM failed - user shouldn't see these errors)
    return NextResponse.json({
      success: true,
      message: 'Cererea a fost trimisă cu succes. Te vom contacta în curând!',
      leadId: leadData.id
    })
    
  } catch (error) {
    console.error('Lead submission error:', error)
    
    // Handle validation errors
    if (error.name === 'ZodError') {
      const fieldErrors = {}
      error.errors.forEach(err => {
        const field = err.path.join('.')
        fieldErrors[field] = err.message
      })
      
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'Te rugăm să corectezi erorile din formular.',
          fields: fieldErrors
        },
        { status: 400 }
      )
    }
    
    // Generic server error
    return NextResponse.json(
      {
        success: false,
        error: 'SERVER_ERROR',
        message: 'A apărut o eroare de server. Te rugăm să încerci din nou.'
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
