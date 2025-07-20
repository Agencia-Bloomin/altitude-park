'use client'

import React, { useState, useEffect } from 'react'
import PageHero from '@/components/sections/PageHero'
import { BreadcrumbItem } from '@/components/ui/breadcrumb'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { toast } from 'sonner'
import { ReCaptcha } from '@/components/ReCaptcha'

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Contato' }
]

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [sendMethod, setSendMethod] = useState<'email' | 'whatsapp'>('email')
  const [config, setConfig] = useState<any>(null)
  const [recaptchaToken, setRecaptchaToken] = useState('')

  useEffect(() => {
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/configuracoes')
      if (response.ok) {
        const data = await response.json()
        setConfig(data)
      }
    } catch (error) {
      console.error('Erro ao carregar configurações:', error)
    }
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }
    return value
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    if (name === 'telefone') {
      setFormData(prev => ({
        ...prev,
        [name]: formatPhone(value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast.error('Nome, email e mensagem são obrigatórios')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sendMethod,
          recaptchaToken: config?.recaptcha?.enabled ? recaptchaToken : undefined
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso!')
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        })
        
        // Se foi enviado por WhatsApp, abrir o link
        if (sendMethod === 'whatsapp' && data.results?.whatsapp?.url) {
          window.open(data.results.whatsapp.url, '_blank')
        }
      } else {
        toast.error(data.error || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <PageHero
        title="Entre em Contato"
        description="Estamos aqui para ajudar sua empresa a crescer. Entre em contato conosco!"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/images/contact-hero-bg.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Vamos Conversar?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe está pronta para entender suas necessidades e criar 
                estratégias personalizadas para o sucesso do seu negócio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h3>
                    <p className="text-gray-600">+55 (11) 99999-9999</p>
                    <p className="text-gray-600">+55 (11) 88888-8888</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contato@agencia.com.br</p>
                    <p className="text-gray-600">comercial@agencia.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Rua das Flores, 123 - Centro<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 14h</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Nome Completo"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                  
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <FormField
                  label="Telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                />
                
                <FormField
                  label="Assunto"
                  name="assunto"
                  type="text"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  placeholder="Assunto da mensagem"
                />
                
                <FormField
                  label="Mensagem"
                  name="mensagem"
                  type="textarea"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                  rows={4}
                />

                {/* Método de Envio */}
                <FormField
                  label="Método de Envio"
                  name="sendMethod"
                  type="radio"
                  value={sendMethod}
                  onChange={(e) => setSendMethod(e.target.value as 'email' | 'whatsapp')}
                  options={[
                    {
                      value: 'email',
                      label: 'Email',
                      icon: <Mail size={16} />
                    },
                    {
                      value: 'whatsapp',
                      label: 'WhatsApp',
                      icon: <MessageSquare size={16} />
                    }
                  ]}
                />

                {/* reCAPTCHA */}
                {config?.recaptcha?.enabled && config?.recaptcha?.siteKey && (
                  <ReCaptcha
                    siteKey={config.recaptcha.siteKey}
                    onVerify={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken('')}
                    onError={() => {
                      setRecaptchaToken('')
                      toast.error('Erro na validação reCAPTCHA')
                    }}
                  />
                )}
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mapa */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-600">
              Venha nos visitar em nosso escritório
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Mapa interativo será integrado aqui
                </p>
                <p className="text-gray-500">
                  Rua das Flores, 123 - Centro, São Paulo - SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 