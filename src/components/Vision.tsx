'use client'

import { useTranslation } from '@/contexts/TranslationContext';

const Vision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="vision" className="py-20 bg-[#db7d63] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('vision.title')}</h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          {t('vision.description')}
        </p>
      </div>
    </section>
  );
};

export default Vision;
