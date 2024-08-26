import { Inter } from 'next/font/google'
import '../globals.css'
import { TranslationProvider } from '@/contexts/TranslationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Re:Bible - 일상 속 묵상, 함께 나누는 믿음의 여정',
  description: '현대인의 라이프스타일에 맞춘 디지털 성경 플랫폼',
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <TranslationProvider lang={lang}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}
