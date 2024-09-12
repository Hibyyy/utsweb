import Hero from '@/components/Hero';
import Content from '@/components/Content';
import FooterSection from '@/components/Footer';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Content />
      <Carousel />

      <FooterSection />
    </div>
  );
}
