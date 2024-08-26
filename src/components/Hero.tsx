'use client'

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-background.png"
        alt="Bible study background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <a
          href="https://open.kakao.com/o/gO3QEzDg"
          className="bg-[#db7d63] text-white py-3 px-8 rounded-full font-bold hover:bg-[#c26e56] transition duration-300 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
