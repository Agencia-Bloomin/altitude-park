import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

interface PageHeroProps {
  title: string
  description?: string
  breadcrumbItems: BreadcrumbItem[]
  backgroundImage?: string
  className?: string
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  breadcrumbItems,
  backgroundImage,
  className = ''
}) => {
  return (
    <section 
      className={`relative py-20 lg:py-32 bg-gray-900 ${className}`}
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
            {title}
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