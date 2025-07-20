import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/data/config'

// Função para validar reCAPTCHA
async function validateRecaptcha(token: string, secretKey: string) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('Erro ao validar reCAPTCHA:', error)
    return false
  }
}

// Função para enviar email
async function sendEmail(formData: any) {
  if (!siteConfig.smtp.host) {
    throw new Error('Configurações SMTP não encontradas')
  }

  const nodemailer = require('nodemailer')
  
  const transporter = nodemailer.createTransport({
    host: siteConfig.smtp.host,
    port: parseInt(siteConfig.smtp.port),
    secure: siteConfig.smtp.secure,
    auth: {
      user: siteConfig.smtp.user,
      pass: siteConfig.smtp.password,
    },
  })

  const htmlContent = `
    <h2>Nova mensagem do formulário de contato</h2>
    <p><strong>Nome:</strong> ${formData.nome}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Telefone:</strong> ${formData.telefone || 'Não informado'}</p>
    <p><strong>Assunto:</strong> ${formData.assunto || 'Não informado'}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${formData.mensagem.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><small>Enviado em: ${new Date().toLocaleString('pt-BR')}</small></p>
  `

  const info = await transporter.sendMail({
    from: `"${siteConfig.smtp.fromName}" <${siteConfig.smtp.fromEmail}>`,
    to: siteConfig.smtp.fromEmail,
    subject: `Nova mensagem: ${formData.assunto || 'Formulário de Contato'}`,
    text: `
      Nome: ${formData.nome}
      Email: ${formData.email}
      Telefone: ${formData.telefone || 'Não informado'}
      Assunto: ${formData.assunto || 'Não informado'}
      Mensagem: ${formData.mensagem}
    `,
    html: htmlContent,
  })

  return info.messageId
}

// Função para enviar WhatsApp
function sendWhatsApp(formData: any) {
  if (!siteConfig.whatsapp.enabled || !siteConfig.whatsapp.phone) {
    throw new Error('WhatsApp não configurado')
  }

  const message = `
${siteConfig.whatsapp.message}

*Dados do formulário:*
Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone || 'Não informado'}
Assunto: ${formData.assunto || 'Não informado'}
Mensagem: ${formData.mensagem}
  `.trim()

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(message)}`
  
  return whatsappUrl
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validações básicas
    if (!formData.nome || !formData.email || !formData.mensagem) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Validar reCAPTCHA se estiver habilitado
    if (siteConfig.recaptcha.enabled) {
      const recaptchaToken = formData.recaptchaToken
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'Token reCAPTCHA é obrigatório' },
          { status: 400 }
        )
      }

      const isValidRecaptcha = await validateRecaptcha(
        recaptchaToken,
        siteConfig.recaptcha.secretKey
      )

      if (!isValidRecaptcha) {
        return NextResponse.json(
          { error: 'Validação reCAPTCHA falhou' },
          { status: 400 }
        )
      }
    }

    const results: any = {}

    // Enviar por email se configurado
    if (siteConfig.smtp.host) {
      try {
        const messageId = await sendEmail(formData)
        results.email = { success: true, messageId }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
        results.email = { success: false, error: errorMessage }
      }
    }

    // Enviar por WhatsApp se configurado
    if (siteConfig.whatsapp.enabled) {
      try {
        const whatsappUrl = sendWhatsApp(formData)
        results.whatsapp = { success: true, url: whatsappUrl }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
        results.whatsapp = { success: false, error: errorMessage }
      }
    }

    // Verificar se pelo menos um método funcionou
    const hasSuccess = Object.values(results).some((result: any) => result.success)
    
    if (!hasSuccess) {
      return NextResponse.json(
        { error: 'Nenhum método de envio configurado ou funcionando' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso',
      results
    })

  } catch (error) {
    console.error('Erro ao processar formulário:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 