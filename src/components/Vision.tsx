'use client';

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const Vision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="vision" className="py-20 bg-[#db7d63]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-[#db7d63] bg-opacity-10 rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-[#db7d63]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">{t('vision.title')}</h2>
          <p className="text-xl text-center text-gray-600 leading-relaxed">
            {t('vision.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
