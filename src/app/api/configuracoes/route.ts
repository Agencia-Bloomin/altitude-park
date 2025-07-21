import { NextResponse } from 'next/server'
import { siteConfig } from '@/data/config'

export async function GET() {
  try {
    return NextResponse.json({
      recaptcha: {
        enabled: siteConfig.recaptcha.enabled,
        siteKey: siteConfig.recaptcha.siteKey
      },
      smtp: {
        host: siteConfig.smtp.host,
        port: siteConfig.smtp.port,
        secure: siteConfig.smtp.secure,
        user: siteConfig.smtp.user,
        fromEmail: siteConfig.smtp.fromEmail,
        fromName: siteConfig.smtp.fromName
      },
      whatsapp: {
        enabled: siteConfig.whatsapp.enabled,
        phone: siteConfig.whatsapp.phone,
        message: siteConfig.whatsapp.message
      }
    })
  } catch (error) {
    console.error('Erro ao carregar configurações:', error)
    return NextResponse.json(
      { error: 'Erro ao carregar configurações' },
      { status: 500 }
    )
  }
} 