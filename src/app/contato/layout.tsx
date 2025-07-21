import { Metadata } from 'next'
import { generateMetadata as generatePageMetadata } from '@/data/metadata'

export const metadata: Metadata = generatePageMetadata('contact')

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 