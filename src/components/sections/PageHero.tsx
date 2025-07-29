import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'
import { getPageMetadata } from '@/data/metadata'

interface PageHeroProps {
  title?: string
  description?: string
  breadcrumbItems: BreadcrumbItem[]
  backgroundImage?: string
  className?: string
  page?: string // Para buscar metadados automaticamente
  h1?: string // H1 customizado (opcional)
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  breadcrumbItems,
  backgroundImage,
  className = '',
  page,
  h1
}) => {
  // Obter metadados da página se especificada
  const pageMetadata = page ? getPageMetadata(page) : null
  
  // Usar H1 dos metadados, H1 customizado, ou title como fallback
  const heroTitle = h1 || pageMetadata?.h1 || title || 'Altitude Park'
  return (
    <section 
      className={`relative h-[500px] flex items-center pt-32 pb-20 lg:pt-56 lg:pb-32 bg-custom-background ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/60" />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex justify-center mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {heroTitle}
          </h1>
          
          {/* Description */}
          {description && (
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHero 