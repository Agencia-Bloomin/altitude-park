import { Metadata } from 'next';
import { 
  HeroBanner, 
  AboutSection,
  ProductsSection,
  FAQSection,
  ReviewsSection,
  BlogSection,
  CTASection
} from '@/components';
import { generateMetadata } from '@/data/metadata';

export const metadata: Metadata = generateMetadata('home');

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ProductsSection />
      <ReviewsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
    </>
  );
} 