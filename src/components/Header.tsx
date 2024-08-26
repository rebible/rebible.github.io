'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang } = useTranslation();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#features", label: t('nav.features') },
    { href: "#team", label: t('nav.team') },
    { href: "#roadmap", label: t('nav.roadmap') },
    { href: "#vision", label: t('nav.vision') },
  ];

  const switchLanguage = lang === 'ko' ? 'en' : 'ko';
  const switchLanguageLabel = lang === 'ko' ? t('languageToggle.en') : t('languageToggle.ko');

  const logoColor = isScrolled ? '#434343' : '#ffffff'; // 스크롤 여부에 따라 로고 색상 변경

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className={`absolute inset-0 backdrop-blur-md ${
        isScrolled ? 'bg-white/70' : 'bg-black/10'
      } transition-all duration-300`}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <svg width="35.351" height="40.859" viewBox="0 0 35.351 40.859" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill={logoColor} d="M26.654,40.859H5.164C2.317,40.859,0,38.542,0,35.695V8.698C0,5.85,2.317,3.533,5.164,3.533h21.49
                  c2.847,0,5.164,2.317,5.164,5.165v26.997C31.817,38.542,29.501,40.859,26.654,40.859z M5.164,5.237
                  c-1.908,0-3.46,1.552-3.46,3.461v26.997c0,1.907,1.552,3.46,3.46,3.46h21.49c1.908,0,3.46-1.552,3.46-3.46V8.698
                  c0-1.908-1.552-3.461-3.46-3.461H5.164z"/>
                <g>
                  <path fill="#DB7D63" d="M29.444,10.961c-2.787,0-5.055-2.268-5.055-5.055s2.268-5.054,5.055-5.054s5.055,2.267,5.055,5.054
                    S32.231,10.961,29.444,10.961z"/>
                  <path fill={logoColor} d="M29.444,1.704c2.317,0,4.203,1.885,4.203,4.203c0,2.317-1.885,4.203-4.203,4.203
                    c-2.317,0-4.203-1.885-4.203-4.203C25.242,3.589,27.127,1.704,29.444,1.704 M29.444,0c-3.262,0-5.906,2.644-5.906,5.906
                    c0,3.262,2.644,5.906,5.906,5.906c3.262,0,5.906-2.644,5.906-5.906C35.351,2.644,32.706,0,29.444,0L29.444,0z"/>
                </g>
                <g>
                  <path fill={logoColor} d="M15.909,32.044c-0.47,0-0.852-0.382-0.852-0.852V13.445c0-0.47,0.382-0.852,0.852-0.852
                    s0.852,0.382,0.852,0.852v17.747C16.761,31.662,16.379,32.044,15.909,32.044z"/>
                  <path fill={logoColor} d="M21.369,20.013h-10.92c-0.47,0-0.852-0.382-0.852-0.852s0.382-0.852,0.852-0.852h10.92
                    c0.47,0,0.852,0.382,0.852,0.852S21.839,20.013,21.369,20.013z"/>
                </g>
              </g>
            </svg>
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } transition-colors duration-300`}>Re:Bible</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium hover:text-[#db7d63] transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="relative group">
              <button className={`flex items-center space-x-1 text-sm font-medium hover:text-[#db7d63] transition-colors duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <span>{t(`languageToggle.${lang}`)}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href={pathname.replace(`/${lang}`, `/${switchLanguage}`)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {switchLanguageLabel}
                </Link>
              </div>
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:bg-gray-100 hover:bg-opacity-20`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-[#db7d63] transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <Link
              href={pathname.replace(`/${lang}`, `/${switchLanguage}`)}
              className="block py-2 text-gray-700 hover:text-[#db7d63] transition-colors duration-200"
              onClick={toggleMenu}
            >
              {switchLanguageLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
