'use client'

import dynamic from 'next/dynamic';
import { useTranslation } from '@/contexts/TranslationContext';

const DynamicTeamMember = dynamic(() => import('./TeamMember'), { ssr: false });

const Team: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('team.david.name'),
      position: t('team.david.position'),
      image: '/david.jpg',
      career: [
        t('team.david.career.1'),
        t('team.david.career.2'),
        t('team.david.career.3')
      ],
      education: [
        t('team.david.education.1'),
        t('team.david.education.2'),
        t('team.david.education.3'),
      ],
    },
    {
      name: t('team.essie.name'),
      position: t('team.essie.position'),
      image: '/essie.jpg',
      career: [
        t('team.essie.career.1'),
        t('team.essie.career.2')
      ],
      education: [
        t('team.essie.education.1'),
        t('team.essie.education.2'),
        t('team.essie.education.3'),
      ],
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t('team.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <DynamicTeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

