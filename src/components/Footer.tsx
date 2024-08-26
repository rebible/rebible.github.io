'use client'

import { useTranslation } from '@/contexts/TranslationContext';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Re:Bible</h3>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">{t('nav.features')}</Link></li>
              <li><Link href="#team" className="text-gray-400 hover:text-white transition-colors duration-200">{t('nav.team')}</Link></li>
              <li><Link href="#roadmap" className="text-gray-400 hover:text-white transition-colors duration-200">{t('nav.roadmap')}</Link></li>
              <li><Link href="#vision" className="text-gray-400 hover:text-white transition-colors duration-200">{t('nav.vision')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="https://open.kakao.com/o/gO3QEzDg" className="text-gray-400 hover:text-white transition-colors duration-200" target="_blank"><MessageCircle /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
