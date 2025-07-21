'use client'

import React, { useState, useEffect } from 'react'
import PageHero from '@/components/sections/PageHero'
import { BreadcrumbItem } from '@/components/ui/breadcrumb'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { toast } from 'sonner'
import { ReCaptcha } from '@/components/ReCaptcha'
import { siteConfig } from '@/data/config'

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

  const validateForm = () => {
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast.error('Nome, email e mensagem são obrigatórios')
      return false
    }
    return true
  }

  const handleSendEmail = async () => {
    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sendMethod: 'email',
          recaptchaToken: config?.recaptcha?.enabled ? recaptchaToken : undefined
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Mensagem enviada por email com sucesso!')
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        })
      } else {
        toast.error(data.error || 'Erro ao enviar mensagem por email')
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem por email')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSendWhatsApp = async () => {
    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sendMethod: 'whatsapp',
          recaptchaToken: config?.recaptcha?.enabled ? recaptchaToken : undefined
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Mensagem preparada para WhatsApp!')
        
        // Abrir WhatsApp em nova aba
        if (data.results?.whatsapp?.url) {
          window.open(data.results.whatsapp.url, '_blank')
        }
        
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        })
      } else {
        toast.error(data.error || 'Erro ao preparar mensagem para WhatsApp')
      }
    } catch (error) {
      toast.error('Erro ao preparar mensagem para WhatsApp')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Obter o primeiro endereço para exibir na seção de informações
  const mainAddress = siteConfig.contact.addresses[0]

  return (
    <main>
      <PageHero
        title="Entre em Contato"
        description="Estamos aqui para ajudar! Entre em contato conosco e venha conhecer a Altitude Park!"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/images/contact-hero-bg.jpg"
      />
      
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Vamos Conversar?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Nossa equipe está pronta para atender você e tirar todas as suas dúvidas 
                sobre a Altitude Park. Entre em contato conosco!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Telefone</h3>
                    <p className="text-gray-300">{siteConfig.contact.phone}</p>
                    <p className="text-gray-300">WhatsApp: {siteConfig.contact.whatsapp}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">{siteConfig.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Endereço Principal</h3>
                    <p className="text-gray-300">
                      {mainAddress.street}<br />
                      {mainAddress.city} - {mainAddress.state}, {mainAddress.zipCode}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-300">{mainAddress.workingHours.weekdays}</p>
                    <p className="text-gray-300">{mainAddress.workingHours.weekends}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envie sua Mensagem
              </h3>
              
              <form className="space-y-6">
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
                  placeholder="Conte-nos sobre sua dúvida ou interesse..."
                  required
                  rows={4}
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
                
                {/* Botões de Envio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    type="button"
                    onClick={handleSendEmail}
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
                        <Mail size={16} className="mr-2" />
                        Enviar por Email
                      </>
                    )}
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={handleSendWhatsApp}
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Preparando...
                      </>
                    ) : (
                      <>
                        <MessageSquare size={16} className="mr-2" />
                        Enviar por WhatsApp
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mapa */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-300">
              Venha nos visitar em nossa unidade principal
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-700 h-96 rounded-2xl flex items-center justify-center border border-gray-600">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 text-lg">
                  Mapa interativo será integrado aqui
                </p>
                <p className="text-gray-400">
                  {mainAddress.street}, {mainAddress.city} - {mainAddress.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 