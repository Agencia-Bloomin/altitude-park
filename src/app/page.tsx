import { 
  HeroBanner, 
  UnitsSection, 
  PricingSection, 
  AttractionsSection, 
  FAQSection, 
  PartySection 
} from '@/components';
import { generateMetadata as generatePageMetadata } from '@/data/metadata';
import type { Metadata } from 'next';
import GSAPAnimations from '@/components/GSAPAnimations';

// Gerar metadados específicos para a página home
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('home')
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-custom-background">
      <GSAPAnimations />
      <HeroBanner
        title="Altitude Park"
        subtitle="O melhor parque de trampolim do Brasil! Diversão garantida para toda a família com as melhores atrações e segurança."
        primaryButtonText="Compre seu Ingresso"
        primaryButtonLink="/ingressos"
        secondaryButtonText="Faça sua Festa"
        secondaryButtonLink="/faca-sua-festa"
      />
      
      <UnitsSection />
      <PricingSection />
      <AttractionsSection />
      <FAQSection />
      <PartySection />
    </div>
  );
} 