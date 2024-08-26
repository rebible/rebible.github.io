'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  career: string[];
  education: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, career, education }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-[#db7d63]">{position}</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left focus:outline-none focus:ring-2 focus:ring-[#db7d63] focus:ring-opacity-50 rounded p-2 transition-colors duration-200 hover:bg-gray-100"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">{t('teamMember.viewDetails')}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-700">{t('teamMember.career')}</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {career.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">{t('teamMember.education')}</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {education.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TeamMember;
