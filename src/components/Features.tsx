'use client'

import { BookOpen, Users, Lightbulb } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
    <div className="text-[#db7d63] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: t('features.daily.title'),
      description: t('features.daily.description'),
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('features.community.title'),
      description: t('features.community.description'),
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
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
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
