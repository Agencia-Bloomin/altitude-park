import { Metadata } from 'next';
import { AddressesSection } from '@/components/sections/AddressesSection';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Nossas Unidades | Altitude Park',
  description: 'Encontre a unidade mais próxima de você. Confira endereços, horários de funcionamento e informações de contato de todas as nossas sedes.',
  keywords: 'unidades, endereços, horários, funcionamento, sedes, Altitude Park',
  openGraph: {
    title: 'Nossas Unidades | Altitude Park',
    description: 'Encontre a unidade mais próxima de você. Confira endereços, horários de funcionamento e informações de contato de todas as nossas sedes.',
    type: 'website',
  },
};

export default function UnidadesPage() {
  return (
    <main>
      <PageHero
        title="Nossas Unidades"
        description="Confira endereços, horários de funcionamento e informações de contato de todas as nossas sedes."
        backgroundImage="/images/banners/hero-bg.jpg"
        breadcrumbItems={[
          { label: 'Início', href: '/' },
          { label: 'Unidades', href: '/unidades' }
        ]}
      />
      <AddressesSection />
    </main>
  );
} 