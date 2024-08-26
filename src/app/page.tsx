'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const userLanguage = navigator.language || navigator.languages[0];
    const supportedLanguages = ['en', 'ko'];
    
    // Extract the language code (e.g., 'en' from 'en-US')
    const languageCode = userLanguage.split('-')[0];
    
    // Check if the language is supported, otherwise default to 'en'
    const redirectLanguage = supportedLanguages.includes(languageCode) ? languageCode : 'en';
    
    router.replace(`/${redirectLanguage}`);
  }, [router]);

  return null; // This page doesn't render anything
}
