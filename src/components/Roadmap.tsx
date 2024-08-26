'use client'

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import RoadmapItem from './RoadmapItem';
import { BookOpen, Users, Cpu } from 'lucide-react';

const Roadmap: React.FC = () => {
  const { t } = useTranslation();

  const roadmapItems = [
    {
      phase: "1",
      icon: <BookOpen className="w-6 h-6" />,
      title: t('roadmap.phase1.title'),
      duration: t('roadmap.phase1.duration'),
      description: t('roadmap.phase1.description'),
      details: t('roadmap.phase1.details'),
    },
    {
      phase: "2",
      icon: <Users className="w-6 h-6" />,
      title: t('roadmap.phase2.title'),
      duration: t('roadmap.phase2.duration'),
      description: t('roadmap.phase2.description'),
      details: t('roadmap.phase2.details'),
    },
    {
      phase: "3",
      icon: <Cpu className="w-6 h-6" />,
      title: t('roadmap.phase3.title'),
      duration: t('roadmap.phase3.duration'),
      description: t('roadmap.phase3.description'),
      details: t('roadmap.phase3.details'),
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('roadmap.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              phase={item.phase}
              icon={item.icon}
              title={item.title}
              duration={item.duration}
              description={item.description}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
