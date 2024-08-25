import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Team from '@/components/Team';
import Roadmap from '@/components/Roadmap';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <Header />
        <Hero />
        <Features />
        <Team />
        <Roadmap />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
