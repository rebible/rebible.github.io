'use client';

import React from 'react';
import { BookOpen, Users, Lightbulb } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import Feature from './Feature';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: t('features.daily.title'),
      description: t('features.daily.description'),
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: t('features.community.title'),
      description: t('features.community.description'),
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: t('features.learning.title'),
      description: t('features.learning.description'),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
