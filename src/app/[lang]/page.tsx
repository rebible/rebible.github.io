import { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Team from '@/components/Team'
import Roadmap from '@/components/Roadmap'
import Vision from '@/components/Vision'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // This should be dynamically generated based on the language in a production environment
  return {
    title: 'Re:Bible - 일상 속 묵상, 함께 나누는 믿음의 여정',
    description: '현대인의 라이프스타일에 맞춘 디지털 성경 플랫폼',
  }
}

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Team />
        <Roadmap />
        <Vision />
      </main>
      <Footer />
    </div>
  )
}
