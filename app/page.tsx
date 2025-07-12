import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import Destinations from '@/components/home/destinations';
import Testimonials from '@/components/home/testimonials';
import Newsletter from '@/components/home/newsletter';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Features />
      <Destinations />
      <Testimonials />
      <Newsletter />
    </div>
  );
}