import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

interface TeamMemberProps {
  id: string;
  name: string;
  position: string;
  image: string;
  career: string[];
  education: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, position, image, career, education 
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
            <p className="text-[#db7d63] text-lg">{position}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-gray-700 text-lg">{t('teamMember.career')}</h4>
            <ul className="list-disc pl-5 space-y-1">
              {career.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-700 text-lg">{t('teamMember.education')}</h4>
            <ul className="list-disc pl-5 space-y-1">
              {education.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
