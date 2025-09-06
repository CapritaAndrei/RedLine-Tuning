import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Basic health checks
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      memory: {
        used: Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100,
        total: Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100
      }
    }

    // Check environment variables (without exposing sensitive data)
    const envChecks = {
      metaPixelConfigured: !!process.env.NEXT_PUBLIC_META_PIXEL_ID,
      emailConfigured: !!(process.env.SMTP_HOST && process.env.SMTP_USER),
      crmConfigured: !!process.env.CRM_WEBHOOK_URL
    }

    return NextResponse.json({
      ...healthData,
      services: envChecks
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
