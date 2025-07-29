'use client'

import { useEffect, useRef, useState } from 'react'

interface ReCaptchaProps {
  siteKey: string
  onVerify: (token: string) => void
  onExpired: () => void
  onError: () => void
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      render: (element: string | HTMLElement, options: any) => number
      reset: (widgetId: number) => void
      getResponse: (widgetId: number) => string
    }
  }
}

export function ReCaptcha({ siteKey, onVerify, onExpired, onError }: ReCaptchaProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === 'undefined' || !siteKey || !recaptchaRef.current) {
      return
    }

    // Verificar se o script já foi carregado
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        if (recaptchaRef.current) {
          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: siteKey,
            callback: onVerify,
            'expired-callback': onExpired,
            'error-callback': onError,
          })
        }
      })
      return
    }

    // Carregar script do reCAPTCHA
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.ready(() => {
          if (recaptchaRef.current) {
            widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
              sitekey: siteKey,
              callback: onVerify,
              'expired-callback': onExpired,
              'error-callback': onError,
            })
          }
        })
      }
    }

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [isClient, siteKey, onVerify, onExpired, onError])

  if (!isClient) {
    return (
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="w-64 h-12 bg-custom-background rounded animate-pulse"></div>
        </div>
      </div>
    )
  }

  const reset = () => {
    if (widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current)
    }
  }

  const getResponse = () => {
    if (widgetIdRef.current !== null && window.grecaptcha) {
      return window.grecaptcha.getResponse(widgetIdRef.current)
    }
    return ''
  }

  return (
    <div className="mt-4">
      <div ref={recaptchaRef} className="flex justify-center"></div>
    </div>
  )
} 